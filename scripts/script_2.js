function toggleForm(event) {
    event.preventDefault();

    const title = document.getElementById("form-title");
    const form = document.getElementById("authForm");
    const toggleText = document.getElementById("toggleText");

    if (title.textContent === "Вход") {
        // Переключаем на регистрацию
        title.textContent = "Регистрация";
        form.innerHTML = `
            <input type="text" placeholder="Имя" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Пароль" required />
            <button type="submit">Зарегистрироваться</button>
        `;
        toggleText.innerHTML = `Уже есть аккаунт? <a href="#" onclick="toggleForm(event)">Войти</a>`;
    } else {
        // Переключаем на вход
        title.textContent = "Вход";
        form.innerHTML = `
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Пароль" required />
            <button type="submit">Войти</button>
        `;
        toggleText.innerHTML = `Нет аккаунта? <a href="#" onclick="toggleForm(event)">Зарегистрироваться</a>`;
    }
}

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
