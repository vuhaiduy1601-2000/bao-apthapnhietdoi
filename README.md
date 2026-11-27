# VIETNAM STORM SURVIVAL

Game mô phỏng giáo dục về kỹ năng ứng phó bão và áp thấp nhiệt đới tại Việt Nam. Dự án dùng HTML5 Canvas, CSS và JavaScript thuần; không cần tài khoản, máy chủ, thư viện hay tài nguyên mạng để chơi.

## Chạy trên Windows

1. Giải nén `Vietnam-Storm-Survival.zip`.
2. Mở thư mục `vietnam-storm-survival`.
3. Nhấp đúp `index.html` để chạy bằng Chrome, Edge hoặc Firefox.
4. Nếu trình duyệt chặn một số tính năng khi mở trực tiếp, mở PowerShell tại thư mục dự án và chạy:
   ```powershell
   py -m http.server 8000
   ```
   Sau đó truy cập `http://localhost:8000`. Cách này vẫn chạy hoàn toàn cục bộ, không cần Internet.

## Điện thoại

Chép toàn bộ thư mục lên điện thoại và mở `index.html` bằng trình duyệt hỗ trợ file cục bộ, hoặc chạy qua máy tính trong cùng mạng nội bộ bằng server tĩnh. Giao diện hỗ trợ màn hình nhỏ, chạm và thao tác bàn phím.

## Điều khiển

- Chạm/nhấp vào đáp án để chọn.
- Phím mũi tên hoặc `WASD` để di chuyển vùng chọn; `Enter` để xác nhận. Phím `1–4` chọn nhanh đáp án tương ứng.
- `Esc` để tạm dừng/tiếp tục.
- Nút góc trên màn chơi để tạm dừng.
- Nút Âm thanh bật/tắt âm thanh tổng hợp; nút Hiệu ứng giảm mật độ hạt mưa và rung.

## Lưu dữ liệu

Điểm cao (`vss_best`) và số màn đã mở (`vss_unlocked`) được lưu trong LocalStorage của trình duyệt. Không có đăng nhập, email, số điện thoại hay thu thập dữ liệu cá nhân. Xóa dữ liệu trang web của trình duyệt sẽ xóa tiến trình đã lưu.

## Cấu trúc

- `index.html`: khung giao diện và các màn hình.
- `css/style.css`: giao diện responsive.
- `js/scenarios.js`: dữ liệu 5 giai đoạn, mỗi giai đoạn 3 tình huống.
- `js/animations.js`: cảnh Canvas, mưa, mây, biển, cây, nhà, chớp và hậu quả trực quan.
- `js/sound.js`: âm thanh tổng hợp bằng Web Audio API.
- `js/game.js`: vòng lặp trò chơi, tính điểm, đếm giờ, lựa chọn, mở khóa và kết quả.
- `js/main.js`: kết nối nút bấm, bàn phím và tùy chọn.

## Thêm tình huống hoặc màn chơi

Mở `js/scenarios.js`. Mỗi level có `name`, `place`, `weather`, `desc`, và mảng `scenes`. Mỗi scene gồm `title`, `text`, `risk`, `choices`. Mỗi lựa chọn cần:
- `text`: nội dung đáp án.
- `ok`: `true` nếu là lựa chọn an toàn, ngược lại `false`.
- `why`: giải thích kết quả.
- `effect`: một trong các hiệu ứng `safe`, `rain`, `wave`, `lightning`, `wind`, `debris`, `flood`, `roof`, `tree`, `spark`, `surge`, `sign`, `glass`.

Mỗi màn hiện có 3 tình huống. Người chơi có 3 mạng cho mỗi giai đoạn; chọn sai hoặc hết giờ sẽ mất 1 mạng và hiển thị giải thích trước khi tiếp tục. Khi hết 3 mạng, game mới kết thúc. Thứ tự 4 đáp án được xáo trộn ngẫu nhiên mỗi lần vào tình huống; đáp án đúng không được đánh dấu trước trên giao diện. Khi thêm level mới, cập nhật các giới hạn 5 màn trong `js/game.js` (mảng cường độ thời tiết và điều kiện hoàn thành) và nhãn `1/5` trong giao diện.

## Lưu ý an toàn và độ chính xác

Đây là mô phỏng giáo dục, không phải công cụ dự báo, cảnh báo hay hướng dẫn cứu hộ chuyên nghiệp. Nội dung dùng khuyến nghị an toàn phổ quát và định tính; không giả lập số liệu khí tượng, đường đi bão, tốc độ gió hoặc sự kiện có thật. Trong tình huống thực tế, hãy tuân thủ hướng dẫn của cơ quan chức năng và thông tin khí tượng thủy văn chính thức.

## Bản cập nhật V1.1

- Giảm mạnh tần suất hiệu ứng chớp: chỉ xuất hiện thưa, ngắn và không còn phủ sáng trắng toàn màn hình.
- Xáo trộn vị trí các phương án mỗi lần vào tình huống; đáp án đúng/sai vẫn gắn với nội dung tương ứng, không bị sai logic khi đảo thứ tự.
- Giao diện không hiển thị dấu hiệu tiết lộ đáp án đúng trước khi người chơi chọn.

## Bản cập nhật V1.2

- Sửa hệ thống 3 mạng: trả lời sai hoặc hết giờ mất một mạng; chỉ GAME OVER khi hết mạng.
- Thêm màn giải thích hậu quả sau lựa chọn sai hoặc hết giờ; có thể tiếp tục bằng nút hoặc phím Enter.
- Sửa nút "THỬ LẠI MÀN NÀY" để khởi động lại đúng giai đoạn sau khi thất bại.
- Đồng bộ nội dung kết quả với số mạng còn lại.
