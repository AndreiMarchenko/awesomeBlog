"use strict"

{
    const leftButton = document.querySelector(".profile-slider__button-left_mobile");
    const rightButton = document.querySelector(".profile-slider__button-right_mobile");
    const sliderContent = document.querySelector(".profile-slider__content_mobile");

    const sliderContentItems = document.querySelectorAll(".profile-slider__content-item_mobile");
    const contentItemsNumber = sliderContentItems.length;

    const sliderImg = document.querySelector(".profile-slider__content-item-img_mobile");
    const sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);

    const sliderMargin = parseInt(window.getComputedStyle(sliderContentItems[0]).marginRight);

    const sliderContentVisible = document.querySelector(".profile-slider__content_visible_mobile");
    const sliderItemsVisibleNumber = Math.round(
        parseInt(window.getComputedStyle(sliderContentVisible).maxWidth) / sliderImgWidth
    );

    leftButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = Number((sliderContentStyles.marginLeft).replace(/px/, ''));
        if (sliderContentMarginLeft !== 0) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft + sliderImgWidth + sliderMargin) + "px";
        }
    });
    rightButton.addEventListener("click", () => {
        let sliderContentStyles  = window.getComputedStyle(sliderContent);
        let sliderContentMarginLeft = Number((sliderContentStyles.marginLeft).replace(/px/, ''));
        if (sliderContentMarginLeft !== -(contentItemsNumber - sliderItemsVisibleNumber)*(sliderImgWidth + sliderMargin)) {
            sliderContent.style.marginLeft =  (sliderContentMarginLeft - sliderImgWidth - sliderMargin) + "px";
        }
    });
}