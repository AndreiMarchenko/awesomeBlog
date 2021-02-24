"use strict"

{
    const pageReferenceSelector = "a";
    const sliderLeftButtonSelector = ".profile-slider__button-left";
    const sliderRightButtonSelector = ".profile-slider__button-right";
    const svgSelector = "svg";

    const pageReferences = document.querySelectorAll(pageReferenceSelector);


    const sliderLeftButton = document.querySelector(sliderLeftButtonSelector);
    const sliderRightButton = document.querySelector(sliderRightButtonSelector);

    pageReferences.forEach((ref) => ref.ondragstart = () => false);


    function ButtonBeautifier(btn) {
        const btnTransition = "background-color .5s ease-out," +
                              "border .4s ease-out," +
                              "fill .1s ease-out";
        const btnMousedownTransition = "background-color .1s ease-out," +
                                       "fill .1s ease-out";
        const colorGrey = "grey";
        const colorWhite = "#fff";
        const colorLightGrey = "#F5F5F5";
        const colorBlue = "#308CBF";

        this.btn = btn;
        const changeStyle = (backgroundColor, fill, borderColor, transition) => {
            this.btn.style.backgroundColor = backgroundColor;
            this.btn.querySelector(svgSelector).style.fill = fill;
            this.btn.style.borderColor = borderColor;
            this.btn.style.transition = transition;
        };

        this.mouseoverProcessing = () => {
            changeStyle(colorBlue, colorWhite, colorGrey, btnTransition);
        }
        this.mouseoutProcessing = () => {
            changeStyle(colorLightGrey, colorBlue, colorBlue, btnTransition);
        };
        this.mousedownProcessing =  () => {
            changeStyle(colorLightGrey, colorBlue, colorBlue, btnMousedownTransition);
            this.btn.removeEventListener("mouseover", this.mouseoverProcessing);
        };
        this.mouseupProcessing = () => {
            changeStyle(colorBlue, colorWhite, colorGrey, btnTransition);
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
