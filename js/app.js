// Función para lanzar confeti
function lanzarConfeti(cantidad = 80, duracion = 5000) {
    const body = document.body;

    for (let i = 0; i < cantidad; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";

        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

        body.appendChild(confetti);

        setTimeout(() => confetti.remove(), duracion);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Solo mantener el código necesario para la página actual
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            window.location.href = 'mensajes.html';
        });
    }
    
    // Lanzar confeti al cargar la página
    lanzarConfeti();
});

