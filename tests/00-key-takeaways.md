# Tổng hợp kiến thức lesson 5
## DOM
DOM = Document object model

Cấu trúc cây các element trang web

**- Các loại TAG:**

Thẻ thường: có thẻ mở, thẻ đóng, ví dụ: `<div> </div>`

Thẻ từ đóng: không có thẻ đóng, VD:`<img/>`

**- Cấu tạo:**

```typescript
<option id="123" value= "usa" disable> United state </option>
```
Trong đó:
- `<option` : thẻ mở
- id, value: thuộc tính (Attribute)có giá trị
- disable: thuộc tính không giá trị.
- "123", "usa": giá trị của thuộc tính
- United state: text
- `</option>`: Thẻ đóng
## Cấu trúc trang web:
```typescript
<html>
    <head></head>
    <body>
         <header></header>
         <nav id="main">text</nav>
         <section>
            <div></div>
         <section>
         <footer></footer>
    </body
</html>
```
## Các thẻ tiêu chuẩn thường gặp:
### Thẻ cấu trúc trang:
`<html>`: thẻ gốc của trang
`<head>` chứa metadata: tiêu đề trang web
'<body>`: Nội dung của cả website hiênr thị
### Thẻ bố cục ngữ nghĩa:
`<div>`: khối/container chung (div=divide)
`<header>`
`<footer>`
`<nav>`
`<section>`
### Thẻ nội dung
`<h1>` đến `<h6>`: Tiêu đề
`<paragraph>`: Đoạn văn
`<ul>`, `<ol>`, `<li>`: Danh sách
### Thẻ tương tác và media
`<a>`: Liên kết
`<img>` Hình ảnh
     

