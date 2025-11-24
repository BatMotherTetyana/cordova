const canvas = document.getElementById('animated-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createGrid(); // Пересоздаём сетку при изменении размера окна
});

let lines = []; // Массив для хранения линий

// Класс для линий
class Line {
    constructor(x, y, orientation) {
        this.x = x;          // Начальная позиция X
        this.y = y;          // Начальная позиция Y
        this.orientation = orientation; // Ориентация линии ('horizontal' или 'vertical')
        this.speed = 0.5;    // Скорость движения линии
    }

    // Обновление позиции линии
    update() {
        if (this.orientation === 'horizontal') {
            this.y += this.speed;
            if (this.y > canvas.height) this.y = -gridSpacing; // Возвращаем наверх
        } else if (this.orientation === 'vertical') {
            this.x += this.speed;
            if (this.x > canvas.width) this.x = -gridSpacing; // Возвращаем влево
        }
    }

    // Рисуем линию
    draw() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 3;

        ctx.beginPath();
        if (this.orientation === 'horizontal') {
            ctx.moveTo(0, this.y);
            ctx.lineTo(canvas.width, this.y);
        } else if (this.orientation === 'vertical') {
            ctx.moveTo(this.x, 0);
            ctx.lineTo(this.x, canvas.height);
        }
        ctx.stroke();
    }
}

let gridSpacing = 80; // Расстояние между линиями

// Создаём линии
function createGrid() {
    lines = []; // Очищаем старый массив линий

     // Горизонтальные линии
    for (let y = 0; y <= canvas.height + gridSpacing; y += gridSpacing) {
        lines.push(new Line(0, y, 'horizontal'));
    }

    // Вертикальные линии
    for (let x = 0; x <= canvas.width; x += gridSpacing) {
        lines.push(new Line(x, 0, 'vertical'));
    }
}

// Анимация
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach(line => {
        line.update();
        line.draw();
    });

    requestAnimationFrame(animate);
}

// Инициализация
createGrid();
animate();

document.querySelectorAll('.expandable').forEach(article => {
    const header = article.querySelector('h2');
    header.addEventListener('click', () => {
        // Добавляем или удаляем класс 'expanded'
        article.classList.toggle('expanded');
    });
});

