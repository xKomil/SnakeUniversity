document.addEventListener("DOMContentLoaded", function () {
    var navList = document.querySelector('.navigation ul');
    var menuIcon = document.querySelector('.navigation .menu-icon');
    var navLinks = document.querySelectorAll('.navigation ul li a');
    var logo = document.querySelector('.navigation img.logo');

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.6,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
        // Zapisz stan menu w localStorage
        localStorage.setItem('menuState', navList.classList.contains('show'));
    });

    logo.addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Obsługa kliknięcia w odnośniki wewnątrz menu
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Jeśli szerokość ekranu jest mniejsza lub równa 1000px, schowaj menu
            if (window.innerWidth <= 1000) {
                navList.classList.remove('show');
                // Zapisz stan menu w localStorage
                localStorage.setItem('menuState', navList.classList.contains('show'));
            }

            // Jeśli link posiada atrybut href, przekieruj do nowej strony
            if (link.getAttribute('href')) {
                event.preventDefault();
                var targetPage = link.getAttribute('href');
                setTimeout(function () {
                    window.location.href = targetPage;
                }, 300); // Poczekaj 300ms przed przekierowaniem
            }
        });
    });

    // Wczytaj stan menu z localStorage i dodaj klasę show, jeśli trzeba
    var savedMenuState = localStorage.getItem('menuState');
    if (savedMenuState === 'true') {
        navList.classList.add('show');
    } else {
        navList.classList.remove('show');
    }
});
