"use strict"

{
    const TEXT_AREA_SELECTOR = ".post-form__textarea";
    const PICTURE_WRAPPER_SELECTOR = ".post-form__picture-wrapper";
    const PICTURE_SELECTOR = ".post-form__picture";
    const PICTURE_INPUT_SELECTOR = ".post-form__picture-input_hidden";

    const PICTURE_WRAPPER_ACTIVE_CLASS = "picture-wrapper_active";

    const textArea = document.querySelector(TEXT_AREA_SELECTOR);
    const pictureWrapper = document.querySelector(PICTURE_WRAPPER_SELECTOR);
    const picture = document.querySelector(PICTURE_SELECTOR);
    const pictureInput = document.querySelector(PICTURE_INPUT_SELECTOR);

    textArea.addEventListener("input", () => {
        localStorage.setItem("postText", textArea.value);
    });

    if (localStorage.getItem("postText")) {
        textArea.insertAdjacentText("afterbegin", localStorage.getItem("postText"));
    }

    pictureInput.addEventListener("change", () => {
        let selectedFile = pictureInput.files[0];
        let reader = new FileReader();

        reader.addEventListener("load", () => {
            localStorage.setItem("postPicture", reader.result);
        });

        reader.readAsDataURL(selectedFile);
    });

    if (localStorage.getItem("postPicture")) {
        pictureWrapper.classList.add(PICTURE_WRAPPER_ACTIVE_CLASS);
        picture.setAttribute("src", localStorage.getItem("postPicture"));
    }

}