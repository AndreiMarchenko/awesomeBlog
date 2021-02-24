"use strict"

{
    const textAreaSelector = ".post-form__textarea";
    const pictureWrapperSelector = ".post-form__picture-wrapper";
    const pictureSelector = ".post-form__picture";
    const pictureInputSelector = ".post-form__picture-input_hidden";

    const pictureWrapperActiveClass = "picture-wrapper_active";

    const textArea = document.querySelector(textAreaSelector);
    const pictureWrapper = document.querySelector(pictureWrapperSelector);
    const picture = document.querySelector(pictureSelector);
    const pictureInput = document.querySelector(pictureInputSelector);

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
        pictureWrapper.classList.add(pictureWrapperActiveClass);
        picture.setAttribute("src", localStorage.getItem("postPicture"));
    }

}