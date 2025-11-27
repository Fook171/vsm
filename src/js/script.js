 const translations = {
            en: {
                heroTitle: "Welcome to VSM",
                heroDesc: "A multi-industry leader innovating across sectors for a better future.",
                mainAlt: "VSM",
                medicineAlt: "Medicine",
                medicineDesc: "Advancing healthcare solutions worldwide.",
                hightechAlt: "HighTech",
                hightechDesc: "Cutting-edge technology and innovation.",
                tradeAlt: "Trade",
                tradeDesc: "Global trade and logistics expertise.",
                hospitalAlt: "Hospital",
                hospitalDesc: "Providing comprehensive hospital services and patient care worldwide.",
                mineralAlt: "Mineral",
                mineralDesc: "Specializing in mineral exploration, extraction, and processing.",
                agrfoodAlt: "Agr&Food",
                agrfoodDesc: "Innovating in agriculture and food production for sustainable solutions.",
                footer: "&copy; 2025 VSM. All rights reserved."
            },
            vi: {
                heroTitle: "Chào mừng đến với VSM",
                heroDesc: "Lãnh đạo đa ngành hàng đầu đổi mới trên các lĩnh vực cho một tương lai tốt đẹp hơn.",
                mainAlt: "VSM",
                medicineAlt: "Y tế",
                medicineDesc: "Thúc đẩy các giải pháp chăm sóc sức khỏe toàn cầu.",
                hightechAlt: "Công nghệ cao",
                hightechDesc: "Công nghệ tiên tiến và đổi mới.",
                tradeAlt: "Thương mại",
                tradeDesc: "Chuyên môn thương mại và logistics toàn cầu.",
                hospitalAlt: "Bệnh viện",
                hospitalDesc: "Cung cấp dịch vụ bệnh viện toàn diện và chăm sóc bệnh nhân toàn cầu.",
                mineralAlt: "Khoáng sản",
                mineralDesc: "Chuyên về thăm dò, khai thác và chế biến khoáng sản.",
                agrfoodAlt: "Nông nghiệp & Thực phẩm",
                agrfoodDesc: "Đổi mới trong nông nghiệp và sản xuất thực phẩm cho các giải pháp bền vững.",
                footer: "&copy; 2025 VSM. Tất cả quyền được bảo lưu."
            },
            zh: {
                heroTitle: "欢迎来到 VSM",
                heroDesc: "多行业领导者在各个领域创新，为更美好的未来。",
                mainAlt: "VSM",
                medicineAlt: "医学",
                medicineDesc: "推进全球医疗保健解决方案。",
                hightechAlt: "高科技",
                hightechDesc: "前沿技术和创新。",
                tradeAlt: "贸易",
                tradeDesc: "全球贸易和物流专业知识。",
                hospitalAlt: "医院",
                hospitalDesc: "提供全面医院服务和全球患者护理。",
                mineralAlt: "矿物",
                mineralDesc: "专注于矿物勘探、开采和加工。",
                agrfoodAlt: "农业与食品",
                agrfoodDesc: "在农业和食品生产中创新可持续解决方案。",
                footer: "&copy; 2025 VSM。保留所有权利。"
            }
        };

        // Read saved language from localStorage (if any) then wire up the language selector
        const langSelector = document.getElementById('language-selector');
        const savedLang = localStorage.getItem('language') || 'en';
        if (langSelector) {
            // Keep the UI in sync with the saved language
            langSelector.value = savedLang;
            // Use a single event listener (avoid inline handlers)
            langSelector.addEventListener('change', (e) => {
                const lang = e.target.value;
                // Persist selection so reloads remember user's last choice
                localStorage.setItem('language', lang);
                updateLanguage(lang);
            });
        } else {
            console.warn('language-selector element not found; language dropdown will not be interactive.');
        }

        function updateLanguage(lang) {
            console.debug('updateLanguage called with', lang);
            const texts = translations[lang];
            const heroTitleEl = document.getElementById('hero-title');
            if (heroTitleEl) heroTitleEl.textContent = texts.heroTitle;
            const heroDescEl = document.getElementById('hero-desc');
            if (heroDescEl) heroDescEl.textContent = texts.heroDesc;
            document.getElementById('main-logo')?.setAttribute('alt', texts.mainAlt);
            document.getElementById('medicine-logo')?.setAttribute('alt', texts.medicineAlt);
            const medicineDescEl = document.getElementById('medicine-desc');
            if (medicineDescEl) medicineDescEl.textContent = texts.medicineDesc;
            document.getElementById('hightech-logo')?.setAttribute('alt', texts.hightechAlt);
            const hightechDescEl = document.getElementById('hightech-desc');
            if (hightechDescEl) hightechDescEl.textContent = texts.hightechDesc;
            document.getElementById('trade-logo')?.setAttribute('alt', texts.tradeAlt);
            const tradeDescEl = document.getElementById('trade-desc');
            if (tradeDescEl) tradeDescEl.textContent = texts.tradeDesc;
            document.getElementById('hospital-logo')?.setAttribute('alt', texts.hospitalAlt);
            const hospitalDescEl = document.getElementById('hospital-desc');
            if (hospitalDescEl) hospitalDescEl.textContent = texts.hospitalDesc;
            document.getElementById('mineral-logo')?.setAttribute('alt', texts.mineralAlt);
            const mineralDescEl = document.getElementById('mineral-desc');
            if (mineralDescEl) mineralDescEl.textContent = texts.mineralDesc;
            document.getElementById('agrfood-logo')?.setAttribute('alt', texts.agrfoodAlt);
            const agrfoodDescEl = document.getElementById('agrfood-desc');
            if (agrfoodDescEl) agrfoodDescEl.textContent = texts.agrfoodDesc;
            const footerTextEl = document.getElementById('footer-text');
            if (footerTextEl) footerTextEl.innerHTML = texts.footer;
            document.documentElement.lang = lang;
            // Also sync select value and persist the selected language
            const langSelEl = document.getElementById('language-selector');
            if (langSelEl) langSelEl.value = lang;
            localStorage.setItem('language', lang);
        }

        // Default to saved language (or English if none)
        updateLanguage(savedLang);