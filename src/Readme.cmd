npm create vite@latest

ES6 Module
Coi mỗi file (.js) là 1 module và có context riêng, không ảnh hưởng lẫn nhau
Để liên kết các module, sử dụng cú pháp import/export
- export: Xuất ra những giá trị/phương thức. ...cho phép các module khác có thể truy cập được
- import: Nhập, truy cập vào các giá trị/phương thức đã được khai báo và export

EXPORT 
Có nhiều dạng cú pháp export khác nhau, 2 dạng chính thường dùng là:
1 export mặc định:
  + Mỗi 1 module chỉ có 1 giá trị đưcọ export default
2. Export theo tên
  + Export giá trị mặc định từ module 
  + Export giá trị được export cụ thể theo tên, dùng ngoặc nhọn và dúng tên lã export

React Features
  1. JSX
  2. Component-based => Là 1 hàm trả về 1 đoạn jsx xác định nội dung hiển thị trên màn hình
  3. Vitural DOM
  4. Hỗ trợ đa nền tảng

Nhược điểm với DOM thuần:
 + Thao tác cực kỳ tồn kém 

Vitural DOM là 1 đối tượng đại diện cho cấu trúc tương ứng với DOM thật nhưng mà là trong bộ nhớ

JSX
Các lưu ý khi sử dụng cú pháp JSX:
 - Trả về single root