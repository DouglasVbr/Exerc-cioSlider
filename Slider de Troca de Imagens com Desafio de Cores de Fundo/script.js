const images = [
    'img/imagemSlider1.png',
    'img/imagemSlider2.png',
    'img/imagemSlider3.png'
];

let currentIndex = 0;
let usedColors = [];
const totalColors = 16777216; // 16^6, número total de cores hexadecimais possíveis

function updateImage() {
    const sliderImage = document.getElementById('imagemSlider1');
    sliderImage.src = images[currentIndex];
    changeBackgroundColor();
}

function changeBackgroundColor() {
    let newColor;
    do {
        newColor = `#${Math.floor(Math.random() * totalColors).toString(16).padStart(6, '0')}`;
    } while (usedColors.includes(newColor) && usedColors.length < totalColors);

    if (usedColors.length >= totalColors) {
        usedColors = [];
    }

    usedColors.push(newColor);
    document.body.style.backgroundColor = newColor;
}

document.getElementById('proximo').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

document.getElementById('anterior').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Inicialize o slider
updateImage();
