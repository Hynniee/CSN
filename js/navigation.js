// filepath: c:\web-bán-sách\js\navigation.js
// Truy cập admin có kiểm tra quyền; chuyển về index từ admin/logo links
function goToAdmin() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    const isAdmin = currentUser && (currentUser.userType == 1 || currentUser.isAdmin === true);
    if (isAdmin) {
        window.location.href = 'admin.html';
        return;
    }
    // hiển thị thông báo và mở modal đăng nhập nếu có
    if (typeof toast === 'function') {
        toast({ title: 'Cần quyền', message: 'Vui lòng đăng nhập tài khoản admin', type: 'warning', duration: 3000 });
    } else {
        alert('Vui lòng đăng nhập tài khoản admin');
    }
    // cố gắng mở modal đăng nhập trên trang index (nếu có các selector chuẩn)
    const loginLink = document.querySelector('.login-link') || document.getElementById('login');
    if (loginLink) loginLink.click();
}

function goToIndex() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const adminBtn = document.getElementById('admin-entry');
    if (adminBtn) adminBtn.addEventListener('click', goToAdmin);

    // logo / home links -> điều hướng về index
    const homeSelectors = [
        '.channel-logo a', // admin logo
        'a.menu-link[href="/"]', // generic
        '.sidebar-list-item.user-logout a[href="index.html"]'
    ];
    homeSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                goToIndex();
            });
        });
    });
});
