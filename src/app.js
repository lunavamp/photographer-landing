$(document).ready(function(){
    $('.menu-bar').click(function() {
        $('.menu-bar').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.menu-bar').click(function(event){
        $('.menu-bar, .header-menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});

//header menu navigation
const menuBar = document.querySelector('.menu-bar');
const headerNav = document.querySelector('.header-nav');
const menuLinks = document.querySelectorAll('.menu-item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header-container').offsetHeight;

            if (menuBar.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                 menuBar.classList.remove('_active');
                 headerNav.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

