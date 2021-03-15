"use strict"

{
    const PAGE_REFERENCE_SELECTOR = "a";
    const SLIDER_LEFT_BUTTON_SELECTOR = ".profile-slider__button-left";
    const SLIDER_RIGHT_BUTTON_SELECTOR = ".profile-slider__button-right";
    const SVG_SELECTOR = "svg";

    const pageReferences = document.querySelectorAll(PAGE_REFERENCE_SELECTOR);


    const sliderLeftButton = document.querySelector(SLIDER_LEFT_BUTTON_SELECTOR);
    const sliderRightButton = document.querySelector(SLIDER_RIGHT_BUTTON_SELECTOR);

    pageReferences.forEach((ref) => ref.ondragstart = () => false);


    function ButtonBeautifier(btn) {
        const BTN_TRANSITION = "background-color .5s ease-out," +
                              "border .4s ease-out," +
                              "fill .1s ease-out";
        const BTN_MOUSEDOWN_TRANSITION = "background-color .1s ease-out," +
                                       "fill .1s ease-out";
        const COLOR_GREY = "grey";
        const COLOR_WHITE = "#fff";
        const COLOR_LIGHT_GREY = "#F5F5F5";
        const COLOR_BLUE = "#308CBF";

        this.btn = btn;
        const changeStyle = (backgroundColor, fill, borderColor, transition) => {
            this.btn.style.backgroundColor = backgroundColor;
            this.btn.querySelector(SVG_SELECTOR).style.fill = fill;
            this.btn.style.borderColor = borderColor;
            this.btn.style.transition = transition;
        };

        this.mouseoverProcessing = () => {
            changeStyle(COLOR_BLUE, COLOR_WHITE, COLOR_GREY, BTN_TRANSITION);
        }
        this.mouseoutProcessing = () => {
            changeStyle(COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_TRANSITION);
        };
        this.mousedownProcessing =  () => {
            changeStyle(COLOR_LIGHT_GREY, COLOR_BLUE, COLOR_BLUE, BTN_MOUSEDOWN_TRANSITION);
            this.btn.removeEventListener("mouseover", this.mouseoverProcessing);
        };
        this.mouseupProcessing = () => {
            changeStyle(COLOR_BLUE, COLOR_WHITE, COLOR_GREY, BTN_TRANSITION);
            this.btn.addEventListener("mouseover", this.mouseoverProcessing);
        };

        this.initListeners = () => {
            this.btn.addEventListener("mouseover", this.mouseoverProcessing);
            this.btn.addEventListener("mouseout", this.mouseoutProcessing);
            this.btn.addEventListener("mouseup", this.mouseupProcessing);
            this.btn.addEventListener("mousedown", this.mousedownProcessing);
            document.addEventListener("mouseup", () => {
                this.btn.addEventListener("mouseover", this.mouseoverProcessing);
            });
        };
    }

    const leftButtonBeautifier = new ButtonBeautifier(sliderLeftButton);
    const rightButtonBeautifier = new ButtonBeautifier(sliderRightButton);

    leftButtonBeautifier.initListeners();
    rightButtonBeautifier.initListeners();
}
