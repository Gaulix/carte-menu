const nav = document.querySelector('nav');
const H   = nav.offsetTop;


window.addEventListener('scroll', function() {
    if(window.scrollY >= H) {
        nav.classList.add('fixe');
        nav.classList.add('animate__slideInDown');
        nav.classList.remove('animate__slideInUp');
    } else {
        nav.classList.remove('fixe');
        nav.classList.remove('animate__slideInDown');
        nav.classList.add('animate__slideInUp');
    }
});


let burger = document.getElementById('burger');
let menu   = document.getElementById('menu');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});