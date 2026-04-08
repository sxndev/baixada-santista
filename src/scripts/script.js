const imgSection1 = document.querySelector('.welcome-section img');
const welcomeMessage = document.getElementById('home');
const welcomeParagraph = document.querySelector('.welcome-section p span');

const body = document.querySelector('body');

body.addEventListener('load', () => {
    imgSection1.classList.add('fade-in');
    welcomeMessage.classList.add('fade-in');
    welcomeParagraph.classList.add('fade-in');
});