document.addEventListener("DOMContentLoaded", function () {
    var navList = document.querySelector('.navigation ul');
    var menuIcon = document.querySelector('.navigation .menu-icon');
    var navLinks = document.querySelectorAll('.navigation ul li a');
    var logo = document.querySelector('.navigation img.logo');

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
