const buttonsCitiesList = document.querySelectorAll('.cities-btn');
const citiesList = document.getElementById('cities-list');

buttonsCitiesList.forEach(button => {
    button.addEventListener('click', () => {
        citiesList.classList.toggle('enter')
    })
}); 

