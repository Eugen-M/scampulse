// embla
let emblaNodes = document.querySelectorAll(".slider-reports__embla");

emblaNodes.forEach(function (emblaNode, i) {
    const options = { loop: true, align: "start", slidesToScroll: 1 };
    const viewportNode = emblaNode.querySelector('.slider-reports__embla-viewport');
    let prevBtn = emblaNode.querySelector('.slider-reports__button--prev');
    let nextBtn = emblaNode.querySelector('.slider-reports__button--next');
    const emblaApi = EmblaCarousel(viewportNode, options);

    const addTogglePrevNextBtnsActive = (emblaApi, prevBtn, nextBtn) => {
        const togglePrevNextBtnsState = () => {
            if (emblaApi.canScrollPrev()) prevBtn.removeAttribute('disabled')
            else prevBtn.setAttribute('disabled', 'disabled')

            if (emblaApi.canScrollNext()) nextBtn.removeAttribute('disabled')
            else nextBtn.setAttribute('disabled', 'disabled')
        }

        emblaApi
            .on('select', togglePrevNextBtnsState)
            .on('init', togglePrevNextBtnsState)
            .on('reInit', togglePrevNextBtnsState)

        return () => {
            prevBtn.removeAttribute('disabled')
            nextBtn.removeAttribute('disabled')
        }
    }

    const addPrevNextBtnsClickHandlers = (emblaApi, prevBtn, nextBtn) => {
        const scrollPrev = () => emblaApi.scrollPrev()
        const scrollNext = () => emblaApi.scrollNext()
        prevBtn.addEventListener('click', scrollPrev, false)
        nextBtn.addEventListener('click', scrollNext, false)

        const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(
            emblaApi,
            prevBtn,
            nextBtn
        )

        return () => {
            removeTogglePrevNextBtnsActive()
            prevBtn.removeEventListener('click', scrollPrev, false)
            nextBtn.removeEventListener('click', scrollNext, false)
        }
    }

    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
        emblaApi,
        prevBtn,
        nextBtn
    )
    
    emblaApi
        .on('destroy', removePrevNextBtnsClickHandlers)
});

// navi
let naviBtn = document.querySelector('.header__btn--navi');
let mobileMenu = document.querySelector('.mobile-menu');
let closeBtn = document.querySelector('.mobile-menu__close');
let bodyTag = document.querySelector('body');

function clickBtnNavi() {
    mobileMenu.classList.toggle("js-mobile-menu--opened");
    bodyTag.classList.toggle("js-body--overflow");
}

naviBtn.addEventListener('click', clickBtnNavi);
closeBtn.addEventListener('click', clickBtnNavi);

// categories__item
const acc = document.getElementsByClassName("categories__item-header");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.parentElement.classList.toggle("js-categories-item--opened");
    });
}

// user block for header
let userBtnArrow = document.querySelector('.header__user-arrow');
let userBlock = document.querySelector('.header__user');

function clickUserBtn() {
    userBlock.classList.toggle("js-header__user--opened");
}

if(userBtnArrow) {
    userBtnArrow.addEventListener('click', clickUserBtn);
}




