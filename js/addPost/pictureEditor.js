"use strict"

{
    const pictureInputSelector = ".post-form__picture-input_hidden";
    const pictureWrapperSelector = ".post-form__picture-wrapper";
    const pictureSelector = ".post-form__picture";

    const pictureWrapperActiveClass = "picture-wrapper_active";

    const pictureInput = document.querySelector(pictureInputSelector);
    const pictureWrapper = document.querySelector(pictureWrapperSelector);
    const picture = document.querySelector(pictureSelector);

    pictureInput.addEventListener("change", () => {
        if (pictureInput.files[0] !== null) {
            pictureWrapper.classList.add(pictureWrapperActiveClass);
        } else {
            pictureWrapper.classList.remove(pictureWrapperActiveClass);
        }

        let selectedFile = pictureInput.files[0];
        let reader = new FileReader();

        reader.addEventListener("load", () => {
            picture.setAttribute("src", reader.result);
        });

        reader.readAsDataURL(selectedFile);
    });
}
