"use strict"

{
    let leftButton = document.querySelector(".profile-slider__button-left_mobile");
    let rightButton = document.querySelector(".profile-slider__button-right_mobile");
    let sliderContent = document.querySelector(".profile-slider__content_mobile");

    let sliderContentItems = document.querySelectorAll(".profile-slider__content-item_mobile");
    let contentItemsNumber = sliderContentItems.length;

    let sliderImg = document.querySelector(".profile-slider__content-item-img_mobile");
    let sliderImgWidth = Number(window.getComputedStyle(sliderImg).width.replace(/px/, ''));

    let sliderMargin = Number(window.getComputedStyle(sliderContentItems[0]).marginRight.replace(/px/, ''));

    let sliderContentVisible = document.querySelector(".profile-slider__content_visible_mobile");
    let sliderItemsVisibleNumber = Math.round(
        Number(window.getComputedStyle(sliderContentVisible).maxWidth.replace(/px/, '')) / sliderImgWidth
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