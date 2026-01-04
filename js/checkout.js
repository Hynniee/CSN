history.pushState({ page: "current" }, "", window.location.href);
const PHIVANCHUYEN = 20000;
function getPhiVanChuyen(tongTien) {
    if (tongTien >= 200000) return 0;        // Miễn phí với đơn từ 200k
    if (tongTien >= 150000) return 10000;   // 10k nếu đơn ≥ 150k
    if (tongTien >= 80000) return 13000;    // 13k nếu đơn ≥ 80k
    return PHIVANCHUYEN;                     // Mặc định là 20k
}

let priceFinal = document.getElementById("checkout-cart-price-final");

// ====== Tự điền thông tin thanh toán theo tài khoản đã đăng nhập ======
function prefillCheckoutInfo() {
    let user = null;
    try {
        user = JSON.parse(localStorage.getItem('currentuser') || 'null');
    } catch (e) {
        user = null;
    }
    // Không tự điền nếu chưa đăng nhập hoặc là user "Khách"
    if (!user || user.fullname === "Khách") return;

    const nameEl = document.querySelector('#tennguoinhan');
    const phoneEl = document.querySelector('#sdtnhan');
    const addrEl = document.querySelector('#diachinhan');

    if (nameEl && !nameEl.value) nameEl.value = user.fullname || '';
    if (phoneEl && !phoneEl.value) phoneEl.value = (user.phone || '').toString();
    if (addrEl && !addrEl.value) addrEl.value = user.address || '';
}

// Trang thanh toan
function thanhtoanpage(option,product) {

    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;
    // Xu ly don hang
    switch (option) {
        case 1:{ // Truong hop thanh toan san pham trong gio
            // Hien thi don hang
            showProductCart();
            let tongTien = getCartTotal();
            let phiVC = getPhiVanChuyen(tongTien);
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
            <div class="text">
                Tiền hàng 
                <span class="count">${getAmountCart()} sách</span>
            </div>
            <div class="price-detail">
                <span id="checkout-cart-total">${vnd(getCartTotal())}</span>
            </div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship">
                <span>${vnd(phiVC)}</span>
            </div>
        </div>`;
            // Tong tien
            priceFinal.innerText = vnd(tongTien + phiVC);
            break;}
        case 2: {// Truong hop mua ngay
            // Hien thi san pham
            showProductBuyNow(product);
            let tongTien = product.soluong * product.price;
            let phiVC = getPhiVanChuyen(tongTien);
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
                <div class="text">
                    Tiền hàng 
                    <span class="count">${product.soluong} sách</span>
                </div>
                <div class="price-detail">
                    <span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span>
                </div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship">
                    <span>${vnd(phiVC)}</span>
                </div>
            </div>`
            // Tong tien
            priceFinal.innerText = vnd(tongTien + phiVC);
            break;
    }}

    // Tinh tien
    totalBillOrder.innerHTML = totalBillOrderHtml;

    // Hien thi trang thanh toan
    document.querySelector('.checkout-page').classList.add('active');
    // Tự điền thông tin người nhận theo tài khoản đã đăng nhập
    prefillCheckoutInfo();
    // Hien thi cac phuong thuc thanh toan
    let paymentMethods = document.querySelector('.checkout-payment-methods');
    let paymentMethodsHtml = `<div class="checkout-type-order">
    if (paymentMethods) paymentMethods.innerHTML = paymentMethodsHtml;
        <label class="active">
            <input type="radio" name="payment-method" value="cash" checked>
            <span>Thanh toán khi nhận hàng</span>
        </label>
        <label>
            <input type="radio" name="payment-method" value="online">
            <span>Thanh toán online</span>
        </label>
        <label>
            <input type="radio" name="payment-method" value="bank">
            <span>Chuyển khoản ngân hàng</span>
        </label>
    </div>`;    
    let chkShip = document.querySelectorAll(".chk-ship");

    // Su kien khu nhan nut dat hang
    document.querySelector(".complete-checkout-btn").onclick = () => {
        switch (option) {
            case 1:
                xulyDathang();
                break;
            case 2:
                xulyDathang(product);
                break;
        }
    }
    
}

// Hien thi hang trong gio
function showProductCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';
    currentuser.cart.forEach(item => {
        let product = getProduct(item);
        listOrderHtml += `<div class="book-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-book">
            <div class="name-book">${product.title}</div>
        </div>
    </div>`
    })
    listOrder.innerHTML = listOrderHtml;
}

// Hien thi hang mua ngay
function showProductBuyNow(product) {
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = `<div class="book-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-book">
            <div class="name-book">${product.title}</div>
        </div>
    </div>`;
    listOrder.innerHTML = listOrderHtml;
}

//Open Page Checkout
let nutthanhtoan = document.querySelector('.thanh-toan')
let checkoutpage = document.querySelector('.checkout-page');
nutthanhtoan.addEventListener('click', () => {
    checkoutpage.classList.add('active');
    thanhtoanpage(1);
    closeCart();
    body.style.overflow = "hidden"
})

// Đặt hàng ngay
function dathangngay() {
    let productInfo = document.getElementById("product-detail-content");
    let datHangNgayBtn = productInfo.querySelector(".button-dathangngay");
    datHangNgayBtn.onclick = () => {
        if(localStorage.getItem('currentuser')) {
            let productId = datHangNgayBtn.getAttribute("data-product");
            let soluong = parseInt(productInfo.querySelector(".buttons_added .input-qty").value);
            let notevalue = productInfo.querySelector("#popup-detail-note").value;
            let ghichu = notevalue == "" ? "Không có ghi chú" : notevalue;
            let products = JSON.parse(localStorage.getItem('products'));
            let a = products.find(item => item.id == productId);
            a.soluong = parseInt(soluong);
            a.note = ghichu;
            checkoutpage.classList.add('active');
            thanhtoanpage(2,a);
            closeCart();
            body.style.overflow = "hidden"
        }}
}

// Close Page Checkout
function closecheckout() {
    checkoutpage.classList.remove('active');
    body.style.overflow = "auto"
}

// Thong tin cac don hang da mua - Xu ly khi nhan nut dat hang
function xulyDathang(product) {
    // let diachinhan = "";
    let hinhthucthanhtoan = document.querySelector('input[name="payment-method"]:checked')?.value || "cash";
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let diachinhanInput = document.querySelector("#diachinhan");
if (!diachinhanInput) {
    toast({ title: 'Lỗi', message: 'Không tìm thấy trường địa chỉ nhận hàng!', type: 'error', duration: 4000 });
    return;
}
// 1) Hình thức giao (nếu không chọn thì mặc định)
const shippingMethod =
  document.querySelector('input[name="shipping-method"]:checked')?.value ||
  document.querySelector('#shipping-method')?.value ||"Giao tiêu chuẩn";

// LẤY NGÀY GIAO (input type="date" id="ngay-giao"); nếu trống -> +2 ngày
        const deliverDateStr = document.querySelector('#ngay-giao')?.value || '';
        let deliverDateISO = '';
        if (deliverDateStr) {
        const d = new Date(deliverDateStr);
        if (!isNaN(d.getTime())) deliverDateISO = d.toISOString();
        }
        if (!deliverDateISO) { const d = new Date(); d.setDate(d.getDate() + 2); deliverDateISO = d.toISOString(); }


let diachinhan = diachinhanInput.value;
    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : [];
    let order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let madon = createId(order);
    let tongtien = 0;
    if(product == undefined) {
        currentUser.cart.forEach(item => {
            item.madon = madon;
            item.price = getpriceProduct(item.id);
            tongtien += item.price * item.soluong;
            orderDetails.push(item);
        });
    } else {
        product.madon = madon;
        product.price = getpriceProduct(product.id);
        tongtien += product.price * product.soluong;
        orderDetails.push(product);
    }   
    
    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value

    // Kiểm tra từng trường, thiếu thì focus và return luôn
    if (tennguoinhan == "") {
        document.querySelector("#tennguoinhan").focus();
        toast({ title: 'Chú ý', message: 'Vui lòng nhập tên người nhận!', type: 'warning', duration: 4000 });
        return;
    }
    if (sdtnhan == "") {
        document.querySelector("#sdtnhan").focus();
        toast({ title: 'Chú ý', message: 'Vui lòng nhập số điện thoại nhận hàng!', type: 'warning', duration: 4000 });
        return;
    }
    // Thêm kiểm tra số điện thoại phải đủ 10 số
    if (!/^\d{10}$/.test(sdtnhan)) {
        document.querySelector("#sdtnhan").focus();
        toast({ title: 'Chú ý', message: 'Số điện thoại không được là kí tự và phải đủ 10 số!', type: 'warning', duration: 4000 });
        return;
    }
    if (diachinhan == "") {
        document.querySelector("#diachinhan").focus();
        toast({ title: 'Chú ý', message: 'Vui lòng chọn địa chỉ nhận hàng!', type: 'warning', duration: 4000 });
        return;
}

    // Tính phí vận chuyển & tổng thanh toán (để QR / đơn hàng tính đúng)
    const phiVC = (typeof getPhiVanChuyen === "function") ? getPhiVanChuyen(tongtien) : 0;
    const tongtienThanhToan = tongtien + (Number(phiVC) || 0);

    // Nếu đủ thông tin thì tiếp tục đặt hàng
    let donhang = {
        id: madon,
        khachhang: tennguoinhan,
        userPhone: (JSON.parse(localStorage.getItem('currentuser')||'null')||{}).phone || sdtnhan,
        hinhthucthanhtoan: hinhthucthanhtoan,
        ghichu: document.querySelector(".note-order")?.value || "Không có ghi chú",
        tenguoinhan: tennguoinhan,
        sdtnhan: sdtnhan,
        diachinhan: diachinhan,
        thoigiandat: new Date(),
        tongtien: tongtienThanhToan,
        tongtienhang: tongtien,
        phivanchuyen: (Number(phiVC) || 0),
        trangthai: 0,
        hinhthucgiao: shippingMethod,
        ngaygiaohang: deliverDateISO,
    }
const bankChecked = document.getElementById('payment-bank')?.checked;

if (bankChecked) {
    // ✅ 1) Lưu đơn TRƯỚC để tính là “đã đặt”
    order.unshift(donhang);

    // ✅ 2) Lưu flag để nút “Đã thanh toán” biết đơn nào cần update
    localStorage.setItem("pending_bank_order_id", madon);

    // ✅ 3) clear giỏ + trừ tồn kho + lưu localStorage
    if (product == null) currentUser.cart.length = 0;
    clearCartAfterOrder();

    let products = JSON.parse(localStorage.getItem("products")) || [];
    orderDetails.forEach(item => {
        let p = products.find(prod => prod.id == item.id);
        if (p) {
            p.stock -= item.soluong;
            if (p.stock < 0) p.stock = 0;
        }
    });

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("order", JSON.stringify(order));
    localStorage.setItem("currentuser", JSON.stringify(currentUser));
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // ✅ 4) Hiện QR sau khi đã lưu
    showQrPopupBank(tongtienThanhToan, madon);

    toast({
        title: "Thành công",
        message: "Đã tạo đơn! Vui lòng quét QR để thanh toán.",
        type: "success",
        duration: 2000
    });

    // ⛔ KHÔNG redirect ở nhánh QR
    return;
}




    order.unshift(donhang);
    if(product == null) {
        currentUser.cart.length = 0;
    }
    // Sau khi lưu order + orderDetails
clearCartAfterOrder();

// Đóng trang checkout & báo thành công
closecheckout();

let products = JSON.parse(localStorage.getItem("products")) || [];

orderDetails.forEach(item => {
  let p = products.find(prod => prod.id == item.id);
  if (p) {
    p.stock -= item.soluong;
    if (p.stock < 0) p.stock = 0;
  }
});


localStorage.setItem("products", JSON.stringify(products));

    localStorage.setItem("order",JSON.stringify(order));
    localStorage.setItem("currentuser",JSON.stringify(currentUser));
    localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
    toast({ title: 'Thành công', message: 'Đặt hàng thành công !', type: 'success', duration: 1000 });
    setTimeout((e)=>{
        window.location = "index.html";
    },1000);  

}

function getpriceProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    let sp = products.find(item => {
        return item.id == id;
    })
    return sp.price;
}
window.addEventListener('popstate', function() {
    window.location.href = "index.html";
});


// Hiệu ứng phản hồi khi chọn radio cho thanh toán & vận chuyển
document.querySelectorAll('.checkout-type-order').forEach(group => {
    group.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            group.querySelectorAll('label').forEach(label => label.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
        // Kích hoạt sẵn cho radio được checked khi load trang
        if (radio.checked) {
            radio.parentElement.classList.add('active');
        }
    });
});
function clearCartAfterOrder() {
    // Nếu có user đang đăng nhập
    let currentUser = localStorage.getItem('currentuser') 
        ? JSON.parse(localStorage.getItem('currentuser')) 
        : null;

    if (currentUser) {
        // Xóa giỏ của currentUser
        currentUser.cart = [];
        localStorage.setItem('currentuser', JSON.stringify(currentUser));

        // Cập nhật lại trong danh sách accounts
        let accounts = localStorage.getItem('accounts') 
            ? JSON.parse(localStorage.getItem('accounts')) 
            : [];
        let idx = accounts.findIndex(acc => acc.phone === currentUser.phone);
        if (idx !== -1) {
            accounts[idx] = currentUser;
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }
    } else {
        // Khách vãng lai thì tùy bạn đang lưu, ví dụ:
        localStorage.removeItem('cartGuest');
    }

    // Cập nhật lại giao diện giỏ hàng
    if (typeof renderCart === 'function') renderCart();
    if (typeof updateAmount === 'function') updateAmount();
}
// ===== QR CHUYỂN KHOẢN NGÂN HÀNG (VCB / BIDV) =====
function showQrPopupBank(tongTien, maDon) {
    // 🔴 CHỌN NGÂN HÀNG
    const bankId = "BIDV"; // đổi thành "BIDV" nếu dùng BIDV

    // 🔴 THÔNG TIN NHẬN TIỀN (ĐIỀN THẬT)
    const accountNo = "7340344752";     // SỐ TÀI KHOẢN
    const accountName = "TRAN VU NGOC HUYNH"; // TÊN CHỦ TK

    const qrUrl =
        `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png`
        + `?amount=${tongTien}`
        + `&addInfo=${encodeURIComponent("DON_" + maDon)}`
        + `&accountName=${encodeURIComponent(accountName)}`;

    document.getElementById("bank-qr-img").src = qrUrl;
    document.querySelector(".bank-qr-popup").classList.add("active");
}

