let sliderContainers = [...document.getElementsByClassName('carousel-item-container')];
let nextSlideButton = document.getElementById('change-carousel-items-next-button');
let previousSlideButton = document.getElementById('change-carousel-items-previous-button');
let sliderIndex = 0;


// method for hide slider
const hideSlider = (index) => {
    sliderContainers[index].className = 'center carousel-item-container';
}


// method for show slider
const showSlider = (index) => {
    sliderContainers[index].className = 'center carousel-item-container carousel-item-container-active';
}

// Method for random Number
const returnRandomIndex = (lastIndex) => {
    let randomIndex = Math.floor(Math.random() * sliderContainers.length);
    while (randomIndex == lastIndex) {
        randomIndex = Math.floor(Math.random() * sliderContainers.length);
    }
    return randomIndex
}

// Method for click on next slide button
let showNextSliderAfterClickOnNextButtonTimeOut;
const showNextSlider = () => {
    isMouseOnSliderElement = true;
    clearTimeout(showNextSliderAfterClickOnNextButtonTimeOut);
    hideSlider(sliderIndex);
    sliderIndex++;
    if (sliderIndex === sliderContainers.length) {
        sliderIndex = 0;
    }
    showSlider(sliderIndex);
    showNextSliderAfterClickOnNextButtonTimeOut = setTimeout(() => {
        isMouseOnSliderElement = false;
        automaticSlider();
    }, 5000)
}
nextSlideButton.addEventListener('click', showNextSlider)

// Method for click on previous slider Button
let showNextSliderAfterClickOnPreviousButtonTimeOut;
const hidePreviousSlider = () => {
    isMouseOnSliderElement = true;
    clearTimeout(showNextSliderAfterClickOnPreviousButtonTimeOut);
    hideSlider(sliderIndex);
    sliderIndex--;
    if (sliderIndex === -1) {
        sliderIndex = sliderContainers.length - 1;
    }
    showSlider(sliderIndex);
    showNextSliderAfterClickOnPreviousButtonTimeOut = setTimeout(() => {
        isMouseOnSliderElement = false;
        automaticSlider();
    }, 5000);
}
previousSlideButton.addEventListener('click', hidePreviousSlider);

// Variable with type of boolean that check is mouse on slider element or not
let isMouseOnSliderElement = false;

// Method for automatic slider Show
let automaticTimeOutVariable;
const automaticSlider = () => {
    clearTimeout(automaticTimeOutVariable);
    if (isMouseOnSliderElement) {
        return null;
    }
    hideSlider(sliderIndex);
    sliderIndex = returnRandomIndex(sliderIndex);
    showSlider(sliderIndex);
    return automaticTimeOutVariable = setTimeout(() => { automaticSlider() }, 3000);
}

// method for window load
window.addEventListener("load", () => {
    automaticTimeOutVariable = setTimeout(() => { automaticSlider() }, 3000);
})

// Method for check is mouse over of element
const mouseEnterSlider = () => {
    clearTimeout(automaticTimeOutVariable);
    isMouseOnSliderElement = true;
    return true;
}

// Method for check is mouse over of element
const mouseLeaveSlider = () => {
    isMouseOnSliderElement = false;
    automaticTimeOutVariable = setTimeout(() => { automaticSlider() }, 3000);
}

// Method for check is mouse over of element or not
sliderContainers.forEach((element, index) => {
    element.addEventListener("mouseover", mouseEnterSlider)
    element.addEventListener('mouseout', mouseLeaveSlider)
})
