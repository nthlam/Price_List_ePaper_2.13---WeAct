# ESP32 Web-Controlled e-Paper Display

Dự án này sử dụng ESP32 để tạo một web server cho phép người dùng nhập dữ liệu (tên và giá), sau đó hiển thị dữ liệu đó lên màn hình e-paper 3 màu (Đen, Trắng, Đỏ).
## Ứng dụng: Bảng giá siêu tiết kiệm năng lượng
E-paper chỉ cần kết nối esp32 khi cần thay đổi nội dung, không cần cấp năng lượng duy trì.

## 🚀 Tính năng

- ESP32 hoạt động như một **Access Point** hoặc **kết nối WiFi**.
- Giao diện web đơn giản cho phép nhập dữ liệu tên và giá.
- Hiển thị dữ liệu lên màn hình e-paper 250x122 hỗ trợ 3 màu.
- Có thể cập nhật từng phần của màn hình (partial update).
- Hỗ trợ font chữ tùy chỉnh, Unicode tiếng Việt (nếu cần).

## 🛠 Phần cứng sử dụng

- ESP32 DevKit (hoặc tương đương)
- Màn hình e-Paper 250x122 3-color (Đen-Trắng-Đỏ)
- Nguồn 3.3V ổn định

## 🧑‍💻 Cài đặt

### 1. Thư viện Arduino cần có:
- `GxEPD` hoặc `GxEPD2`
- `Adafruit GFX`
- `WebServer`
- `WiFi`

### 2. Clone dự án

```bash
git clone https://github.com/yourusername/esp32-epaper-web.git
