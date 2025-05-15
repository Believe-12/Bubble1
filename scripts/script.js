const menuBtn = document.getElementById('menu-btn');
const catalog = document.getElementById('catalog');

let timeoutId;

menuBtn.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    catalog.style.display = 'block';
});

menuBtn.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        catalog.style.display = 'none';
    }, 200);
});

catalog.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
});

catalog.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        catalog.style.display = 'none';
    }, 200);
});


const themeIcon = document.getElementById('theme-icon');
const toggleBtn = document.getElementById('theme-toggle');

// Функция установки темы
function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.src = 'images/sun.png';
            themeIcon.alt = 'Светлая тема';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.src = 'images/moon.png';
            themeIcon.alt = 'Тёмная тема';
        }
        localStorage.setItem('theme', 'light');
    }
}

// Загружаем сохранённую тему при открытии страницы
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
});

// Обработчик переключения
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-theme');
        setTheme(isDark);
    });
}

const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

