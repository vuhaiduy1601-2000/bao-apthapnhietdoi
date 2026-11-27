/* Dữ liệu tình huống: nội dung giáo dục định tính, không phải dự báo thời tiết. */
window.STORM_LEVELS = [
 {name:"ÁP THẤP NHIỆT ĐỚI",place:"LÀNG QUÊ BẮC BỘ",weather:"MÂY DÔNG • GIÓ TĂNG DẦN",desc:"Nhận biết dấu hiệu và chuẩn bị sớm.",scenes:[
  {title:"Có bản tin áp thấp nhiệt đới",text:"Loa phát thanh địa phương thông báo áp thấp có khả năng gây mưa và gió mạnh. Bạn nên làm gì trước tiên?",risk:"CẢNH GIÁC",choices:[
   {text:"Theo dõi bản tin chính thức, kiểm tra phương án của gia đình.",ok:true,why:"Bạn cập nhật thông tin từ cơ quan khí tượng và chính quyền, đồng thời chủ động chuẩn bị." ,effect:"safe"},
   {text:"Bỏ qua vì trời hiện tại vẫn chưa mưa.",ok:false,why:"Thời tiết có thể thay đổi nhanh. Chủ quan khiến gia đình không kịp chuẩn bị.",effect:"rain"},
   {text:"Ra bờ sông, bờ biển xem tình hình.",ok:false,why:"Tiếp cận khu vực nước nguy hiểm khi thời tiết xấu làm tăng rủi ro.",effect:"wave"},
   {text:"Chia sẻ tin đồn chưa kiểm chứng để cảnh báo mọi người.",ok:false,why:"Tin chưa xác minh có thể gây hoang mang và làm sai lệch hướng dẫn.",effect:"lightning"}]},
  {title:"Chuẩn bị trước khi mưa lớn",text:"Gia đình có người già và trẻ nhỏ. Việc nào nên làm ngay?",risk:"CHUẨN BỊ",choices:[
   {text:"Chuẩn bị nước uống, thuốc, đèn pin, pin và giấy tờ cần thiết.",ok:true,why:"Bộ vật dụng thiết yếu giúp gia đình chủ động nếu mất điện hoặc phải sơ tán.",effect:"safe"},
   {text:"Đợi đến khi gió mạnh mới mua đồ dự trữ.",ok:false,why:"Ra ngoài lúc thời tiết xấu làm tăng nguy cơ tai nạn.",effect:"wind"},
   {text:"Để các vật dụng ngoài sân cho tiện lấy.",ok:false,why:"Đồ vật có thể bị gió cuốn, gây nguy hiểm cho người và công trình.",effect:"debris"},
   {text:"Tự ý đi qua vùng trũng để kiểm tra mực nước.",ok:false,why:"Không nên đi vào khu vực có nguy cơ ngập khi mưa đang tăng.",effect:"flood"}]},
  {title:"Kiểm tra nhà cửa",text:"Gió bắt đầu mạnh lên. Bạn nên xử lý khu vực ngoài nhà thế nào?",risk:"PHÒNG NGỪA",choices:[
   {text:"Cất hoặc cố định đồ vật dễ bị gió cuốn; kiểm tra cửa an toàn.",ok:true,why:"Giảm vật bay và hạn chế gió, nước tạt vào nhà.",effect:"safe"},
   {text:"Leo lên mái khi gió đang giật để sửa anten.",ok:false,why:"Làm việc trên cao trong gió mạnh rất nguy hiểm.",effect:"roof"},
   {text:"Đứng dưới cây lớn để tránh mưa.",ok:false,why:"Cành cây có thể gãy đổ khi gió mạnh.",effect:"tree"},
   {text:"Chạm tay kiểm tra dây điện ngoài sân bị võng.",ok:false,why:"Dây điện có thể còn điện; cần tránh xa và báo đơn vị chức năng.",effect:"spark"}]}
 ]},
 {name:"BÃO TIẾN GẦN BỜ",place:"KHU DÂN CƯ VEN BIỂN MIỀN TRUNG",weather:"MƯA LỚN • GIÓ GIẬT",desc:"Gia cố an toàn và sẵn sàng sơ tán.",scenes:[
  {title:"Nhà ở gần khu vực ven biển",text:"Chính quyền phát thông báo sơ tán một số hộ ở vùng nguy hiểm. Gia đình bạn nên làm gì?",risk:"NGUY HIỂM CAO",choices:[
   {text:"Chấp hành sơ tán theo hướng dẫn, đến nơi trú tránh được chỉ định.",ok:true,why:"Sơ tán theo lệnh và tuyến an toàn giúp tránh nước dâng, sóng lớn và gió mạnh.",effect:"safe"},
   {text:"Ở lại vì nhà vừa được gia cố.",ok:false,why:"Gia cố nhà không thay thế lệnh sơ tán tại khu vực nguy hiểm.",effect:"surge"},
   {text:"Tự chọn đường ven biển để đi nhanh hơn.",ok:false,why:"Đường ven biển có thể chịu sóng tràn, gió giật và ngập.",effect:"wave"},
   {text:"Chờ đến khi bão đổ bộ mới rời đi.",ok:false,why:"Di chuyển trong thời điểm bão mạnh làm nguy cơ tăng cao.",effect:"wind"}]},
  {title:"Gia cố mái và cửa",text:"Mưa gió đang tăng. Bạn phát hiện một tấm tôn lỏng trên mái.",risk:"RỦI RO",choices:[
   {text:"Không leo lên mái; báo người có chuyên môn xử lý khi điều kiện an toàn.",ok:true,why:"Không tiếp xúc mái nhà khi gió mạnh. Ưu tiên tránh xa vùng có nguy cơ vật liệu rơi.",effect:"safe"},
   {text:"Leo lên mái buộc tôn ngay.",ok:false,why:"Gió giật và bề mặt trơn có thể khiến bạn ngã hoặc bị cuốn.",effect:"roof"},
   {text:"Đứng sát dưới mái tôn để giữ nó.",ok:false,why:"Tấm tôn có thể bung và rơi xuống.",effect:"debris"},
   {text:"Dùng dây điện buộc tạm tấm tôn.",ok:false,why:"Dây điện không phải vật liệu gia cố và có nguy cơ điện giật.",effect:"spark"}]},
  {title:"Tàu thuyền ngoài khơi",text:"Người thân làm nghề biển gọi báo đang chuẩn bị về bờ. Bạn khuyên điều gì?",risk:"CẢNH BÁO",choices:[
   {text:"Làm theo thông báo của cơ quan chức năng, tìm nơi neo đậu tránh trú an toàn.",ok:true,why:"Tàu thuyền cần vào nơi tránh trú theo chỉ đạo; không cố hoạt động khi có cảnh báo.",effect:"safe"},
   {text:"Cố đánh bắt thêm một chuyến.",ok:false,why:"Ra khơi khi có cảnh báo bão/áp thấp đe dọa tính mạng.",effect:"wave"},
   {text:"Neo tàu ở cửa sông không theo hướng dẫn.",ok:false,why:"Cửa sông có thể có dòng chảy mạnh và nước dâng.",effect:"surge"},
   {text:"Bơi ra hỗ trợ kéo tàu vào.",ok:false,why:"Không xuống nước hoặc ra khu vực sóng gió để cứu kéo tàu.",effect:"wave"}]}
 ]},
 {name:"BÃO ĐỔ BỘ",place:"THÀNH PHỐ VEN BIỂN",weather:"GIÓ BÃO • SÓNG LỚN",desc:"Tìm nơi trú ẩn và tránh các vùng phơi nhiễm.",scenes:[
  {title:"Gió giật mạnh ngoài phố",text:"Cây ven đường nghiêng ngả, biển quảng cáo rung lắc. Bạn đang ở ngoài đường.",risk:"RẤT NGUY HIỂM",choices:[
   {text:"Tránh xa cây, cột điện, biển quảng cáo; vào công trình kiên cố gần nhất nếu an toàn.",ok:true,why:"Tránh xa vật có thể đổ hoặc bay; trú trong công trình kiên cố, tránh cửa kính.",effect:"safe"},
   {text:"Chạy đến trú dưới tán cây lớn.",ok:false,why:"Cây và cành có thể gãy đổ trong gió bão.",effect:"tree"},
   {text:"Đứng quay video gần biển để ghi hình sóng.",ok:false,why:"Sóng lớn và gió giật có thể cuốn người ra xa.",effect:"wave"},
   {text:"Nấp sát biển quảng cáo lớn.",ok:false,why:"Biển quảng cáo có thể bật khỏi kết cấu và đổ.",effect:"sign"}]},
  {title:"Chọn vị trí trú trong nhà",text:"Bạn đã vào một ngôi nhà kiên cố. Nơi nào an toàn hơn trong lúc bão mạnh?",risk:"TRÚ ẨN",choices:[
   {text:"Ở phòng phía trong, xa cửa kính và cửa ra vào; làm theo hướng dẫn.",ok:true,why:"Giảm nguy cơ bị kính vỡ và vật thể bay làm bị thương.",effect:"safe"},
   {text:"Đứng cạnh cửa sổ nhìn bão.",ok:false,why:"Kính có thể vỡ do vật va đập hoặc áp lực gió.",effect:"glass"},
   {text:"Ra ban công kiểm tra mái tôn.",ok:false,why:"Ban công phơi nhiễm trực tiếp với gió và vật thể bay.",effect:"roof"},
   {text:"Đi ra ngoài tìm điện thoại có sóng tốt.",ok:false,why:"Không ra ngoài khi bão đang diễn ra; hãy giữ liên lạc trong nơi trú an toàn.",effect:"wind"}]},
  {title:"Nước biển dâng và sóng tràn",text:"Nước bắt đầu tràn qua tuyến đường sát biển. Bạn nên làm gì?",risk:"NGUY CẤP",choices:[
   {text:"Rời xa bờ biển, vùng trũng; đến nơi cao và an toàn theo hướng dẫn.",ok:true,why:"Tránh vùng nước dâng và sóng tràn, không cố vượt qua dòng nước.",effect:"safe"},
   {text:"Đi bộ qua dòng nước để về nhà.",ok:false,why:"Dòng nước có thể mạnh, sâu hoặc che khuất hố và vật cản.",effect:"surge"},
   {text:"Đứng trên kè biển quan sát.",ok:false,why:"Sóng lớn có thể tràn qua kè và cuốn người.",effect:"wave"},
   {text:"Lái xe máy qua đoạn nước ngập.",ok:false,why:"Nước ngập có thể làm xe mất thăng bằng hoặc chết máy.",effect:"flood"}]}
 ]},
 {name:"BÃO CỰC MẠNH",place:"KHU DÂN CƯ ĐÔ THỊ",weather:"GIÓ DỮ DỘI • VẬT THỂ BAY",desc:"Ứng phó trong điều kiện nguy hiểm cực cao.",scenes:[
  {title:"Mái nhà phát ra tiếng động",text:"Gió giật làm mái tôn rung bật. Bạn đang ở trong nhà.",risk:"CỰC KỲ NGUY HIỂM",choices:[
   {text:"Di chuyển đến khu vực kiên cố phía trong, tránh xa mái và cửa kính.",ok:true,why:"Giảm nguy cơ bị thương do mái, kính hoặc vật liệu rơi.",effect:"safe"},
   {text:"Mở cửa ra ngoài để giữ mái.",ok:false,why:"Mở cửa khi gió mạnh có thể làm gió lùa và gây nguy hiểm.",effect:"roof"},
   {text:"Lên tầng mái chèn vật nặng.",ok:false,why:"Không lên mái trong bão; gió giật có thể cuốn ngã.",effect:"roof"},
   {text:"Đứng dưới mái hiên quan sát.",ok:false,why:"Mái hiên và vật liệu ngoài nhà có thể bị bung.",effect:"debris"}]},
  {title:"Kính cửa sổ rung mạnh",text:"Cửa kính rung, có vật nhỏ bay va vào mặt kính. Bạn nên làm gì?",risk:"CỰC KỲ NGUY HIỂM",choices:[
   {text:"Lùi xa cửa kính, vào phòng phía trong và bảo vệ đầu nếu cần.",ok:true,why:"Tránh xa kính giúp hạn chế chấn thương nếu kính vỡ.",effect:"safe"},
   {text:"Dùng tay giữ kính.",ok:false,why:"Kính có thể vỡ gây đứt tay và chấn thương.",effect:"glass"},
   {text:"Đứng quay lưng sát cửa kính.",ok:false,why:"Bạn vẫn ở trong vùng kính có thể vỡ.",effect:"glass"},
   {text:"Mở cửa sổ để cân bằng áp suất.",ok:false,why:"Không mở cửa trong gió bão; làm vậy có thể khiến gió và mưa tạt vào.",effect:"wind"}]},
  {title:"Mất điện trong bão",text:"Điện trong nhà đột ngột tắt, bên ngoài vẫn mưa gió dữ dội.",risk:"NGUY HIỂM",choices:[
   {text:"Dùng đèn pin, tránh chạm dây điện; giữ nguyên nơi trú an toàn.",ok:true,why:"Đèn pin an toàn hơn nến; tránh dây điện và thiết bị có thể bị ướt.",effect:"safe"},
   {text:"Ra ngoài kiểm tra cột điện.",ok:false,why:"Không tiếp cận cột điện hoặc dây điện trong mưa bão.",effect:"spark"},
   {text:"Dùng nến đặt gần rèm cửa.",ok:false,why:"Ngọn lửa gần vật dễ cháy tạo thêm nguy cơ.",effect:"lightning"},
   {text:"Tự nối lại cầu dao khi khu vực ẩm ướt.",ok:false,why:"Không thao tác điện khi tay hoặc nền nhà ẩm ướt; cần người có chuyên môn.",effect:"spark"}]}
 ]},
 {name:"SAU BÃO",place:"ĐƯỜNG PHỐ SAU BÃO",weather:"GIÓ GIẢM • NGẬP VÀ VẬT CẢN",desc:"Phòng tránh tai nạn sau khi bão đi qua.",scenes:[
  {title:"Dây điện đứt trên đường",text:"Sau bão, bạn thấy dây điện rơi xuống mặt đường gần vũng nước.",risk:"NGUY HIỂM CHẾT NGƯỜI",choices:[
   {text:"Giữ khoảng cách, cảnh báo người khác tránh xa và báo đơn vị điện lực/chính quyền.",ok:true,why:"Dây điện có thể còn điện. Không chạm hoặc bước qua, kể cả khi không thấy tia lửa.",effect:"safe"},
   {text:"Dùng cây gỗ gạt dây sang bên.",ok:false,why:"Vật liệu khô không bảo đảm cách điện; không tự xử lý dây điện.",effect:"spark"},
   {text:"Đi vòng qua vũng nước sát dây.",ok:false,why:"Nước có thể dẫn điện và vùng nguy hiểm có thể rộng hơn nhìn thấy.",effect:"flood"},
   {text:"Chụp ảnh đứng sát dây để báo cáo.",ok:false,why:"Tiếp cận gần dây điện đứt là nguy hiểm.",effect:"spark"}]},
  {title:"Tuyến đường bị ngập",text:"Bạn cần di chuyển nhưng một đoạn đường còn ngập, không nhìn rõ mặt đường.",risk:"CẢNH GIÁC",choices:[
   {text:"Không đi qua; tìm tuyến đường khô, an toàn và nghe hướng dẫn địa phương.",ok:true,why:"Nước ngập che hố, dòng chảy và dây điện; không cố vượt qua.",effect:"safe"},
   {text:"Đi bộ thử từng bước qua chỗ ngập.",ok:false,why:"Có thể gặp hố sâu, dòng chảy hoặc điện rò.",effect:"flood"},
   {text:"Lái xe máy thật nhanh qua đoạn ngập.",ok:false,why:"Xe có thể chết máy, mất thăng bằng hoặc bị dòng nước cuốn.",effect:"flood"},
   {text:"Bám vào xe khác để kéo qua.",ok:false,why:"Cách này không kiểm soát được dòng nước và có thể gây tai nạn.",effect:"surge"}]},
  {title:"Trở về nhà sau bão",text:"Gió đã giảm nhưng địa phương chưa thông báo khu vực được phép trở về.",risk:"THẬN TRỌNG",choices:[
   {text:"Chờ thông báo chính thức; chỉ trở về khi tuyến đường và nhà ở được xác nhận an toàn.",ok:true,why:"Sau bão vẫn có nguy cơ cây đổ, kết cấu yếu, ngập và điện rò.",effect:"safe"},
   {text:"Về ngay vì trời đã tạnh mưa.",ok:false,why:"Tạnh mưa không đồng nghĩa mọi nguy hiểm đã hết.",effect:"tree"},
   {text:"Tự trèo lên mái kiểm tra hư hỏng.",ok:false,why:"Kết cấu có thể yếu, trơn trượt và còn vật liệu dễ rơi.",effect:"roof"},
   {text:"Bật lại tất cả thiết bị điện ngay.",ok:false,why:"Cần kiểm tra an toàn điện, tránh thiết bị hoặc ổ cắm bị ướt.",effect:"spark"}]}
 ]}
];
