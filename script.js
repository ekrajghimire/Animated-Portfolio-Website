const toogleIcon = document.querySelector('.toogle-icon');

toogleIcon.addEventListener('click', () => {
    toogleIcon.classList.toogle('bx bx-sun');
    document.body.classList.toogle('dark-mode');
});