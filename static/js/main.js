document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    handleResponsiveMenu();
});

function initializeNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

function handleResponsiveMenu() {
    const nav = document.querySelector('nav.container');
    const navLinks = document.querySelector('.nav-links');
    
    // Crear botón de menú
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.setAttribute('aria-label', 'Menú');
    
    // Insertar botón antes de los enlaces
    nav.insertBefore(menuButton, navLinks);
    
    // Manejar click en el botón
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        const isExpanded = navLinks.classList.contains('show');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}
