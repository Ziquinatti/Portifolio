window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    const button = document.querySelector('.continue');
    const homeSection = document.querySelector('#home');
    const homeHeight = homeSection.offsetHeight;

    if (window.scrollY > (homeHeight/2)) {
        navbar.classList.add('visible');
        button.classList.add('hide');
    } else {
        navbar.classList.remove('visible');
        button.classList.remove('hide');
    }
});