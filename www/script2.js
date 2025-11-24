// Получаем элементы
const stylePanelBtn = document.getElementById("style-panel-btn"); // Кнопка вызова панели
const stylePanel = document.getElementById("style-panel"); // Сама панельconst stylePanel = document.getElementById('style-panel');
const bgColorPicker = document.getElementById('background-color-picker');
const bgUrlInput = document.getElementById('background-url');
const applyBgUrlBtn = document.getElementById('apply-background-url');
const textColorPicker = document.getElementById('text-color-picker');
const fontSizeSlider = document.getElementById('font-size-slider');
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const applyBtn = document.getElementById('apply-btn');

const resetBgColorBtn = document.getElementById('reset-bg-color');
const resetBgImageBtn = document.getElementById('reset-bg-image');
const resetTextColorBtn = document.getElementById('reset-text-color');
const resetFontSizeBtn = document.getElementById('reset-font-size');

const defaultStyles = {
  backgroundColor: '#675aaa',
  backgroundImage: 'none',
  color: '#2e226b',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStyle: 'normal'
};

// Функция для показа/скрытия панели
stylePanelBtn.addEventListener("click", () => {
  stylePanel.style.display = stylePanel.style.display === "block" ? "none" : "block";
});

// Реальное время: фон
bgColorPicker.addEventListener('input', () => {
  document.body.style.backgroundColor = bgColorPicker.value;
});

// Реальное время: цвет текста
textColorPicker.addEventListener('input', () => {
  document.body.style.color = textColorPicker.value;
});

// Реальное время: размер шрифта
fontSizeSlider.addEventListener('input', () => {
  document.body.style.fontSize = `${fontSizeSlider.value}px`;
});

// Установка фонового изображения
applyBgUrlBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = `url('${bgUrlInput.value}')`;
});

// Жирный текст
boldBtn.addEventListener('click', () => {
  document.body.style.fontWeight =
    document.body.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Курсивный текст
italicBtn.addEventListener('click', () => {
  document.body.style.fontStyle =
    document.body.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Кнопка «Застосувати» закрывает панель
applyBtn.addEventListener('click', () => {
  stylePanel.style.display = 'none';
});

// Кнопки отмены
resetBgColorBtn.addEventListener('click', () => {
  bgColorPicker.value = defaultStyles.backgroundColor;
  document.body.style.backgroundColor = defaultStyles.backgroundColor;
});

resetBgImageBtn.addEventListener('click', () => {
  bgUrlInput.value = '';
  document.body.style.backgroundImage = defaultStyles.backgroundImage;
});

resetTextColorBtn.addEventListener('click', () => {
  textColorPicker.value = defaultStyles.color;
  document.body.style.color = defaultStyles.color;
});

resetFontSizeBtn.addEventListener('click', () => {
  fontSizeSlider.value = parseInt(defaultStyles.fontSize, 10);
  document.body.style.fontSize = defaultStyles.fontSize;
});
