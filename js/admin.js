function checkLogin() {
  let currentUser = JSON.parse(localStorage.getItem("currentuser"));
  if (currentUser == null || Number(currentUser.userType) !== 1) {
    // không phải admin -> đá về trang index
    window.location.href = "index.html";
    return;
  }
  document.getElementById("name-acc").innerHTML = currentUser.fullname;
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
window.onload = function() {
    const menuIconButton = document.querySelector(".menu-icon-btn");
    const sidebar = document.querySelector(".sidebar");
    if (menuIconButton && sidebar) {
        menuIconButton.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }
    // ... các code khác ...
};

//do sidebar open and close
const menuIconButton = document.querySelector(".menu-icon-btn");
const sidebar = document.querySelector(".sidebar");
menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// log out admin user
/*
let toogleMenu = document.querySelector(".profile");
let mune = document.querySelector(".profile-cropdown");
toogleMenu.onclick = function () {
    mune.classList.toggle("active");
};
*/

// tab for section
const sidebars = document.querySelectorAll(".sidebar-list-item.tab-content");
const sections = document.querySelectorAll(".section");

for(let i = 0; i < sidebars.length; i++) {
    sidebars[i].onclick = function () {
        document.querySelector(".sidebar-list-item.active").classList.remove("active");
        document.querySelector(".section.active").classList.remove("active");
        sidebars[i].classList.add("active");
        sections[i].classList.add("active");
        // Nếu vào tab Thống kê thì vẽ biểu đồ doanh thu
        try {
            if (sections[i].querySelector("#revenueChart")) {
                const g = document.getElementById("revenue-group")?.value || "day";
                setTimeout(() => renderRevenueChart(g), 0);
            }
        } catch (e) {}
};
}

const closeBtn = document.querySelectorAll('.section');
console.log(closeBtn[0])
for(let i=0;i<closeBtn.length;i++){
    closeBtn[i].addEventListener('click',(e) => {
        sidebar.classList.add("open");
    })
}
function updateDashboard() {
  const amountUser = getAmoumtUser();       // đã có sẵn
  const amountProduct = getAmoumtProduct(); // dùng bản mới
  const money = getMoney();                  // đã có sẵn

  document.getElementById("amount-user").innerText = amountUser;
  document.getElementById("amount-product").innerText = amountProduct;
  document.getElementById("doanh-thu").innerText = vnd(money);
}
// Get amount product
function getAmoumtProduct() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  // chỉ đếm sản phẩm đang hoạt động
  return products.filter(p => p.status == 1).length;
}


// Get amount user
function getAmoumtUser() {
    let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")) : [];
    return accounts.filter(item => item.userType == 0).length;
}

// Get amount user
function getMoney() {
    let tongtien = 0;
    const orders = localStorage.getItem("order")
        ? JSON.parse(localStorage.getItem("order"))
        : [];

    // Chỉ tính doanh thu từ đơn ĐÃ GIAO (trangthai = 3) và CHỈ TÍNH TIỀN SÁCH (không tính ship)
    orders.forEach(order => {
        if (Number(order.trangthai) !== 3) return;

        // Ưu tiên dữ liệu mới từ checkout.js: tongtienhang (tiền sách), phivanchuyen (ship)
        if (order.tongtienhang != null) {
            tongtien += Number(order.tongtienhang) || 0;
            return;
        }

        // Fallback cho dữ liệu cũ: tongtien - phivanchuyen / phiship
        const ship = Number(order.phivanchuyen ?? order.phiship ?? 0) || 0;
        const total = Number(order.tongtien || 0) || 0;
        tongtien += Math.max(total - ship, 0);
    });

    return tongtien;
}

document.getElementById("amount-user").innerHTML = getAmoumtUser();
document.getElementById("amount-product").innerHTML = getAmoumtProduct();
document.getElementById("doanh-thu").innerHTML = vnd(getMoney());

// Doi sang dinh dang tien VND
function vnd(price) {
  const n = Number(price);
  if (Number.isNaN(n)) return '0 ₫';
  return n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// ===== DASHBOARD (Mix PA 1 + 3): bỏ đoạn định nghĩa, thêm insight + quick actions =====
const DASH_STYLE_ID = "dash-enhanced-style";
function injectDashboardStyles() {
  if (document.getElementById(DASH_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = DASH_STYLE_ID;
  style.textContent = `
    .dash-meta{margin-top:12px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:center}
    .dash-badge{font-size:13px;font-weight:700;padding:7px 12px;border-radius:999px;background:#f3f4f6;color:#111827;display:inline-flex;gap:6px;align-items:center}
    .dash-badge.positive{background:#ecfdf5;color:#065f46}
    .dash-badge.negative{background:#fef2f2;color:#991b1b}
    .dash-badge.neutral{background:#eff6ff;color:#1d4ed8}
    .dash-list{margin:12px 0 0 0;padding-left:18px;color:#374151;font-size:15px;line-height:1.6}
    .dash-list li{margin:4px 0}
    .dash-actions{margin-top:14px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;align-items:center;width:100%}
    .dash-btn{border:1px solid #e5e7eb;background:#fff;color:#111827;border-radius:12px;padding:10px 16px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s ease}
    .dash-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(0,0,0,.06)}
    .dash-btn.primary{background:#b91c1c;border-color:#b91c1c;color:#fff}
  
    /* v7 overrides */
    .card-single .on-box{display:flex;flex-direction:column;min-height:300px}
    .dash-meta{margin-top:12px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:center}
    .dash-list{margin:12px 0 0 0;padding-left:18px;color:#374151;font-size:15px;line-height:1.6}
    .dash-actions{margin-top:auto;display:flex;gap:12px;flex-wrap:wrap;justify-content:center;align-items:center;width:100%;padding-top:18px}
`;
  document.head.appendChild(style);
}

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function safeDate(v) {
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
}

function calcDashboardInsights() {
  const now = new Date();
  const today = startOfDay(now);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const accountsAll = JSON.parse(localStorage.getItem("accounts")) || [];
  const customers = accountsAll.filter(a => Number(a.userType) === 0);

  const productsAll = JSON.parse(localStorage.getItem("products")) || [];
  const activeProducts = productsAll.filter(p => Number(p.status) === 1);
  const hiddenProducts = productsAll.filter(p => Number(p.status) !== 1);
  const lowStock = activeProducts.filter(p => {
    const s = parseInt(p.stock ?? 0, 10);
    return !isNaN(s) && s > 0 && s <= 5;
  }).length;

  const ordersAll = JSON.parse(localStorage.getItem("order")) || [];
  const delivered = ordersAll.filter(o => Number(o.trangthai) === 3);

  // New customers today/yesterday dựa vào field join (đã có khi tạo account) fileciteturn19file7L56-L58
  const newCustomerToday = customers.filter(u => {
    const d = safeDate(u.join);
    return d && isSameDay(d, today);
  }).length;
  const newCustomerYesterday = customers.filter(u => {
    const d = safeDate(u.join);
    return d && isSameDay(d, yesterday);
  }).length;

  // Revenue today/yesterday: chỉ đơn đã giao + chỉ tiền sách (logic giống getMoney()) fileciteturn19file2L38-L55
  const revenueByDay = (day) => {
    let sum = 0;
    delivered.forEach(o => {
      const d = safeDate(o.thoigiandat);
      if (!d || !isSameDay(d, day)) return;
      if (o.tongtienhang != null) sum += Number(o.tongtienhang) || 0;
      else {
        const ship = Number(o.phivanchuyen ?? o.phiship ?? 0) || 0;
        const total = Number(o.tongtien || 0) || 0;
        sum += Math.max(total - ship, 0);
      }
    });
    return sum;
  };

  const revenueToday = revenueByDay(today);
  const revenueYesterday = revenueByDay(yesterday);

  const orderToday = delivered.filter(o => {
    const d = safeDate(o.thoigiandat);
    return d && isSameDay(d, today);
  }).length;

  return {
    customers: {
      total: customers.length,
      newToday: newCustomerToday,
      newYesterday: newCustomerYesterday,
    },
    products: {
      active: activeProducts.length,
      total: productsAll.length,
      hidden: hiddenProducts.length,
      lowStock,
    },
    revenue: {
      total: getMoney(),
      today: revenueToday,
      yesterday: revenueYesterday,
      orderToday,
    },
  };
}

function openAdminSection(index) {
  try {
    const tabs = document.querySelectorAll(".sidebar-list-item.tab-content");
    if (!tabs || !tabs[index]) return;
    tabs[index].querySelector("a")?.click();
    // giữ UX: lên đầu khu content
    const content = document.querySelector("main.content");
    if (content) content.scrollTo({ top: 0, behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {}
}

function enhanceDashboardCards() {
  injectDashboardStyles();

  // Cấu trúc cards nằm trong section Trang tổng quát fileciteturn19file4L7-L41
  const sectionDash = document.querySelectorAll(".section")[0];
  if (!sectionDash) return;

  const cards = sectionDash.querySelectorAll(".card-single");
  if (!cards || cards.length < 3) return;

  const insight = calcDashboardInsights();

  // Helper build
  const badge = (text, kind = "neutral") => {
    const el = document.createElement("span");
    el.className = `dash-badge ${kind}`;
    el.textContent = text;
    return el;
  };
  const btn = (text, kind, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `dash-btn${kind ? " " + kind : ""}`;
    b.textContent = text;
    b.addEventListener("click", onClick);
    return b;
  };

  // 1) Khách hàng
  {
    const onBox = cards[0].querySelector(".on-box");
    if (onBox) {
      onBox.querySelectorAll("p").forEach(p => p.remove()); // bỏ đoạn định nghĩa

      const meta = document.createElement("div");
      meta.className = "dash-meta";

      const delta = insight.customers.newToday - insight.customers.newYesterday;
      const kind = delta > 0 ? "positive" : delta < 0 ? "negative" : "neutral";
      meta.appendChild(badge(`Hôm nay +${insight.customers.newToday} khách`, insight.customers.newToday > 0 ? "positive" : "neutral"));
      meta.appendChild(badge(`So với hôm qua ${delta >= 0 ? "+" : ""}${delta}`, kind));

      const list = document.createElement("ul");
      list.className = "dash-list";
      list.innerHTML = `
        <li>Tổng khách hàng: <b>${insight.customers.total}</b></li>
        <li>Khách mới hôm nay: <b>${insight.customers.newToday}</b></li>
      `;

      const actions = document.createElement("div");
      actions.className = "dash-actions";
      actions.appendChild(btn("Xem khách hàng", "primary", () => openAdminSection(3)));
      // Admin không hỗ trợ thêm khách hàng trực tiếp
onBox.appendChild(meta);
      onBox.appendChild(list);
      onBox.appendChild(actions);
    }
  }

  // 2) Sản phẩm
  {
    const onBox = cards[1].querySelector(".on-box");
    if (onBox) {
      onBox.querySelectorAll("p").forEach(p => p.remove());

      const meta = document.createElement("div");
      meta.className = "dash-meta";
      meta.appendChild(badge(`Đang hoạt động: ${insight.products.active}/${insight.products.total}`, "neutral"));
      meta.appendChild(badge(`Sắp hết hàng: ${insight.products.lowStock}`, insight.products.lowStock > 0 ? "negative" : "positive"));

      const list = document.createElement("ul");
      list.className = "dash-list";
      list.innerHTML = `
        <li>Sản phẩm đang hiển thị: <b>${insight.products.active}</b></li>
        <li>Sản phẩm bị ẩn/xóa: <b>${insight.products.hidden}</b></li>
      `;

      const actions = document.createElement("div");
      actions.className = "dash-actions";
      actions.appendChild(btn("Xem sản phẩm", "primary", () => openAdminSection(1)));
      actions.appendChild(btn("Thêm sản phẩm", "", () => {
        openAdminSection(1);
        setTimeout(() => document.querySelector(".add-product")?.classList.add("open"), 100);
      }));

      onBox.appendChild(meta);
      onBox.appendChild(list);
      onBox.appendChild(actions);
    }
  }

  // 3) Doanh thu
  {
    const onBox = cards[2].querySelector(".on-box");
    if (onBox) {
      onBox.querySelectorAll("p").forEach(p => p.remove());

      const meta = document.createElement("div");
      meta.className = "dash-meta";

      const diff = insight.revenue.today - insight.revenue.yesterday;
      const kind = diff > 0 ? "positive" : diff < 0 ? "negative" : "neutral";
      meta.appendChild(badge(`Hôm nay: ${vnd(insight.revenue.today)}`, insight.revenue.today > 0 ? "positive" : "neutral"));
      meta.appendChild(badge(`So với hôm qua: ${diff >= 0 ? "+" : ""}${vnd(diff)}`, kind));

      const list = document.createElement("ul");
      list.className = "dash-list";
      list.innerHTML = `
        <li>Đơn đã giao hôm nay: <b>${insight.revenue.orderToday}</b></li>
        <li>Tổng doanh thu (đã giao): <b>${vnd(insight.revenue.total)}</b></li>
      `;

      const actions = document.createElement("div");
      actions.className = "dash-actions";
      actions.appendChild(btn("Xem thống kê", "primary", () => openAdminSection(5)));
      actions.appendChild(btn("Xem đơn hàng", "", () => openAdminSection(4)));

      onBox.appendChild(meta);
      onBox.appendChild(list);
      onBox.appendChild(actions);
    }
  }
}

// Gọi lại sau khi dashboard update để số liệu luôn đúng
const __oldUpdateDashboard = updateDashboard;
updateDashboard = function () {
  try { __oldUpdateDashboard(); } catch (e) {}
  try { enhanceDashboardCards(); } catch (e) {}
};
// Phân trang 
let perPage = 12;
let currentPage = 1;
const ADMIN_PRODUCT_PAGE_KEY = "adminProductCurrentPage";
function loadSavedProductPage(){
  const v = parseInt(sessionStorage.getItem(ADMIN_PRODUCT_PAGE_KEY),10);
  return Number.isFinite(v) && v>0 ? v : null;
}
function saveProductPage(p){
  sessionStorage.setItem(ADMIN_PRODUCT_PAGE_KEY, String(p));
}

let totalPage = 0;
let perProducts = [];

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    showProductArr(productShow);
}

function setupPagination(productAll, perPage, pageNow) {
  const ul = document.querySelector(".page-nav-list");
  if (!ul) return;
  ul.innerHTML = "";

  const pageCount = Math.ceil(productAll.length / perPage);
  if (pageCount <= 1) return;

  // helper tạo item
  const makeItem = (label, page, opts = {}) => {
    const li = document.createElement("li");
    li.className = "page-nav-item";

    if (opts.type === "ellipsis") {
      li.classList.add("ellipsis");
      li.innerHTML = `<a href="javascript:void(0)">…</a>`;
      return li;
    }

    if (opts.type === "nav") li.classList.add("nav");
    if (opts.disabled) li.classList.add("disabled");
    if (page === pageNow && opts.type !== "nav") li.classList.add("active");

    li.innerHTML = `<a href="#">${label}</a>`;
    if (!opts.disabled) {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = page;
        saveProductPage(currentPage);
        displayList(productAll, perPage, currentPage);
        setupPagination(productAll, perPage, currentPage);
      });
    }
    return li;
  };

  // prev
  ul.appendChild(
    makeItem("‹", Math.max(1, pageNow - 1), {
      type: "nav",
      disabled: pageNow === 1,
    })
  );

  // pages: 1 … (current-1, current, current+1) … last
  const sibling = 1;
  const left = Math.max(2, pageNow - sibling);
  const right = Math.min(pageCount - 1, pageNow + sibling);

  ul.appendChild(makeItem(1, 1));

  if (left > 2) ul.appendChild(makeItem("…", null, { type: "ellipsis" }));

  for (let p = left; p <= right; p++) ul.appendChild(makeItem(p, p));

  if (right < pageCount - 1) ul.appendChild(makeItem("…", null, { type: "ellipsis" }));

  if (pageCount > 1) ul.appendChild(makeItem(pageCount, pageCount));

  // next
  ul.appendChild(
    makeItem("›", Math.min(pageCount, pageNow + 1), {
      type: "nav",
      disabled: pageNow === pageCount,
    })
  );
  // --- Jump to page input ---
  const nav = document.querySelector(".page-nav");
  if (nav) {
    // remove old jump control if exists
    const old = nav.querySelector(".page-jump");
    if (old) old.remove();

    const jump = document.createElement("div");
    jump.className = "page-jump";
    jump.style.display = "flex";
    jump.style.gap = "8px";
    jump.style.alignItems = "center";
    jump.style.justifyContent = "center";
    jump.style.marginTop = "10px";

    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.max = String(pageCount);
    input.value = String(pageNow);
    input.placeholder = "Trang...";
    input.style.width = "90px";
    input.style.padding = "8px 10px";
    input.style.border = "1px solid #ddd";
    input.style.borderRadius = "10px";
    input.style.outline = "none";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Đi";
    btn.style.padding = "8px 14px";
    btn.style.borderRadius = "10px";
    btn.style.border = "1px solid #ddd";
    btn.style.cursor = "pointer";

    const go = () => {
      const val = Number(input.value);
      if (!Number.isFinite(val)) return;
      const target = Math.min(pageCount, Math.max(1, Math.trunc(val)));
      if (target === pageNow) return;
      currentPage = target; // cập nhật biến global để các thao tác khác không nhảy về trang 1
      displayList(productAll, perPage, currentPage);
      setupPagination(productAll, perPage, currentPage);

      // scroll nhẹ về đầu danh sách sản phẩm cho dễ nhìn
      const anchor = document.getElementById("show-product");
      if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    btn.addEventListener("click", go);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") go();
    });

    jump.appendChild(input);
    jump.appendChild(btn);
    nav.appendChild(jump);
  }

}


// Hiển thị danh sách sản phẩm 
function showProductArr(arr) {
    let productHtml = "";
    const featuredIds = JSON.parse(localStorage.getItem("featured")) || [];

    if (arr.length == 0) {
        productHtml = `<div class="no-result">
            <div class="no-result-i"><i class="fa-solid fa-face-sad-cry"></i></div>
            <div class="no-result-h">Không có sản phẩm để hiển thị</div>
        </div>`;
    } else {
        arr.forEach(product => {
            let btnCtl = product.status == 1 ?
                `<button type="button" class="btn-delete" onclick="deleteProduct(${product.id})"><i class="fa-solid fa-trash"></i></button>` :
                `<button type="button" class="btn-delete" onclick="changeStatusProduct(${product.id})"><i class="fa-solid fa-eye"></i></button>`;

            const isFeatured = featuredIds.includes(product.id);
            const featuredClass = isFeatured ? "featured" : "";
            const featureBtnClass = isFeatured ? "active" : "";

            productHtml += `
            <div class="list ${featuredClass}">
                <div class="list-left">
                    <img src="${product.img}" alt="">
                    <div class="list-info">
                        <h4>${product.title}</h4>
                        <p class="list-note">${product.desc}</p>
                        <span class="list-category">${product.category}</span>
                    </div>
                </div>
                <div class="list-right">
                    <div class="list-price">
                        <span class="list-current-price">${vnd(product.price)}</span>                   
                    </div>
                    <div class="list-stock-ctl" style="margin-top:6px;font-size:13px;color:#555;">Tồn: <input type="number" min="0" value="${product.stock ?? 0}" style="width:80px;padding:4px 6px;border:1px solid #ddd;border-radius:6px;" onchange="updateStock(${product.id}, this.value)"></div>
                    <div class="list-control">
                        <div class="list-tool">
                            <button type="button" class="btn-feature ${featureBtnClass}" title="${isFeatured ? "Bỏ nổi bật" : "Đặt làm nổi bật"}" onclick="toggleFeatured(${product.id})">
                                <i class="fa-solid fa-star"></i>
                            </button>
                            <button type="button" class="btn-edit" onclick="editProduct(${product.id})"><i class="fa-solid fa-pen-to-square"></i></button>
                            ${btnCtl}
                        </div>                       
                    </div>
                </div> 
            </div>`;
        });
    }
    document.getElementById("show-product").innerHTML = productHtml;
}


function showProduct(opts = {}) {
    const { resetPage = false, keepScroll = true } = opts;

    // Giữ vị trí scroll trước khi render lại list
    const prevScroll = keepScroll ? window.scrollY : 0;

    // Chỉ reset trang khi user đổi filter/search (không reset khi CRUD)
    if (resetPage) {
        currentPage = 1;
        saveProductPage(currentPage);
    } else {
        const saved = loadSavedProductPage();
        if (saved) currentPage = saved;
    }

    const selectOp = document.getElementById('the-loai')?.value || "Tất cả";
    const stockFilter = document.getElementById('stock-filter')?.value || "all";
    const valeSearchInput = document.getElementById('form-search-product')?.value || "";

    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    let result = [];
    if (selectOp == "Tất cả") {
        result = products.filter((item) => item.status == 1);
    } else if (selectOp == "Đã xóa") {
        result = products.filter((item) => item.status == 0);
    } else {
        result = products.filter((item) => item.category == selectOp);
    }

    // Lọc tồn kho (nếu có select #stock-filter)
    if (stockFilter === "in") {
        result = result.filter(p => Number(p.stock ?? 0) > 0);
    } else if (stockFilter === "out") {
        result = result.filter(p => Number(p.stock ?? 0) <= 0);
    }

    // Tìm kiếm theo tên
    const key = valeSearchInput.toString().toUpperCase();
    result = key === "" ? result : result.filter(item => item.title.toString().toUpperCase().includes(key));

    // Nếu sau khi xóa / lọc mà currentPage vượt quá tổng trang -> kéo về trang cuối hợp lệ
    const pageCount = Math.max(1, Math.ceil(result.length / perPage));
    if (currentPage > pageCount) currentPage = pageCount;
    saveProductPage(currentPage);

    displayList(result, perPage, currentPage);
    setupPagination(result, perPage, currentPage);

    // Restore scroll sau khi DOM update
    if (keepScroll) {
        requestAnimationFrame(() => window.scrollTo(0, prevScroll));
    }
}
function cancelSearchProduct() {
    const products = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products")).filter(item => item.status == 1)
        : [];
    document.getElementById('the-loai').value = "Tất cả";
    const sf = document.getElementById('stock-filter');
    if (sf) sf.value = "all";
    document.getElementById('form-search-product').value = "";
    currentPage = 1;
    displayList(products, perPage, currentPage);
    setupPagination(products, perPage, currentPage);
}

// window.onload = showProduct();

function createId(arr) {
    let id = arr.length;
    let check = arr.find((item) => item.id == id);
    while (check != null) {
        id++;
        check = arr.find((item) => item.id == id);
    }
    return id;
}
// Xóa sản phẩm 
function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    let index = products.findIndex(item => {
        return item.id == id;
    })
    if (confirm("Bạn có chắc muốn xóa?") == true) {
        products[index].status = 0;
        toast({ title: 'Success', message: 'Xóa sản phẩm thành công !', type: 'success', duration: 3000 });
    }
    localStorage.setItem("products", JSON.stringify(products));
    updateDashboard();
    showProduct({ resetPage: false, keepScroll: true });
}

function changeStatusProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    let index = products.findIndex(item => {
        return item.id == id;
    })
    if (confirm("Bạn có chắc chắn muốn hủy xóa?") == true) {
        products[index].status = 1;
        toast({ title: 'Success', message: 'Khôi phục sản phẩm thành công !', type: 'success', duration: 3000 });
    }
    localStorage.setItem("products", JSON.stringify(products));
    updateDashboard();
    showProduct({ resetPage: false, keepScroll: true });
}

var indexCur;
function editProduct(id) {
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    let index = products.findIndex(item => {
        return item.id == id;
    })
    indexCur = index;
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelector(".add-product").classList.add("open");
    //
    document.querySelector(".upload-image-preview").src = products[index].img;
    document.getElementById("ten-sach").value = products[index].title;
    document.getElementById("gia-moi").value = products[index].price;
    document.getElementById("mo-ta").value = products[index].desc;
    document.getElementById("chon-sach").value = products[index].category;
    document.getElementById("stock").value = products[index].stock ?? 0;

}

function smartResolveImage(src) {
  if (!src) return "./images/blank-image.png"; // mặc định nếu không có src
  if (src.startsWith("data:")) return src; // data URL
  if (src.startsWith("http://") || src.startsWith("https://")) return src; // CDN/ảnh ngoài
  return src; // relative path hiện có
}
let btnUpdateProductIn = document.getElementById("update-product-button");
btnUpdateProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("products"));
    let idProduct = products[indexCur].id;
    let imgProduct = products[indexCur].img;
    let titleProduct = products[indexCur].title;
    let curProduct = products[indexCur].price;
    let descProduct = products[indexCur].desc;
    let categoryProduct = products[indexCur].category;
    let imgProductCur = smartResolveImage(document.querySelector(".upload-image-preview").src)
    let titleProductCur = document.getElementById("ten-sach").value;
    let curProductCur = document.getElementById("gia-moi").value;
    let descProductCur = document.getElementById("mo-ta").value;
    let stock = parseInt(document.getElementById("stock").value, 10);
if (isNaN(stock) || stock < 0) stock = 0;
    let categoryText = document.getElementById("chon-sach").value;
    let stockCur = parseInt(document.getElementById("stock").value, 10);
if (isNaN(stockCur) || stockCur < 0) stockCur = 0;


    if (imgProductCur != imgProduct || titleProductCur != titleProduct || curProductCur != curProduct || descProductCur != descProduct || categoryText != categoryProduct) {
        let productadd = {
            id: idProduct,
            title: titleProductCur,
            img: imgProductCur,
            category: categoryText,
            price: parseInt(curProductCur),
            desc: descProductCur,
            stock: stockCur,
            status: 1,
        };
        products.splice(indexCur, 1);
        products.splice(indexCur, 0, productadd);
        localStorage.setItem("products", JSON.stringify(products));
        toast({ title: "Success", message: "Sửa sản phẩm thành công!", type: "success", duration: 3000, });
        setDefaultValue();
        document.querySelector(".add-product").classList.remove("open");
        showProduct({ resetPage: false, keepScroll: true });
    } else {
        toast({ title: "Warning", message: "Sản phẩm của bạn không thay đổi!", type: "warning", duration: 3000, });
    }
});

let btnAddProductIn = document.getElementById("add-product-button");
btnAddProductIn.addEventListener("click", (e) => {
    e.preventDefault();
    let imgProduct = smartResolveImage(document.querySelector(".upload-image-preview").src)
    let tenSach = document.getElementById("ten-sach").value;
    let price = document.getElementById("gia-moi").value;
    let moTa = document.getElementById("mo-ta").value;
      const categoryText = document.getElementById("chon-sach").value;
  let stock = parseInt(document.getElementById("stock").value, 10);
  if (isNaN(stock) || stock < 0) stock = 0;
        if(tenSach == "" || price == "" || moTa == "") {
        toast({ title: "Chú ý", message: "Vui lòng nhập đầy đủ thông tin sách!", type: "warning", duration: 3000, });
    } else {
        if(isNaN(price)) {
            toast({ title: "Chú ý", message: "Giá phải ở dạng số!", type: "warning", duration: 3000, });
        } else {
            let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
            let product = {
                id: createId(products),
                title: tenSach,
                img: imgProduct,
                category: categoryText,
                price: parseInt(price, 10),
                desc: moTa,
                stock: stock,
                status:1
            };
            products.unshift(product);
            localStorage.setItem("products", JSON.stringify(products));
            showProduct({ resetPage: false, keepScroll: true });
            updateDashboard();
            document.querySelector(".add-product").classList.remove("open");
            toast({ title: "Success", message: "Thêm sản phẩm thành công!", type: "success", duration: 3000});
            setDefaultValue();
        }
    }
});

document.querySelector(".modal-close.product-form").addEventListener("click",() => {
    setDefaultValue();
})

function setDefaultValue() {
    document.querySelector(".upload-image-preview").src = "./assets/img/blank-image.png";
    document.getElementById("ten-sach").value = "";
    document.getElementById("gia-moi").value = "";
    document.getElementById("mo-ta").value = "";
    document.getElementById("chon-sach").value = "Sách giáo khoa";
    document.getElementById("stock").value = 0;

}

// Open Popup Modal
let btnAddProduct = document.getElementById("btn-add-product");
btnAddProduct.addEventListener("click", () => {
    document.querySelectorAll(".add-product-e").forEach(item => {
        item.style.display = "block";
    })
    document.querySelectorAll(".edit-product-e").forEach(item => {
        item.style.display = "none";
    })
    document.querySelector(".add-product").classList.add("open");
});

// Close Popup Modal
let closePopup = document.querySelectorAll(".modal-close");
let modalPopup = document.querySelectorAll(".modal");

for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].onclick = () => {
        modalPopup[i].classList.remove("open");
    };
}

// On change Image
function uploadImage(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.querySelector(".upload-image-preview").src = e.target.result; // data:
  };
  reader.readAsDataURL(file);
}


// Đổi trạng thái đơn hàng
function changeOrderStatus(id, newStatus) {
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    const idx = orders.findIndex(o => String(o.id) === String(id));
    if (idx === -1) return;
    orders[idx].trangthai = Number(newStatus);
    localStorage.setItem("order", JSON.stringify(orders));
    // refresh list according to current filters
    findOrder();
}

// Backward compatibility (old button handler)
function changeStatus(id, el) {
    changeOrderStatus(id, 1);
}



// Show order
function getOrderStatusMeta(status) {
    switch (Number(status)) {
        case 0: return { text: "Chờ xác nhận", cls: "status-pending" };
        case 1: return { text: "Đang xử lý", cls: "status-processing" };
        case 2: return { text: "Đang giao", cls: "status-shipping" };
        case 3: return { text: "Đã giao", cls: "status-delivered" };
        case 4: return { text: "Đã huỷ", cls: "status-cancelled" };
        default: return { text: "Không rõ", cls: "status-unknown" };
    }
}

function showOrder(arr) {
    let orderHtml = "";
    if (!arr || arr.length === 0) {
        orderHtml = `<tr><td colspan="6">Không có dữ liệu</td></tr>`;
    } else {
        arr.forEach((item) => {
            const meta = getOrderStatusMeta(item.trangthai);
            const date = formatDate(item.thoigiandat);
            const statusBadge = `<span class="${meta.cls}">${meta.text}</span>`;
            const statusSelect = `
                <select class="order-status-select" onchange="changeOrderStatus('${item.id}', this.value)">
                    <option value="0" ${Number(item.trangthai)===0 ? "selected" : ""}>Chờ xác nhận</option>
                    <option value="1" ${Number(item.trangthai)===1 ? "selected" : ""}>Đang xử lý</option>
                    <option value="2" ${Number(item.trangthai)===2 ? "selected" : ""}>Đang giao</option>
                    <option value="3" ${Number(item.trangthai)===3 ? "selected" : ""}>Đã giao</option>
                    <option value="4" ${Number(item.trangthai)===4 ? "selected" : ""}>Đã huỷ</option>
                </select>`;
            orderHtml += `
            <tr>
                <td>${item.id}</td>
                <td>${item.khachhang}</td>
                <td>${date}</td>
                <td>${vnd(item.tongtien)}</td>
                <td>
                    <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
                        ${statusBadge}
                        ${statusSelect}
                    </div>
                </td>
                <td class="control">
                    <button class="btn-detail" onclick="detailOrder('${item.id}')"><i class="fa-solid fa-eye"></i> Chi tiết</button>
                </td>
            </tr>`;
        });
    }
    const el = document.getElementById("showOrder");
    if (el) el.innerHTML = orderHtml;
}

let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
// window.onload = showOrder(orders);

// Get Order Details
function getOrderDetails(madon) {
    let orderDetails = localStorage.getItem("orderDetails") ?
        JSON.parse(localStorage.getItem("orderDetails")) : [];
    let ctDon = [];
    orderDetails.forEach((item) => {
        if (item.madon == madon) {
            ctDon.push(item);
        }
    });
    return ctDon;
}

// Show Order Detail
function detailOrder(id) {
    document.querySelector(".modal.detail-order").classList.add("open");
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let products = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("products")) : [];
    // Lấy hóa đơn 
    let order = orders.find((item) => item.id == id);
    // Lấy chi tiết hóa đơn
    let ctDon = getOrderDetails(id);
    let spHtml = `<div class="modal-detail-left"><div class="order-item-group">`;

    ctDon.forEach((item) => {
        let detaiSP = products.find(product => product.id == item.id);
        spHtml += `<div class="order-product">
            <div class="order-product-left">
                <img src="${detaiSP.img}" alt="">
                <div class="order-product-info">
                    <h4>${detaiSP.title}</h4>
                    <p class="order-product-note"><i class="fa-solid fa-pen"></i> ${item.note}</p>
                    <p class="order-product-quantity">SL: ${item.soluong}<p>
                </div>
            </div>
            <div class="order-product-right">
                <div class="order-product-price">
                    <span class="order-product-current-price">${vnd(item.price)}</span>
                </div>                         
            </div>
        </div>`;
    });
    spHtml += `</div></div>`;
    spHtml += `<div class="modal-detail-right">
        <ul class="detail-order-group">
            <li class="detail-order-item">
                <span class="detail-order-item-left"><i class="fa-solid fa-calendar-days"></i> Ngày đặt hàng</span>
                <span class="detail-order-item-right">${formatDate(order.thoigiandat)}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-solid fa-truck"></i> Hình thức giao</span>
            <span class="detail-order-item-right">${order.hinhthucgiao || 'Giao tiêu chuẩn'}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-solid fa-person"></i> Người nhận</span>
            <span class="detail-order-item-right">${order.tenguoinhan}</span>
            </li>
            <li class="detail-order-item">
            <span class="detail-order-item-left"><i class="fa-solid fa-phone"></i> Số điện thoại</span>
            <span class="detail-order-item-right">${order.sdtnhan}</span>
            </li>
            <li class="detail-order-item tb">
                <i class="fa-solid fa-calendar-day"></i> Ngày giao hàng
  </span>
  <p class="detail-order-item-b">
    ${formatDate(order.ngaygiaohang) || '—'}
  </p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-solid fa-location-dot"></i> Địa chỉ nhận</span>
                <p class="detail-order-item-b">${order.diachinhan}</p>
            </li>
            <li class="detail-order-item tb">
                <span class="detail-order-item-t"><i class="fa-solid fa-note-sticky"></i> Ghi chú</span>
                <p class="detail-order-item-b">${order.ghichu}</p>
            </li>
            
        </ul>
    </div>`;
    document.querySelector(".modal-detail-order").innerHTML = spHtml;

    let classDetailBtn = order.trangthai == 0 ? "btn-chuaxuly" : "btn-daxuly";
    let textDetailBtn = order.trangthai == 0 ? "Chưa xử lý" : "Đã xử lý";
    document.querySelector(
        ".modal-detail-bottom"
    ).innerHTML = `<div class="modal-detail-bottom-left">
        <div class="price-total">
            <span class="thanhtien">Thành tiền</span>
            <span class="price">${vnd(order.tongtien)}</span>
        </div>
    </div>
    <div class="modal-detail-bottom-right">
        <button class="modal-detail-btn ${classDetailBtn}" onclick="changeStatus('${order.id}',this)">${textDetailBtn}</button>
    </div>`;
}

// Find Order
function findOrder() {
    let tinhTrang = parseInt(document.getElementById("tinh-trang").value);
    if (Number.isNaN(tinhTrang)) tinhTrang = -1;
let ct = document.getElementById("form-search-order").value;
    let key = (ct || "").toString().toLowerCase().trim();
    let timeStart = document.getElementById("time-start").value;
    let timeEnd = document.getElementById("time-end").value;
    
    if (timeEnd < timeStart && timeEnd != "" && timeStart != "") {
        alert("Lựa chọn thời gian sai !");
        return;
    }
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let result = tinhTrang == -1 ? orders : orders.filter((item) => {
        return item.trangthai == tinhTrang;
    });
    result = ct == "" ? result : result.filter((item) => {
        return ( item.khachhang.toLowerCase().includes(key) ||        // tìm theo tên
        item.sdtnhan?.toString().toLowerCase().includes(key) || // thêm tìm theo SĐT người nhận
        item.id.toString().toLowerCase().includes(key)    )   // hoặc mã đơn);
    });

    if (timeStart != "" && timeEnd == "") {
        result = result.filter((item) => {
            return new Date(item.thoigiandat) >= new Date(timeStart).setHours(0, 0, 0);
        });
    } else if (timeStart == "" && timeEnd != "") {
        result = result.filter((item) => {
            return new Date(item.thoigiandat) <= new Date(timeEnd).setHours(23, 59, 59);
        });
    } else if (timeStart != "" && timeEnd != "") {
        result = result.filter((item) => {
            return (new Date(item.thoigiandat) >= new Date(timeStart).setHours(0, 0, 0) && new Date(item.thoigiandat) <= new Date(timeEnd).setHours(23, 59, 59)
            );
        });
    }
    showOrder(result);
}

function cancelSearchOrder(){
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    document.getElementById("tinh-trang").value = -1;
    document.getElementById("form-search-order").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";
    showOrder(orders);
}

// Create Object Thong ke
function createObj() {
    let orders = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []; 
    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : []; 
    let result = [];
    orderDetails.forEach(item => {
        // Lấy thông tin sản phẩm
        let prod = products.find(product => {return product.id == item.id;});
        if(!prod) return;
        let obj = new Object();
        obj.id = item.id;
        obj.madon = item.madon;
        obj.price = item.price;
        obj.quantity = item.soluong;
        obj.category = prod.category;
        obj.title = prod.title;
        obj.img = prod.img;
        const ord = orders.find(order => order.id == item.madon);
        // Chỉ thống kê/doanh thu cho đơn ĐÃ GIAO
        if (!ord || Number(ord.trangthai) !== 3) return;
        obj.time = ord.thoigiandat;
        result.push(obj);
    });
    return result;
}

// Filter 
function thongKe(mode) {
    let categoryTk = document.getElementById("the-loai-tk").value;
    let ct = document.getElementById("form-search-tk").value;
    let timeStart = document.getElementById("time-start-tk").value;
    let timeEnd = document.getElementById("time-end-tk").value;
    if (timeEnd < timeStart && timeEnd != "" && timeStart != "") {
        alert("Lựa chọn thời gian sai !");
        return;
    }
    let arrDetail = createObj();
    let result = categoryTk == "Tất cả" ? arrDetail : arrDetail.filter((item) => {
        return item.category == categoryTk;
    });

    result = ct == "" ? result : result.filter((item) => {
        return (item.title.toLowerCase().includes(ct.toLowerCase()));
    });

    if (timeStart != "" && timeEnd == "") {
        result = result.filter((item) => {
            return new Date(item.time) > new Date(timeStart).setHours(0, 0, 0);
        });
    } else if (timeStart == "" && timeEnd != "") {
        result = result.filter((item) => {
            return new Date(item.time) < new Date(timeEnd).setHours(23, 59, 59);
        });
    } else if (timeStart != "" && timeEnd != "") {
        result = result.filter((item) => {
            return (new Date(item.time) > new Date(timeStart).setHours(0, 0, 0) && new Date(item.time) < new Date(timeEnd).setHours(23, 59, 59)
            );
        });
    }    
    showThongKe(result,mode);
}

// Show số lượng sp, số lượng đơn bán, doanh thu
function showOverview(arr){
    document.getElementById("quantity-product").innerText = arr.length;
    document.getElementById("quantity-order").innerText = arr.reduce((sum, cur) => (sum + parseInt(cur.quantity)),0);
    document.getElementById("quantity-sale").innerText = vnd(arr.reduce((sum, cur) => (sum + parseInt(cur.doanhthu)),0));
}

function showThongKe(arr,mode) {
    let orderHtml = "";
    let mergeObj = mergeObjThongKe(arr);
    showOverview(mergeObj);

    switch (mode){
        case 0:
            mergeObj = mergeObjThongKe(createObj());
            showOverview(mergeObj);
            document.getElementById("the-loai-tk").value = "Tất cả";
            document.getElementById("form-search-tk").value = "";
            document.getElementById("time-start-tk").value = "";
            document.getElementById("time-end-tk").value = "";
            break;
        case 1:
            mergeObj.sort((a,b) => parseInt(a.quantity) - parseInt(b.quantity))
            break;
        case 2:
            mergeObj.sort((a,b) => parseInt(b.quantity) - parseInt(a.quantity))
            break;
    }
    for(let i = 0; i < mergeObj.length; i++) {
        orderHtml += `
        <tr>
        <td>${i + 1}</td>
        <td><div class="prod-img-title"><img class="prd-img-tbl" src="${mergeObj[i].img}" alt=""><p>${mergeObj[i].title}</p></div></td>
        <td>${mergeObj[i].quantity}</td>
        <td>${vnd(mergeObj[i].doanhthu)}</td>
        <td><button class="btn-detail product-order-detail" data-id="${mergeObj[i].id}"><i class="fa-solid fa-eye"></i> Chi tiết</button></td>
        </tr>      
        `;
    }
    document.getElementById("showTk").innerHTML = orderHtml;
    document.querySelectorAll(".product-order-detail").forEach(item => {
        let idProduct = item.getAttribute("data-id");
        item.addEventListener("click", () => {           
            detailOrderProduct(arr,idProduct);
        })
    })
}

showThongKe(createObj())

function mergeObjThongKe(arr) {
    let result = [];
    arr.forEach(item => {
        let check = result.find(i => i.id == item.id) // Không tìm thấy gì trả về undefined

        if(check){
            check.quantity = parseInt(check.quantity)  + parseInt(item.quantity);
            check.doanhthu += parseInt(item.price) * parseInt(item.quantity);
        } else {
            const newItem = {...item}
            newItem.doanhthu = newItem.price * newItem.quantity;
            result.push(newItem);
        }
        
    });
    return result;
}

function detailOrderProduct(arr,id) {
    let orderHtml = "";
    arr.forEach(item => {
        if(item.id == id) {
            orderHtml += `<tr>
            <td>${item.madon}</td>
            <td>${item.quantity}</td>
            <td>${vnd(item.price)}</td>
            <td>${formatDate(item.time)}</td>
            </tr>      
            `;
        }
    });
    document.getElementById("show-product-order-detail").innerHTML = orderHtml
    document.querySelector(".modal.detail-order-product").classList.add("open")
}

// User
let addAccount = document.getElementById('signup-button');
let updateAccount = document.getElementById("btn-update-account")

const __closeBtn = document.querySelector(".modal.signup .modal-close");
if(__closeBtn){__closeBtn.addEventListener("click",() => { signUpFormReset(); });}


function openCreateAccount() {
    document.querySelector(".signup").classList.add("open");
    document.querySelectorAll(".edit-account-e").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".add-account-e").forEach(item => {
        item.style.display = "block"
    })
}

function signUpFormReset() {
    const full = document.getElementById('fullname');
    const phone = document.getElementById('phone');
    const pass = document.getElementById('password'); // có thể không tồn tại (admin không xem mật khẩu)
    if (full) full.value = "";
    if (phone) phone.value = "";
    if (pass) pass.value = "";
    const msgName = document.querySelector('.form-message-name');
    const msgPhone = document.querySelector('.form-message-phone');
    const msgPass = document.querySelector('.form-message-password');
    if (msgName) msgName.innerHTML = '';
    if (msgPhone) msgPhone.innerHTML = '';
    if (msgPass) msgPass.innerHTML = '';
}

function showUserArr(arr) {
    let accountHtml = '';
    if(arr.length == 0) {
        accountHtml = `<td colspan="5">Không có dữ liệu</td>`
    } else {
        arr.forEach((account, index) => {
            let tinhtrang = account.status == 0 ? `<span class="status-no-complete">Bị khóa</span>` : `<span class="status-complete">Hoạt động</span>`;
            accountHtml += ` <tr>
            <td>${index + 1}</td>
            <td>${account.fullname}</td>
            <td>${account.phone}</td>
            <td>${formatDate(account.join)}</td>
            <td>${tinhtrang}</td>
            <td class="control control-table">
            <button type="button" class="btn-edit" id="edit-account" onclick='editAccount(${account.phone})' ><i class="fa-solid fa-pen-to-square"></i></button>
            <button type="button" class="btn-delete" id="delete-account" onclick="deleteAcount(${index})"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`
        })
    }
    document.getElementById('show-user').innerHTML = accountHtml;
}

function showUser() {
    let tinhTrang = parseInt(document.getElementById("tinh-trang-user").value);
    let ct = document.getElementById("form-search-user").value;
    let timeStart = document.getElementById("time-start-user").value;
    let timeEnd = document.getElementById("time-end-user").value;

    if (timeEnd < timeStart && timeEnd != "" && timeStart != "") {
        alert("Lựa chọn thời gian sai !");
        return;
    }

    let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")).filter(item => item.userType == 0) : [];
    let result = tinhTrang == 2 ? accounts : accounts.filter(item => item.status == tinhTrang);

    result = ct == "" ? result : result.filter((item) => {
        return (item.fullname.toLowerCase().includes(ct.toLowerCase()) || item.phone.toString().toLowerCase().includes(ct.toLowerCase()));
    });

    if (timeStart != "" && timeEnd == "") {
        result = result.filter((item) => {
            return new Date(item.join) >= new Date(timeStart).setHours(0, 0, 0);
        });
    } else if (timeStart == "" && timeEnd != "") {
        result = result.filter((item) => {
            return new Date(item.join) <= new Date(timeEnd).setHours(23, 59, 59);
        });
    } else if (timeStart != "" && timeEnd != "") {
        result = result.filter((item) => {
            return (new Date(item.join) >= new Date(timeStart).setHours(0, 0, 0) && new Date(item.join) <= new Date(timeEnd).setHours(23, 59, 59)
            );
        });
    }
    showUserArr(result);
}

function cancelSearchUser() {
    let accounts = localStorage.getItem("accounts") ? JSON.parse(localStorage.getItem("accounts")).filter(item => item.userType == 0) : [];
    showUserArr(accounts);
    document.getElementById("tinh-trang-user").value = 2;
    document.getElementById("form-search-user").value = "";
    document.getElementById("time-start-user").value = "";
    document.getElementById("time-end-user").value = "";
}

// window.onload = showUser();
document.addEventListener("DOMContentLoaded", () => {
  // chặn trường hợp trình duyệt block localStorage (Tracking Prevention / Private Mode)
  const __storageOK = (() => {
    try {
      const k = "__tomenie_test__";
      localStorage.setItem(k, "1");
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  })();
  if (!__storageOK) {
    alert("Trình duyệt đang chặn localStorage (Tracking Prevention/Private Mode). Hãy mở bằng Live Server (http://localhost) hoặc tắt chặn storage để admin hoạt động.");
    return;
  }

  // toggle sidebar
  const menuIconButton = document.querySelector(".menu-icon-btn");
  const sidebar = document.querySelector(".sidebar");
  if (menuIconButton && sidebar) {
    menuIconButton.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // khởi tạo màn hình
  const orders = JSON.parse(localStorage.getItem("order")) || [];
  showProduct({ resetPage: false, keepScroll: true });
  showUser();
  showOrder(orders);
  updateDashboard();
    renderAdminFeatured(); 
});
function deleteAcount(phone) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let index = accounts.findIndex(item => item.phone == phone);
    if (confirm("Bạn có chắc muốn xóa?")) {
        accounts.splice(index, 1)
    }
    localStorage.setItem("accounts", JSON.stringify(accounts));
    showUser();
}

let indexFlag;
function editAccount(phone) {
    document.querySelector(".signup").classList.add("open");
    document.querySelectorAll(".add-account-e").forEach(item => {
        item.style.display = "none"
    })
    document.querySelectorAll(".edit-account-e").forEach(item => {
        item.style.display = "block"
    })
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    let index = accounts.findIndex(item => {
        return item.phone == phone
    })
    indexFlag = index;
    document.getElementById("fullname").value = accounts[index].fullname;
    document.getElementById("phone").value = accounts[index].phone;
    // Admin không được xem mật khẩu: không auto-fill password
document.getElementById("user-status").checked = accounts[index].status == 1 ? true : false;
}

updateAccount.addEventListener("click", (e) => {
    e.preventDefault();
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // phải có indexFlag hợp lệ (đã bấm nút sửa)
    if (typeof indexFlag !== "number" || indexFlag < 0 || indexFlag >= accounts.length) {
        toast({ title: 'Lỗi', message: 'Không xác định được tài khoản cần sửa. Hãy bấm nút sửa (✎) lại.', type: 'error', duration: 3000 });
        return;
    }

    const fullEl = document.getElementById("fullname");
    const phoneEl = document.getElementById("phone");
    const passEl = document.getElementById("password"); // có thể không có
    const statusEl = document.getElementById("user-status");

    const fullname = fullEl ? fullEl.value.trim() : "";
    const phone = phoneEl ? phoneEl.value.trim() : "";

    // validate tối thiểu
    if (fullname === "" || phone === "") {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ Họ tên và Số điện thoại!', type: 'warning', duration: 3000 });
        return;
    }

    // cập nhật thông tin
    accounts[indexFlag].fullname = fullname;
    accounts[indexFlag].phone = phone;

    // ✅ Admin KHÔNG xem mật khẩu.
    // Nếu form có trường password (trường hợp bạn vẫn để), chỉ đổi khi admin nhập mới.
    if (passEl && passEl.value.trim() !== "") {
        accounts[indexFlag].password = passEl.value.trim();
    }

    if (statusEl) {
        accounts[indexFlag].status = statusEl.checked ? true : false;
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));
    toast({ title: 'Thành công', message: 'Thay đổi thông tin thành công !', type: 'success', duration: 3000 });
    const modal = document.querySelector(".signup");
    if (modal) modal.classList.remove("open");
    signUpFormReset();
    showUser();
})
addAccount.addEventListener("click", (e) => {
    e.preventDefault();
    const fullEl = document.getElementById('fullname');
    const phoneEl = document.getElementById('phone');
    const passEl = document.getElementById('password');
    let fullNameUser = fullEl ? fullEl.value.trim() : '';
    let phoneUser = phoneEl ? phoneEl.value.trim() : '';
    let passwordUser = passEl ? passEl.value : '';

    // nếu form không có ô mật khẩu (#password) (ví dụ: bạn đã ẩn trong HTML để bảo mật)
// thì hỏi mật khẩu bằng prompt để vẫn tạo được khách hàng mới mà không lộ mật khẩu hiện tại của ai.
    if (!passEl) {
        const p = window.prompt('Nhập mật khẩu cho khách hàng mới:', '');
        if (p === null) return; // user bấm Cancel
        passwordUser = String(p).trim();
    } else {
        passwordUser = String(passEl.value || '').trim();
    }

    if (!passwordUser) {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập mật khẩu cho khách hàng mới!', type: 'warning', duration: 3000 });
        return;
    }
// Check validate
        let fullNameIP = document.getElementById('fullname');
        let formMessageName = document.querySelector('.form-message-name');
        let formMessagePhone = document.querySelector('.form-message-phone');
        let formMessagePassword = document.querySelector('.form-message-password');
    
        if (fullNameUser.length == 0) {
            formMessageName.innerHTML = 'Vui lòng nhập họ vâ tên';
            fullNameIP.focus();
        } else if (fullNameUser.length < 3) {
            fullNameIP.value = '';
            formMessageName.innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
        }
        
        if (phoneUser.length == 0) {
            formMessagePhone.innerHTML = 'Vui lòng nhập vào số điện thoại';
        } else if (phoneUser.length != 10) {
            formMessagePhone.innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
            document.getElementById('phone').value = '';
        }
        // validate mật khẩu: tối thiểu 6 ký tự
        if (passwordUser.length < 6) {
            if (formMessagePassword) {
                formMessagePassword.innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
            } else {
                toast({ title: 'Chú ý', message: 'Mật khẩu phải từ 6 ký tự trở lên!', type: 'warning', duration: 3000 });
            }
            const pwEl = document.getElementById('password');
            if (pwEl) pwEl.value = '';
            return;
        }
if (fullNameUser && phoneUser && passwordUser) {
        let user = {
            fullname: fullNameUser,
            phone: phoneUser,
            password: passwordUser,
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 0
        }
        console.log(user);
        let accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
        let checkloop = accounts.some(account => {
            return account.phone == user.phone;
        })
        if (!checkloop) {
            accounts.push(user);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            toast({ title: 'Thành công', message: 'Tạo thành công tài khoản !', type: 'success', duration: 3000 });
            document.querySelector(".signup").classList.remove("open");
            showUser();
            signUpFormReset();
        } else {
            toast({ title: 'Cảnh báo !', message: 'Tài khoản đã tồn tại !', type: 'error', duration: 3000 });
        }
    }
})

document.getElementById("logout-acc").addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("currentuser");
    window.location = "index.html";
})

// Render khung sản phẩm nổi bật trong admin (layout giống list sản phẩm)
function renderAdminFeatured() {
    const box = document.getElementById("admin-featured-products");
    if (!box) return;

    const featuredIds = JSON.parse(localStorage.getItem("featured")) || [];
    const products = JSON.parse(localStorage.getItem("products")) || [];

    // giữ đúng thứ tự đã chọn nổi bật
    const byId = new Map(products.map(p => [p.id, p]));
    const list = featuredIds
        .map(id => byId.get(id))
        .filter(p => p && Number(p.status) === 1);

    if (list.length === 0) {
        box.innerHTML = `<p class="admin-featured-empty">Chưa chọn sản phẩm nổi bật nào.</p>`;
        return;
    }

    let html = "";
    list.forEach(product => {
        const desc = (product.desc || "").toString();
        html += `
        <div class="list featured-picked">
            <div class="list-left">
                <img src="${product.img}" alt="">
                <div class="list-info">
                    <h4>${product.title}</h4>
                    <p class="list-note">${desc}</p>
                    <span class="list-category">${product.category}</span>
                </div>
            </div>

            <div class="list-right">
                <div class="list-price">
                    <span class="list-current-price">${vnd(product.price)}</span>
                </div>

                <div class="list-stock-ctl" style="margin-top:6px;font-size:13px;color:#555;">
                    Tồn:
                    <input type="number" min="0" value="${product.stock ?? 0}"
                        style="width:80px;padding:4px 6px;border:1px solid #ddd;border-radius:6px;"
                        onchange="updateStock(${product.id}, this.value)">
                </div>

                <div class="list-control">
                    <div class="list-tool">
                        <button type="button" class="btn-feature active" title="Bỏ nổi bật"
                            onclick="toggleFeatured(${product.id})">
                            <i class="fa-solid fa-star"></i>
                        </button>
                        <button type="button" class="btn-edit" onclick="editProduct(${product.id})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" class="btn-delete" onclick="deleteProduct(${product.id})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    });

    box.innerHTML = html;
}

// Bật / tắt nổi bật
function toggleFeatured(id) {
    let featured = JSON.parse(localStorage.getItem("featured")) || [];

    if (featured.includes(id)) {
        featured = featured.filter(pid => pid !== id);
        toast({ title: "Success", message: "Đã bỏ sản phẩm khỏi nổi bật", type: "success", duration: 2000 });
    } else {
        featured.push(id);
        toast({ title: "Success", message: "Đã thêm sản phẩm vào nổi bật", type: "success", duration: 2000 });
    }

    localStorage.setItem("featured", JSON.stringify(featured));
    // Cập nhật lại list & frame
    showProduct({ resetPage: false, keepScroll: true });
    renderAdminFeatured();
}

// Cập nhật tồn kho nhanh trong danh sách sản phẩm
function updateStock(id, value) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const idx = products.findIndex(p => p.id == id);
    if (idx === -1) {
        toast({ title: 'Lỗi', message: 'Không tìm thấy sản phẩm', type: 'error', duration: 3000 });
        return;
    }
    let v = parseInt(value, 10);
    if (isNaN(v) || v < 0) v = 0;
    products[idx].stock = v;
    localStorage.setItem("products", JSON.stringify(products));
    toast({ title: 'Success', message: 'Đã cập nhật tồn kho', type: 'success', duration: 2500 });
    // refresh UI
    showProduct({ resetPage: false, keepScroll: true });
    renderAdminFeatured();
}
// ===== BIỂU ĐỒ DOANH THU =====
let revenueChartInstance = null;

// Lấy dữ liệu doanh thu
function getRevenueData(groupBy = "day") {
  const orders = JSON.parse(localStorage.getItem("order")) || [];
  const map = {};

  orders.forEach(o => {
    if (Number(o.trangthai) !== 3) return; // chỉ đơn đã giao

    const date = new Date(o.thoigiandat);
    if (isNaN(date.getTime())) return;

    let key = "";
    if (groupBy === "month") {
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    } else {
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    }

    // chỉ lấy tiền sách
    let money = 0;
    if (o.tongtienhang != null) {
      money = Number(o.tongtienhang) || 0;
    } else {
      const ship = Number(o.phivanchuyen ?? o.phiship ?? 0) || 0;
      money = Math.max(Number(o.tongtien || 0) - ship, 0);
    }

    map[key] = (map[key] || 0) + money;
  });

  const labels = Object.keys(map).sort();
  const data = labels.map(k => map[k]);

  return { labels, data };
}

// Render chart
function renderRevenueChart(groupBy = "day") {
  const ctx = document.getElementById("revenueChart");
  if (!ctx) return;

  const { labels, data } = getRevenueData(groupBy);

  // hủy chart cũ
  if (revenueChartInstance) {
    revenueChartInstance.destroy();
  }

  revenueChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Doanh thu (VND)",
        data,
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) =>
              ctx.raw.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
          }
        }
      },
      scales: {
        y: {
          ticks: {
            callback: value =>
              value.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
          }
        }
      }
    }
  });
}