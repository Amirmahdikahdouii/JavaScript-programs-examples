let sliderContainers = [...document.getElementsByClassName("slider-item")];
let nextSliderButton = document.getElementById("change-slider-items-next-button");
let previousSliderButton = document.getElementById("change-slider-items-previous-button");
let sliderActiveIndex = 0;

// Method for hide Slider
const hideSlide = (index) => {
    sliderContainers[index].className = 'slider-item';
}

// Method for hide Slider
const showSlide = (index) => {
    sliderContainers[index].className = 'slider-item slider-item-active';
}

// Next Slider Show Method
const showNextSlider = () => {
    hideSlide(sliderActiveIndex);
    sliderActiveIndex++;
    if (sliderActiveIndex === sliderContainers.length) {
        sliderActiveIndex = 0;
    }
    showSlide(sliderActiveIndex);
}
nextSliderButton.addEventListener('click', showNextSlider);

// Previous Slider Show Method
const showPreviousSlider = () => {
    hideSlide(sliderActiveIndex);
    if (sliderActiveIndex === 0) {
        sliderActiveIndex = sliderContainers.length;
    }
    sliderActiveIndex--;
    showSlide(sliderActiveIndex);
    // This Section is for better show when user click on show previous slide button
    // stopAutomaticSlider = true;
    // automaticSliderTimeOut = setTimeout(() => {
    //     stopAutomaticSlider = false;
    //     automaticSlider()
    // }, 2000);
}
previousSliderButton.addEventListener('click', showPreviousSlider);

// Method for automatic Slide Show
let automaticSliderTimeOut;
let stopAutomaticSlider = false;
const automaticSlider = () => {
    clearTimeout(automaticSliderTimeOut)
    if (stopAutomaticSlider) {
        return null;
    }
    showNextSlider();
    return automaticSliderTimeOut = setTimeout(() => {
        automaticSlider()
    }, 2000);
}

// Method For Handle Window load and show first Slider
window.addEventListener("load", () => {
    automaticSliderTimeOut = setTimeout(() => {
        automaticSlider()
    }, 2000)
});

sliderContainers.forEach((slideItem, index) => {
    slideItem.addEventListener('mouseenter', () => {
        stopAutomaticSlider = true;
    })
    slideItem.addEventListener('mouseleave', () => {
        stopAutomaticSlider = false;
        automaticSliderTimeOut = setTimeout(() => {
            automaticSlider();
        }, 3000)
    })
})