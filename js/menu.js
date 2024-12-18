document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mostrar');
    const mn = document.getElementById('menu');
    
    btn.addEventListener('click', () => {
        // Obtener el estilo de visualización actual del menú
        const displayStyle = window.getComputedStyle(mn).display;
    
        // Alternar entre mostrar y ocultar el menú
        if (displayStyle === 'none') {
            mn.style.display = 'flex';
        } else {
            mn.style.display = 'none';
        }
    });
});


