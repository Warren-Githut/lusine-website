# L'Usine — website mới

Landing page + 4 trang con cho L'Usine (Café, Shop, Saigon).

## Mở trên máy

Mở file `index.html` bằng Chrome, hoặc chạy:

```
python -m http.server 8080
```

Rồi vào `http://localhost:8080`

## Các trang

- `index.html` — trang chủ / landing
- `story.html` — câu chuyện
- `locations.html` — 3 cửa hàng
- `menu.html` — món ký tên
- `visit.html` — giờ mở cửa + form đặt bàn

Nút **VI / EN** đổi ngôn ngữ. Trình duyệt nhớ lựa chọn.

## Địa chỉ dùng trên site

Lấy từ listing công khai lusinespace.com/locations:

- Lê Thánh Tôn — 19 Lê Thánh Tôn, Q1 — 7:30–21:30 — Café +84 28 3822 7188
- Crescent Mall — GF-56, 101 Tôn Dật Tiên, Q7 — 7:30–22:00 — Café +84 28 5412 0880
- Saigon Centre — Level 5-10, 65 Lê Lợi, Q1 — 10:00–21:30 — Café +84 28 3535 9930

Form đặt bàn chưa nối hệ thống: sau khi gửi, khách được nhắc gọi cửa hàng.

## GitHub Pages

Trong repo: Settings → Pages → Deploy from branch `main` / folder `/` .
