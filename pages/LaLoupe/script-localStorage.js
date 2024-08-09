let bouton        = document.querySelector('#cookiesAccept button');
let cookiesAccept = document.querySelector('#cookiesAccept');

bouton.addEventListener('click', function() {
    cookiesAccept.classList.add('active');
    localStorage.setItem('cookieAccept','1');
});

let accepter = localStorage.getItem('cookieAccept');

if(accepter == 1) {
    cookiesAccept.classList.add('active');
} else {
    cookiesAccept.classList.remove('active');
}