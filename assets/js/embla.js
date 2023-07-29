// embla
var emblaNode = document.querySelector('.main-slide__carousel');

var options = {
    loop: true,
    align: "start"
};
let autoplay_delay = {
    delay: 10000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
};
var plugins = [EmblaCarouselAutoplay(autoplay_delay)];
var embla = EmblaCarousel(emblaNode, options, plugins);

const prevButton = document.querySelector('.main-slide__button--prev');
const nextButton = document.querySelector('.main-slide__button--next');

const addClassToCurrentSlide = () => {
    const slideNodes = emblaNode.querySelectorAll('.main-slide__item')
    slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation')
    const oldIndex = embla.previousScrollSnap()
    if (slideNodes[oldIndex]) {
        slideNodes[oldIndex].classList.remove('main-slide__animation')
        slideNodes[embla.selectedScrollSnap()].classList.remove('main-slide__animation-end')
    }
    
    console.log("h")
}

const addClassToCurrentSlideScroll = () => {
    const slideNodes = emblaNode.querySelectorAll('.main-slide__item')
    slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation-end')

    const oldIndex = embla.previousScrollSnap()

    if (slideNodes[oldIndex]) {
        slideNodes[oldIndex].classList.remove('main-slide__animation-end')
    }

    console.log(slideNodes[oldIndex])
}

embla.on('select', addClassToCurrentSlide)
// embla.on('scroll', addClassToCurrentSlide)

embla.on('init', () => {
    const slideNodes = emblaNode.querySelectorAll('.main-slide__item')
    slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation')
    setTimeout(() => {
        slideNodes[embla.selectedScrollSnap()].classList.remove('main-slide__animation')
    }, 1000)
})

prevButton.addEventListener('click', () => {
    const slideNodes = emblaNode.querySelectorAll('.main-slide__item')
    slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation-end')
    setTimeout(() => {
        embla.scrollPrev()
        slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation')
    }, 1000)
})

nextButton.addEventListener('click', () => {
    const slideNodes = emblaNode.querySelectorAll('.main-slide__item')
    slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation-end')
    setTimeout(() => {
        embla.scrollNext()

        slideNodes[embla.selectedScrollSnap()].classList.add('main-slide__animation')
    }, 1000)
})
