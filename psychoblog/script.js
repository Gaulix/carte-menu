let burger = document.getElementById('burger');
const BODY = document.querySelector('body');

burger.addEventListener('click', function() {
    BODY.classList.toggle('active');
});