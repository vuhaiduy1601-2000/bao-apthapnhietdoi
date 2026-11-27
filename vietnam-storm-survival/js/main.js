(() => {
 const $=id=>document.getElementById(id);
 let sound=true,reduced=false;
 $("startBtn").addEventListener("click",()=>window.StormGame.start());
 $("levelSelectBtn").addEventListener("click",()=>window.StormGame.showLevels());
 $("backMenuBtn").addEventListener("click",()=>{document.getElementById("levelsScreen").classList.add("hidden");document.getElementById("menuScreen").classList.remove("hidden")});
 $("pauseBtn").addEventListener("click",()=>window.StormGame.pause());
 $("resumeBtn").addEventListener("click",()=>window.StormGame.resume());
 $("pauseMenuBtn").addEventListener("click",()=>window.StormGame.quit());
 $("quitBtn").addEventListener("click",()=>window.StormGame.quit());
 $("retryBtn").addEventListener("click",()=>window.StormGame.retry());
 $("nextBtn").addEventListener("click",()=>window.StormGame.next());
 $("resultMenuBtn").addEventListener("click",()=>window.StormGame.quit());
 $("soundBtn").addEventListener("click",()=>{sound=!sound;window.StormSound.setEnabled(sound);$("soundBtn").innerHTML=(sound?"♫":"♩")+" <span>"+(sound?"ÂM THANH":"TẮT TIẾNG")+"</span>";});
 $("motionBtn").addEventListener("click",()=>{reduced=!reduced;window.StormVisual.setReduced(reduced);$("motionBtn").innerHTML="◌ <span>"+(reduced?"HIỆU ỨNG GIẢM":"HIỆU ỨNG")+"</span>";});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(!$("pauseOverlay").classList.contains("hidden"))window.StormGame.resume();else window.StormGame.pause();}if(["ArrowDown","ArrowRight","s","d"].includes(e.key)){e.preventDefault();window.StormGame.moveSelection(1)}if(["ArrowUp","ArrowLeft","w","a"].includes(e.key)){e.preventDefault();window.StormGame.moveSelection(-1)}if(e.key==="Enter"){const active=$("choiceList").querySelector(".selected");if(active)active.click();}if(/^[1-4]$/.test(e.key)){const target=$("choiceList").querySelectorAll("button")[Number(e.key)-1];if(target)target.click();}});
 // Menu rain particles, decorative and lightweight.
 const rain=$("menuRain");for(let i=0;i<55;i++){const d=document.createElement("i");d.className="rain-streak";d.style.setProperty("--x",Math.random()*100+"%");d.style.setProperty("--dur",(.8+Math.random()*1.5)+"s");d.style.setProperty("--op",(.2+Math.random()*.55));d.style.animationDelay=(-Math.random()*2)+"s";rain.appendChild(d);}
})();