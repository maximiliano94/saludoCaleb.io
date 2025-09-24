document.addEventListener('DOMContentLoaded', function() {
    // Array con las rutas de las imágenes
    const imagenes = [
        'img/foto1.jpg',
        'img/foto2.jpg',
        'img/foto3.jpg',
        'img/foto4.jpg',
        'img/foto5.jpg',
        'img/foto6.jpg'
        // Agrega más imágenes según necesites
    ];

    const slidesContainer = document.querySelector('.slides');
    const indicatorsContainer = document.querySelector('.indicators');
    let currentSlide = 0;

    // Cargar imágenes
    imagenes.forEach((img, index) => {
        const imagen = document.createElement('img');
        imagen.src = img;
        imagen.alt = `Foto ${index + 1}`;
        if (index === 0) imagen.classList.add('active');
        slidesContainer.appendChild(imagen);

        // Crear indicadores
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    // Funciones de navegación
    function goToSlide(n) {
        const slides = document.querySelectorAll('.slides img');
        const dots = document.querySelectorAll('.dot');
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = n;
        
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Event listeners
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto avance cada 5 segundos
    setInterval(nextSlide, 5000);
});
