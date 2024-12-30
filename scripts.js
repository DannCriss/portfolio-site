// Lista de imagens para o portfólio
const images = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
];
let currentIndex = 0;

// Atualiza a imagem exibida no visualizador
function updateImage() {
    document.getElementById('main-image').src = images[currentIndex];
}

// Navega para a imagem anterior
function previousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
}

// Navega para a próxima imagem
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}
