const hamburger = document.querySelector('.hamburger'); 
const navLinks = document.querySelector('.nav-Links');
const links = document.querySelectorAll('.nav-Links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})