
export function initSettings() {
    document.addEventListener("DOMContentLoaded", function () {
        const tabButton = document.getElementById("tabButton");
        const themeButton = document.getElementById("themeButton");
        const dropdownContent2 = document.getElementById("dropdownContent2");
        const dropdownColorContent = document.getElementById("dropdownColorContent");

        const tabOptions = [
            { title: "Google Classroom", favicon: "https://ssl.gstatic.com/classroom/favicon.png" },
            { title: "Google Drive", favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png" },
            { title: "Sparx Maths", favicon: "https://sparxmaths.com/favicon.ico" },
            { title: "Google", favicon: "https://www.google.com/favicon.ico" },
            { title: "Desmos", favicon: "https://play-lh.googleusercontent.com/AcmdHoyslp6AnrSMvDMg1o3tmhIuy0wbd8mN-usvDzhO4hiTHMLIavweYOPKmlpglrY" }
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
                changeTab(option.title, option.favicon);
            });
            dropdownContent2.appendChild(anchor);
        });

        // toggle dropdown
        tabButton.addEventListener("click", function () {
            dropdownContent2.style.display = dropdownContent2.style.display === "block" ? "none" : "block";
        });

        themeButton.addEventListener("click", function () {
            dropdownColorContent.style.display = dropdownColorContent.style.display === "block" ? "none" : "block";
        });

        function changeTab(newTitle, newFavicon) {
            document.title = newTitle;
            const favicon = document.getElementById("favicon");
            favicon.href = newFavicon;
        }

        function changeColor(newTitle, colorCode) {
            document.body.style.background = colorCode;
        }

        colorOptions.forEach(option => {
            const anchor = document.createElement("a");
            anchor.href = "#";
            anchor.insertAdjacentText("afterbegin", option.title);
            anchor.classList.add("dropdown-item");
            anchor.addEventListener("click", function () {
                changeColor(option.title, option.colorCode);
            });
            dropdownColorContent.appendChild(anchor);

        });
    });
}

