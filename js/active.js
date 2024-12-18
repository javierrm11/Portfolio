document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase "fade-in"
    const fadeElements = document.querySelectorAll('.fade-in');

    // Crea el observador con opciones de margen para activar cuando el elemento esté en un 20% visible
    const observerOptions = {
        threshold: 0.2, // El porcentaje de visibilidad necesario para activar el observador
    };

    // Crea el callback para el observador
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase "active" cuando el elemento está en el viewport
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Deja de observar el elemento una vez que aparece
            }
        });
    };

    // Inicializa el Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada elemento con la clase "fade-in"
    fadeElements.forEach(element => observer.observe(element));
    });

