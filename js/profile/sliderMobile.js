"use strict"

{
    const LEFT_BUTTON_SELECTOR = ".profile-slider__button-left_mobile";
    const RIGHT_BUTTON_SELECTOR = ".profile-slider__button-right_mobile";
    const SLIDER_CONTENT_SELECTOR = ".profile-slider__content_mobile";
    const SLIDER_CONTENT_ITEMS_SELECTOR = ".profile-slider__content-item_mobile";
    const SLIDER_IMG_SELECTOR = ".profile-slider__content-item-img_mobile";
    const SLIDER_CONTENT_VISIBLE_SELECTOR = ".profile-slider__content_visible_mobile";

    const leftButton = document.querySelector(LEFT_BUTTON_SELECTOR);
    const rightButton = document.querySelector(RIGHT_BUTTON_SELECTOR);
    const sliderContent = document.querySelector(SLIDER_CONTENT_SELECTOR);
    const sliderContentItems = document.querySelectorAll(SLIDER_CONTENT_ITEMS_SELECTOR);
    const sliderImg = document.querySelector(SLIDER_IMG_SELECTOR);
    const sliderContentVisible = document.querySelector(SLIDER_CONTENT_VISIBLE_SELECTOR);

    const contentItemsNumber = sliderContentItems.length;
    const sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);
    const sliderMargin = parseInt(window.getComputedStyle(sliderContentItems[0]).marginRight);
    const sliderContentVisibleMaxWidth = parseInt(window.getComputedStyle(sliderContentVisible).maxWidth);
    const sliderItemsVisibleNumber = Math.round(sliderContentVisibleMaxWidth / sliderImgWidth);

    leftButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
        if (sliderContentMarginLeft !== 0) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
        }
    });
    rightButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = parseInt(sliderContentStyles.marginLeft);
        if (sliderContentMarginLeft !== -(contentItemsNumber - sliderItemsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
        }
    });
}