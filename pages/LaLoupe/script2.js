let bouton        = document.querySelector('#cookiesAccept button');
let cookiesAccept = document.querySelector('#cookiesAccept');

bouton.addEventListener('click', function() {
    cookiesAccept.classList.add('active');
    Cookies.set('cookieAccept','1', { expires: 365 });
});

let accepter = Cookies.get('cookieAccept');

if(accepter == 1) {
    cookiesAccept.classList.add('active');
} else {
    cookiesAccept.classList.remove('active');
}