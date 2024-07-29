export function initPopup() {
    document.getElementById('openPopup').addEventListener('click', function () {
        document.getElementById('popup').classList.add('show');
    });

    document.getElementById('closePopup').addEventListener('click', function () {
        const popup = document.getElementById('popup');
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.classList.remove('show');
            popup.style.opacity = '';
        }, 300);
    });
}

