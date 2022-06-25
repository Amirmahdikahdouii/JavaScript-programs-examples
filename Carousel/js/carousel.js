let carouselContainers = [...document.getElementsByClassName("carousel-item")];
let nextButtons = [...document.getElementsByClassName("change-carousel-items-next-button")];
let previousButtons = [...document.getElementsByClassName("change-carousel-items-previous-button")];
nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index == -1) {
            index = nextButtons.length - 1;
        }
        carouselContainers[index].style.animationName = 'displayOffCarousel';
        carouselContainers[index].style.animationDuration = "1s";
        carouselContainers[index].style.animationFillMode = "forwards";
        if (index + 1 === nextButtons.length) {
            setTimeout(() => { carouselContainers[nextButtons.length - 1].className = 'center carousel-item'; }, 900);
            index = -1;
        } else {
            setTimeout(() => { carouselContainers[index].className = 'center carousel-item'; }, 900);
        }
        carouselContainers[index + 1].style.animationName = 'displayOnCarousel';
        carouselContainers[index + 1].style.animationDuration = "1s";
        carouselContainers[index + 1].style.animationFillMode = "forwards";
        setTimeout(() => { carouselContainers[index + 1].className = 'center carousel-item carousel-item-active'; }, 900);
    })
});

previousButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index == previousButtons.length) {
            index = 0;
        }
        carouselContainers[index].style.animationName = 'displayOffCarousel';
        carouselContainers[index].style.animationDuration = "1s";
        carouselContainers[index].style.animationFillMode = "forwards";
        if (index == 0) {
            setTimeout(() => { carouselContainers[0].className = 'center carousel-item'; }, 900);
            index = previousButtons.length;
        } else {
            setTimeout(() => { carouselContainers[index].className = 'center carousel-item'; }, 900);
        }
        carouselContainers[index - 1].style.animationName = 'displayOnCarousel';
        carouselContainers[index - 1].style.animationDuration = "1s";
        carouselContainers[index - 1].style.animationFillMode = "forwards";
        setTimeout(() => { carouselContainers[index - 1].className = 'center carousel-item carousel-item-active'; }, 900);
    })
});