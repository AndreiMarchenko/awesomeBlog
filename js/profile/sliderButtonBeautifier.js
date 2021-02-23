"use strict"

{
    const pageReferences = document.querySelectorAll("a");
    pageReferences.forEach((ref) => ref.ondragstart = () => false);

    const SliderLeftButton = document.querySelector(".profile-slider__button-left");
    const SliderRightButton = document.querySelector(".profile-slider__button-right");

    function ButtonBeautifier(btn) {
        this.btn = btn;
        const changeStyle = (backgroundColor, fill, borderColor, transition) => {
            this.btn.style.backgroundColor = backgroundColor;
            this.btn.querySelector("svg").style.fill = fill;
            this.btn.style.borderColor = borderColor;
            this.btn.style.transition = transition;
        };
        this.mouseoverProcessing = () => {
            changeStyle("#308CBF",
                "#fff",
                "grey",
                "background-color .5s ease-out," +
                "border .4s ease-out," +
                "fill .1s ease-out");
        }
        this.mouseoutProcessing = () => {
            changeStyle("#F5F5F5",
                "#308CBF",
                "#308CBF",
                "background-color .5s ease-out," +
                "border .4s ease-out," +
                "fill .1s ease-out");
        };
        this.mousedownProcessing =  () => {
            changeStyle("#F5F5F5",
                "#308CBF",
                "#308CBF",
                "background-color .1s ease-out," +
                "fill .1s ease-out");
            this.btn.removeEventListener("mouseover", this.mouseoverProcessing);
        };
        this.mouseupProcessing = () => {
            changeStyle("#308CBF",
                "#fff",
                "grey",
                "background-color .5s ease-out," +
                "border .4s ease-out," +
                "fill .1s ease-out");
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

    const leftButtonBeautifier = new ButtonBeautifier(SliderLeftButton);
    const rightButtonBeautifier = new ButtonBeautifier(SliderRightButton);

    leftButtonBeautifier.initListeners();
    rightButtonBeautifier.initListeners();
}
