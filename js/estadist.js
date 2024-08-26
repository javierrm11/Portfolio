document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.estadist-class p');
    const speed = 200; // Ajusta la velocidad

    const animateCount = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10); // Ajusta el tiempo de actualización
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target); // Deja de observar una vez que ha comenzado la animación
            }
        });
    }, { threshold: 0.5 }); // Ajusta el umbral si es necesario

    counters.forEach(counter => {
        observer.observe(counter);
    });
});