"use strict"

{
    const PICTURE_INPUT_SELECTOR = ".post-form__picture-input_hidden";
    const PICTURE_WRAPPER_SELECTOR = ".post-form__picture-wrapper";
    const PICTURE_SELECTOR = ".post-form__picture";

    const PICTURE_WRAPPER_ACTIVE_CLASS = "picture-wrapper_active";

    const pictureInput = document.querySelector(PICTURE_INPUT_SELECTOR);
    const pictureWrapper = document.querySelector(PICTURE_WRAPPER_SELECTOR);
    const picture = document.querySelector(PICTURE_SELECTOR);

    pictureInput.addEventListener("change", () => {
        if (pictureInput.files[0] !== null) {
            pictureWrapper.classList.add(PICTURE_WRAPPER_ACTIVE_CLASS);
        } else {
            pictureWrapper.classList.remove(PICTURE_WRAPPER_ACTIVE_CLASS);
        }

        let selectedFile = pictureInput.files[0];
        let reader = new FileReader();

        reader.addEventListener("load", () => {
            picture.setAttribute("src", reader.result);
        });

        reader.readAsDataURL(selectedFile);
    });
}
