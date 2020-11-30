// klin k op animeer-knop vlakje animeern 
document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje_naar-rechts')
})

setTimeout(()=> {
    document.querySelector('.vlakje').classList.toggle('vlakje_naar-rechts')
}, 1000)