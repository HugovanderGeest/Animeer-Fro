// klin k op animeer-knop vlakje animeern 
document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje_naar-rechts')
});

// block laat tijd
setTimeout(()=> {
    document.querySelector('.vlakje').classList.toggle('vlakje_naar-rechts')
}, 1000);

// nav animatie
const menuKnop = document.querySelector('.nav__knop');
const navigatieItems = document.querySelectorAll('.nav__link');
menuKnop.addEventListener('click', () => {
    navigatieItems.forEach((item, index) => {
        setTimeout( () => {
            item.classList.toggle('nav__link--schuif-in');
        } , 30 * index);
    });
});