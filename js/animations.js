/* Canvas 2D: cảnh nền được vẽ procedural, không cần ảnh ngoài. */
(() => {
 const canvas=document.getElementById("stormCanvas"),ctx=canvas.getContext("2d");
 let w=0,h=0,dpr=1,raf=0,last=0,scene={wind:1,rain:1,effect:"safe",phase:0},reduced=false,particles=[];
 const rand=(a,b)=>a+Math.random()*(b-a);
 function resize(){const r=canvas.getBoundingClientRect();dpr=Math.min(window.devicePixelRatio||1,1.5);w=Math.max(1,r.width);h=Math.max(1,r.height);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:reduced?45:110},()=>({x:rand(0,w),y:rand(0,h),l:rand(8,25),s:rand(4,10),a:rand(.2,.65)}));}
 window.addEventListener("resize",resize);
 function polygon(points,fill){ctx.fillStyle=fill;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fill();}
 function drawTree(x,y,s,t,wind){ctx.save();ctx.translate(x,y);ctx.rotate(Math.sin(t*1.5+x)*.035*wind);ctx.fillStyle="#4b4035";ctx.fillRect(-3*s,-65*s,6*s,65*s);ctx.fillStyle="#28574e";for(let i=0;i<4;i++){ctx.beginPath();ctx.ellipse(Math.sin(t+x+i)*5*s,-70*s+i*8*s,22*s,15*s,-.3,0,Math.PI*2);ctx.fill()}ctx.restore();}
 function drawHouse(x,y,s,damage,t){ctx.save();ctx.translate(x,y);ctx.translate(Math.sin(t*1.8)*damage*2,0);ctx.fillStyle="#b7b2a3";ctx.fillRect(0,-55*s,100*s,55*s);polygon([[ -8*s,-55*s],[48*s,-93*s],[108*s,-55*s]],damage>.6?"#6b777b":"#657783");ctx.fillStyle="#344957";ctx.fillRect(17*s,-34*s,17*s,22*s);ctx.fillRect(63*s,-34*s,18*s,16*s);if(damage>.5){ctx.strokeStyle="#d9e2e5";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(64*s,-34*s);ctx.lineTo(72*s,-23*s);ctx.lineTo(68*s,-17*s);ctx.stroke()}ctx.restore();}
 function draw(t){ctx.clearRect(0,0,w,h);const storm=scene.wind,base=ctx.createLinearGradient(0,0,0,h);base.addColorStop(0,scene.phase>2?"#263746":"#496171");base.addColorStop(.62,"#263f4e");base.addColorStop(1,"#142c3b");ctx.fillStyle=base;ctx.fillRect(0,0,w,h);
  // Mây chuyển động
  for(let i=0;i<7;i++){let x=((i*170-t*(8+storm*13))%(w+250)+w+250)%(w+250)-100;ctx.fillStyle=`rgba(13,29,42,${.26+i*.035})`;ctx.beginPath();ctx.ellipse(x,45+(i%3)*24,105+(i%2)*35,30+(i%3)*8,0,0,Math.PI*2);ctx.fill();}
  // Đường chân trời và biển/đô thị
  const ground=h*.68;ctx.fillStyle="#173746";ctx.fillRect(0,ground,w,h-ground);
  ctx.fillStyle="#0d5265";ctx.fillRect(0,ground+20,w,h-ground);for(let i=0;i<9;i++){let yy=ground+25+i*11+Math.sin(t*2+i)*3;ctx.strokeStyle="rgba(125,215,226,.24)";ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(0,yy);ctx.quadraticCurveTo(w*.5,yy+Math.sin(t+i)*8,w,yy-4);ctx.stroke();}
  // Nhà, cây và đường
  const scale=Math.min(w/700,1.25);drawHouse(w*.12,ground+26,scale,scene.effect==="roof"?.9:scene.phase>2?.35:0,t);
  drawHouse(w*.72,ground+23,scale*.8,scene.effect==="glass"?.7:0,t);
  drawTree(w*.48,ground+28,scale,t,storm);drawTree(w*.91,ground+25,scale*.85,t,storm);
  // Mưa
  if(!reduced){ctx.lineWidth=1;for(const p of particles){p.x-=p.s*storm*.65;p.y+=p.s*(.7+storm*.6);if(p.y>h){p.y=-20;p.x=rand(0,w)}if(p.x<0)p.x=w;ctx.strokeStyle=`rgba(188,224,238,${p.a*Math.min(1,scene.rain)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-5*storm,p.y+p.l*scene.rain);ctx.stroke();}}
  // Vệt nước chảy trên mặt đường
  ctx.strokeStyle="rgba(91,190,205,.3)";for(let i=0;i<20;i++){let x=(i*53+t*35)%(w+60)-30;ctx.beginPath();ctx.moveTo(x,ground+48+(i%4)*8);ctx.lineTo(x+24,ground+48+(i%4)*8);ctx.stroke();}
  // Vật thể bay riêng cho hậu quả
  if(scene.effect==="debris"||scene.effect==="sign"||scene.effect==="roof"){ctx.save();ctx.translate((t*95)%(w+120)-60,h*.42);ctx.rotate(t*3);ctx.fillStyle="#a6a89e";ctx.fillRect(-13,-3,26,6);ctx.restore();}
  if(scene.effect==="tree"){ctx.save();ctx.translate(w*.48,ground+28);ctx.rotate(Math.min(1.1,(t%2)*.7));ctx.fillStyle="#4b4035";ctx.fillRect(-3,-65,6,65);ctx.restore();}
  if(scene.effect==="surge"||scene.effect==="wave"||scene.effect==="flood"){ctx.fillStyle="rgba(33,154,178,.2)";ctx.fillRect(0,ground+5,w,h-ground-5);}
  // Chớp thưa và ngắn: không phủ trắng toàn màn hình, tránh nhấp nháy liên tục.
  // Một tia chớp mô phỏng xuất hiện khoảng mỗi 13,5 giây ở các giai đoạn bão mạnh.
  const lightningBeat=t%13.5;
  if(scene.phase>1&&lightningBeat<.16){
    const pulse=Math.sin((lightningBeat/.16)*Math.PI);
    ctx.save();
    ctx.globalAlpha=.18*pulse;
    polygon([[w*.78,0],[w*.75,h*.16],[w*.8,h*.16],[w*.73,h*.36],[w*.84,h*.15],[w*.79,h*.15]],"#d5edf3");
    ctx.restore();
  }
  // Sương mưa
  const fog=ctx.createLinearGradient(0,ground-25,0,h);fog.addColorStop(0,"rgba(150,188,199,0)");fog.addColorStop(1,"rgba(133,178,194,.15)");ctx.fillStyle=fog;ctx.fillRect(0,ground-25,w,h-ground+25);
 }
 function loop(ts){if(!last)last=ts;let dt=Math.min(.05,(ts-last)/1000);last=ts;draw(ts/1000);raf=requestAnimationFrame(loop);}
 function start(){resize();if(!raf)raf=requestAnimationFrame(loop)}
 window.StormVisual={start,setScene(o){scene={...scene,...o}},setReduced(v){reduced=v;resize()},shake(ms=500){const el=document.getElementById("sceneFrame");if(reduced)return;el.animate([{transform:"translate(0,0)"},{transform:"translate(-5px,2px)"},{transform:"translate(4px,-3px)"},{transform:"translate(-2px,2px)"},{transform:"translate(0,0)"}],{duration:ms,iterations:1})}};
 start();
})();