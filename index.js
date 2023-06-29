// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
let lastScroll = 0
// Créer un événément au scroll
const scroller = window.addEventListener('scroll', () => {
    // Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte
    if (window.scrollY < lastScroll) {
        navbar.style.top = 0
    } else {
        navbar.style.top = '-60px'
    }
    // Connaitre niveau de scroll (window.scrollY)
    lastScroll = window.scrollY
})








