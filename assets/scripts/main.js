
const arrow = document.querySelector('.see-more');
const btnListLinks = document.querySelector('.btn-list-links');
const listLinks = document.querySelector('.list-links');

btnListLinks.addEventListener('click', (e) => {
    listLinks.classList.toggle('disabled');
})


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    const windowHeight = window.innerHeight;

    const fullHeight = document.documentElement.scrollHeight;
    // Calcula 90% da altura total da página 
    const scrollThreshold = fullHeight * 0.7 - windowHeight;

    if (scrollPosition >= scrollThreshold) {
        arrow.classList.add('hide')
    }
    else {
        arrow.classList.remove('hide')
    }
}); 