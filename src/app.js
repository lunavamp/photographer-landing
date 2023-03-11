$(document).ready(function() {
    const menuBar = document.querySelector('.menu-bar');
    const headerNav = document.querySelector('.header-nav');
    const menuLinks = Array.from(document.querySelectorAll('.menu-item[data-goto]'));
    const headerContainer = document.querySelector('.header-container');

    $('.menu-bar').click(function() {
        $('.menu-bar').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
        $('.menu-bar, .header-menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - headerContainer.offsetHeight;

                if (menuBar.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    menuBar.classList.toggle('_active');
                    headerNav.classList.toggle('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth',
                });
                e.preventDefault();
            }
        }
    }

    const form = new ItcSubmitForm('form');
});
