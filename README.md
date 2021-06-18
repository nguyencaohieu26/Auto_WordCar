# Auto_WordCar
Website AutoCar

- Hướng dẫn cách lấy file từ Git về máy theo Cmd
B1: Vào Repository tên "Auto_WordCar"
B2: Click vào "Code" chọn HTTPS: Copy link đó
B3: Trở lại màn hình chính -> mở cmd -> chọn địa điểm để tại folder về -> Gõ git clone: https://github.com/nguyencaohieu26/Auto_WordCar.git -> Enter

- Hướng dẫn cách commit
Sau khi đã tải được folder về máy ta bắt đầu làm việc với nó
Sau khi làm việc với file ta mở "new terminal" trong IDE sau đó mở cmd trực tiếp trong thư mục đó.
Khi ta muốn xem tình trạng file của ta đang ở trạng thái nào ta thực hiện câu lệnh: " git status " : Nó sẽ hiện ra tình trạng folder: file mới được thêm hay file cũ được chỉnh sửa 
Sau khi biết tình trạng của nó thì ta tiến hành thêm nó vào vùng chờ commit bằng câu lệnh: " git add . " : Nó sẽ thêm tất cả thay đổi vào
Sau đó ta tiến hành commit code: git commit -m "Nội dung commit" VD: git commit -m "Thêm phần footer"
Sau khi tiến hành commit thì bây giờ folder đã được cập nhật ở local respository
Sau đó ta sẽ tiến hành đẩy code mới lên respository trên GitHub bằng cách gõ: " git push -u origin master " : Nó sẽ tự động đẩy code lên
- Hướng dẫn cách pull
Sau khi có người up file code mới lên Repository thì ta bắt buộc phải pull file mới đó về thì mới có thể push file mới lên được
Cú pháp: git pull;

- Hướng dẫn đặt file
 Các ảnh của từng trang được đặt trong thư mục tên theo trang đó và tất cả thư mục nằm trong file asset/image
 Các file html thì đặt ngay ngoài không cần bọc trong thư mực nào, đặt tên theo trang html đang code. Vd: Đang code trang Contact -> contact.html, product.html
 Các file css thì đặt trong từng file riêng đặt tên theo trang mình đang css. Vào file asset -> css -> tạo file contact -> contact.css , contact_responsive.css
 
 - Hướng dẫn cách đặt tên các tag name trong file html
  Không đặt tên các thẻ html chung chung như: a,h1,h3,ul,li,... để tránh nhầm lẫn css vs các file khác
  Đặt tên có ý nghĩa với vần đó. Vd: Phần chứa toàn ảnh thì mình đặt tên là gallery xong các thư mục con của nó cũng nên thể hiện nó nằm trong phần đó như gallery__item,...
  
  - Quy định chung về font-size chữ và font chữ sẽ thêm sau!!!
 
