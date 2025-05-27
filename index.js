const express = require('express');
const app = express();
const port = 3000;

// Dữ liệu mẫu sẽ gửi về cho ESP32
const data = {
  name: "Sữa tươi",
  price: "25000"
};

// Cho phép ESP32 hoặc các thiết bị khác truy cập
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Cho phép mọi domain
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// API đơn giản cho ESP32
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, '192.168.186.38', () => {
    console.log(`Server đang chạy tại http://192.168.186.38:${port}`);
  });
  