/* --- CHAMPSMART1 CUSTOM JS (main2.js) --- */
$(function () {
    $("#main-header-placeholder").load("header.html", function () {
        console.log("Header loaded successfully.");
        var path = window.location.pathname.split("/").pop();
        if (path == '' || path == '/') { path = 'index.html'; }
        $('.nav-menu a').each(function () {
            var href = $(this).attr('href');
            if (path === href) { $(this).addClass('active'); } else { $(this).removeClass('active'); }
        });
        const header = document.getElementById("sticky-header");
        if (header) {
            window.onscroll = function () {
                if (window.pageYOffset > 40) { header.classList.add("is-sticky"); } else { header.classList.remove("is-sticky"); }
            };
        }
        $('.mobile-menu-btn').on('click', function () { $('.nav-menu').slideToggle(); });
    });
    $("#main-footer-placeholder").load("footer.html");
    $("#reviews-placeholder").load("reviews.html");
});
/* ==================================================================
   Products Rendering, Filtering & Pagination Logic
   ================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const filterContainer = document.getElementById('category-filters');
    const productGrid = document.getElementById('product-grid');
    const paginationContainer = document.getElementById('pagination-container');
    if (filterContainer && productGrid) {
        let currentPage = 1;
        const itemsPerPage = 20;
        let currentFilteredData = [];
        function shuffleArray(array) {
            let shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
        function renderFilters() {
            let filterHTML = '';
            categories.forEach((cat, index) => {
                const isActive = index === 0 ? 'active' : '';
                filterHTML += `<button class="filter-btn ${isActive}" data-filter="${cat.id}">${cat.name}</button>`;
            });
            filterContainer.innerHTML = filterHTML;
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    buttons.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    loadCategory(e.target.getAttribute('data-filter'));
                });
            });
        }
        function loadCategory(categoryFilter) {
            let filteredData = categoryFilter === 'all' ? productsData : productsData.filter(item => item.category === categoryFilter);
            currentFilteredData = shuffleArray(filteredData);
            currentPage = 1;
            renderPage();
        }
        function renderPage() {
            productGrid.innerHTML = '';
            if (currentFilteredData.length === 0) {
                productGrid.innerHTML = `<div class="col-12 text-center p-t-50 p-b-50"><h4 style="color: #999;">More products coming soon to this category!</h4></div>`;
                if (paginationContainer) paginationContainer.innerHTML = '';
                return;
            }
            const startIndex = (currentPage - 1) * itemsPerPage;
            const pageData = currentFilteredData.slice(startIndex, startIndex + itemsPerPage);
            let htmlContent = '';
            pageData.forEach(product => {
                htmlContent += `
                <div class="col-6 col-md-4 col-lg-3 mb-4">
                    <div class="product-card">
                        <div class="product-image-wrap"><img src="${product.image}" alt="${product.name}"></div>
                        <div class="product-info">
                            <a href="product-detail.html?id=${product.id}" class="product-title" title="${product.name}">${product.name}</a>
                            <p class="product-desc">${product.description}</p>
                            <div class="product-price">£${product.price.toFixed(2)}</div>
                            <div class="btn-group-custom">
                                <button class="btn-cart" onclick="addToCart('${product.id}')"><i class="zmdi zmdi-shopping-cart-plus"></i> Add</button>
                                <button class="btn-buy">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            productGrid.innerHTML = htmlContent;
            renderPaginationButtons();
        }
        function renderPaginationButtons() {
            if (!paginationContainer) return;
            paginationContainer.innerHTML = '';
            const totalPages = Math.ceil(currentFilteredData.length / itemsPerPage);
            if (totalPages <= 1) return;
            let pagHTML = '';
            if (currentPage > 1) { pagHTML += `<button class="pagination-btn" data-page="${currentPage - 1}"><i class="fa fa-angle-left"></i></button>`; }
            for (let i = 1; i <= totalPages; i++) {
                const activeClass = (i === currentPage) ? 'active' : '';
                pagHTML += `<button class="pagination-btn ${activeClass}" data-page="${i}">${i}</button>`;
            }
            if (currentPage < totalPages) { pagHTML += `<button class="pagination-btn" data-page="${currentPage + 1}"><i class="fa fa-angle-right"></i></button>`; }
            paginationContainer.innerHTML = pagHTML;
        }
        if (paginationContainer) {
            paginationContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.pagination-btn');
                if (!btn) return;
                const selectedPage = parseInt(btn.getAttribute('data-page'));
                if (selectedPage && selectedPage !== currentPage) {
                    currentPage = selectedPage;
                    renderPage();
                    document.getElementById('category-filters').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
        renderFilters();
        loadCategory('all');
    }
});
function addToCart(productId) { alert('Product ' + productId + ' added to cart!'); }
function buyNow(productId) { window.location.href = 'product-detail.html?id=' + productId; }
/* --- Cart Logic --- */
$(document).ready(function () {
    // Ye code tabhi chalega agar hum cart.html page par honge
    if ($('#cart-content').length) {
        // Filhal cart empty hai, jab aap data store karna seekhenge to yahan 
        // array se data fetch kar ke table generate karenge.
        console.log("Cart page loaded - currently empty.");
    }

    // Plus/Minus Buttons ka logic (Jo cart mein items honge unke liye)
    $(document).on('click', '.btn-num-product', function () {
        var input = $(this).parent().find('.num-product');
        var val = parseInt(input.val());
        if ($(this).find('i').hasClass('zmdi-plus')) {
            input.val(val + 1);
        } else {
            if (val > 1) { input.val(val - 1); }
        }
    });
});
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = productsData.find(p => p.id === productId);
    if (product) {
        $('#product-detail-view').html(`
            <div class="col-md-6 mb-4"><img src="${product.image}" class="detail-img" alt="${product.name}"></div>
            <div class="col-md-6">
                <h2 class="product-name">${product.name}</h2>
                <div class="product-price">£${product.price.toFixed(2)}</div>
                <p class="product-desc">${product.description}</p>
                <div class="detail-btn-group">
                    <button class="btn btn-outline-dark btn-action" onclick="addToCart('${product.id}')">Add to Cart</button>
                    <button class="btn btn-primary btn-action" style="background:#717fe0;border:none;">Buy Now</button>
                </div>
            </div>
        `);
    } else {
        $('#product-detail-view').html('<div class="col-12 text-center"><h3>Product not found!</h3><a href="product.html" class="btn btn-dark">Back to Shop</a></div>');
    }
});