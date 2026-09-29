document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const warehouses = document.querySelectorAll(".warehouse-section");
    const heroBtn = document.querySelector(".hero-btn");

    // 🌟 初始化：網頁一打開，只允許顯示首頁，其他大圖倉庫一律先收起來
    warehouses.forEach(warehouse => {
        if (warehouse.getAttribute("id") === "home-section") {
            warehouse.classList.add("active");
        } else {
            warehouse.classList.remove("active");
        }
    });

    // 🌟 共用核心切換與滾動功能
    function switchTab(targetId) {
        // A. 切換導覽列按鈕的亮燈狀態
        tabLinks.forEach(item => {
            if (item.getAttribute("data-target") === targetId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // B. 切換倉庫區塊的顯示，並自動平滑滾動過去
        warehouses.forEach(warehouse => {
            if (warehouse.getAttribute("id") === targetId) {
                warehouse.classList.add("active");
                warehouse.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                warehouse.classList.remove("active");
            }
        });
    }

    // 🌟 監聽頂部導覽列按鈕點擊
    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");
            switchTab(targetId);
        });
    });

    // 🌟 監聽主視覺「探索更多」大按鈕點擊
    if (heroBtn) {
        heroBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = heroBtn.getAttribute("data-target");
            switchTab(targetId);
        });
    }
});
