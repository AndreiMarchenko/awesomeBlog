"use strict"

{
    let leftButton = document.querySelector(".profile-slider__button-left_mobile");
    let rightButton = document.querySelector(".profile-slider__button-right_mobile");
    let sliderContent = document.querySelector(".profile-slider__content_mobile");

    let sliderContentItems = document.querySelectorAll(".profile-slider__content-item_mobile");
    let contentItemsNumber = sliderContentItems.length;

    let sliderImg = document.querySelector(".profile-slider__content-item-img_mobile");
    let sliderImgWidth = parseInt(window.getComputedStyle(sliderImg).width);

    let sliderMargin = parseInt(window.getComputedStyle(sliderContentItems[0]).marginRight);

    let sliderContentVisible = document.querySelector(".profile-slider__content_visible_mobile");
    let sliderItemsVisibleNumber = Math.round(
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