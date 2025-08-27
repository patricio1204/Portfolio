// Desplazamiento suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const objetivo = document.querySelector(this.getAttribute('href'));
        if (objetivo) {
            objetivo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Toggle del menú móvil
const menuHamburguesa = document.getElementById('hamburger');
const menuNavegacion = document.getElementById('nav-menu');

menuHamburguesa.addEventListener('click', () => {
    menuNavegacion.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menuHamburguesa.contains(e.target) && !menuNavegacion.contains(e.target)) {
        menuNavegacion.classList.remove('active');
    }
});

// Añadir animación de scroll a las secciones
const opcionesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = 1;
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, opcionesObservador);

// Observar todas las secciones para animación
document.querySelectorAll('.section').forEach(seccion => {
    seccion.style.opacity = 0;
    seccion.style.transform = 'translateY(20px)';
    seccion.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observador.observe(seccion);
});

// Añadir efectos hover a enlaces sociales
document.querySelectorAll('.social-link').forEach(enlace => {
    enlace.addEventListener('mouseenter', () => {
        enlace.style.transform = 'scale(1.1)';
        enlace.style.transition = 'transform 0.3s ease';
    });
    
    enlace.addEventListener('mouseleave', () => {
        enlace.style.transform = 'scale(1)';
    });
});

// Añadir animación de carga
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 0.5s ease';
});

// Inicializar página con opacidad 0 para carga suave
document.body.style.opacity = 0;
