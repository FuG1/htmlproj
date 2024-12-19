// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = element.style.display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    }
}

// Функция для извлечения параметра utm_term из URL и изменения текста H1
function updateH1FromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector("h1");
    if (utmTerm) {
        h1.textContent = utmTerm;
    }
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0]; // ЧЧ:ММ:СС
    console.log(timeString);
}

// Функция для сброса фона на исходный
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Порядок вызова функций
document.addEventListener("DOMContentLoaded", function () {
    // 1. Вызов showMessage с сообщением "Скрипт загружен!"
    showMessage("Скрипт загружен!");

    // 2. Вызов logCurrentTime для вывода текущего времени
    logCurrentTime();

    // 3. Вызов resetBackgroundColor для сброса фона на белый
    resetBackgroundColor();

    // 4. Вызов changeBackgroundColor с цветом фона
    changeBackgroundColor("lightblue");

    // 5. Вызов toggleVisibility для переключения видимости элемента с классом .content
    toggleVisibility(".content");

    // 6. Вызов updateH1FromURL для изменения текста H1, если параметр utm_term присутствует в URL
    updateH1FromURL();
});
