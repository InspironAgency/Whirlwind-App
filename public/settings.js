
export function initSettings() {
    document.addEventListener("DOMContentLoaded", function () {

        function changeTab(option) {
            document.title = option.title;
            const favicon = document.getElementById("favicon");
            favicon.href = option.favicon;
            window.localStorage.setItem("tab_cloak", JSON.stringify(option));
        }

        function changeColor(colorCode) {
            document.body.style.background = colorCode;
            window.localStorage.setItem("theme", JSON.stringify(colorCode));
        }

        function changeSearchEngine(template) {
            let x = document.getElementById("uv-search-engine");
            if (x ?? false) {
                x.value = template;
            }
            window.localStorage.setItem("search_engine", JSON.stringify(template));
        }

        const tabButton = document.getElementById("tabButton");
        const themeButton = document.getElementById("themeButton");
        const searchEngineButton = document.getElementById("searchEngineButton");
        const dropdownTabContent = document.getElementById("dropdownTabContent");
        const dropdownColorContent = document.getElementById("dropdownColorContent");
        const dropdownSearchContent = document.getElementById("dropdownSearchContent");

        const tabOptions = [
            { title: "Google Classroom", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
            { title: "Google Drive", favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" },
            { title: "Google Docs", favicon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico" },
            { title: "Sparx Maths", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sparxmaths.com&size=32" },
            { title: "Google", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.google.com/favicon.ico&size=32" },
            { title: "Desmos", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://desmos.com&size=32" },
            { title: "Desmos | Graphing Calculator", favicon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://desmos.com/calculator&size=32"},
            { title: "Whirlwind", favicon: "/favicon.ico" }
        ];
        
        const colorOptions = [
            { title: "Original", colorCode: "#102a43" },
            { title: "Frappé", colorCode: "#303446" },
            { title: "Macchiato", colorCode: "#24273a" },
            { title: "Mocha", colorCode: "#1e1e2e" },
            { title: "Red", colorCode: "#d46a6c" },
            { title: "Yellow", colorCode: "#e9c377" },
            { title: "Green", colorCode: "#89a35f" },
            { title: "Purple", colorCode: "#755f91" },
            { title: "Pink", colorCode: "#a64d99" },
            { title: "OLED", colorCode: "#000000" },
            { title: "Dark", colorCode: "#31363F" },
        ];

        const searchEngineOptions = [
            { title: "Google", template: "https://www.google.com/search?q=%s" },
            { title: "DuckDuckGo", template: "https://duckduckgo.com/?q=%s"},
            { title: "Bing", template: "https://www.bing.com/search?q=%s" },
            { title: "Yahoo", template: "https://search.yahoo.com/search?p=%s" },

        ]

        if (window.localStorage.getItem("tab_cloak") ?? false) {
            changeTab(JSON.parse(window.localStorage.getItem("tab_cloak")));
        }

        if (window.localStorage.getItem("theme") ?? false) {
            changeColor(JSON.parse(window.localStorage.getItem("theme")));
        }

        if (window.localStorage.getItem("search_engine") ?? false) {
            changeSearchEngine(JSON.parse(window.localStorage.getItem("search_engine")));
        }

        // dropdown dynamic thing
        tabOptions.forEach(option => {
            const anchor = document.createElement("a");
            anchor.href = "#";
            let img = document.createElement("img");
            img.src = option.favicon;
            img.alt = option.title;
            img.classList.add("tab-cloak-icon");
            anchor.appendChild(img);
            anchor.classList.add("dropdown-item");
            anchor.insertAdjacentText("beforeend", option.title);
            anchor.addEventListener("click", function () {
                changeTab(option);
            });
            dropdownTabContent.appendChild(anchor);
        });

        colorOptions.forEach(option => {
            const anchor = document.createElement("a");
            anchor.href = "#";
            anchor.insertAdjacentText("afterbegin", option.title);
            anchor.classList.add("dropdown-item");
            anchor.addEventListener("click", function () {
                changeColor(option.colorCode);
            });
            dropdownColorContent.appendChild(anchor);
        });

        searchEngineOptions.forEach(option => {
            const anchor = document.createElement("a");
            anchor.href = "#";
            anchor.insertAdjacentText("afterbegin", option.title);
            anchor.classList.add("dropdown-item");
            anchor.addEventListener("click", function () {
                changeSearchEngine(option.template);
            });
            dropdownSearchContent.appendChild(anchor);
        })

        // toggle dropdown
        tabButton.addEventListener("click", function () {
            dropdownTabContent.style.display = dropdownTabContent.style.display === "block" ? "none" : "block";
        });

        themeButton.addEventListener("click", function () {
            dropdownColorContent.style.display = dropdownColorContent.style.display === "block" ? "none" : "block";
        });

        searchEngineButton.addEventListener("click", function () {
            dropdownSearchContent.style.display = dropdownSearchContent.style.display === "block" ? "none" : "block";
        })
        
    });
}

