"use strict"

{
    let textArea = document.querySelector(".post-form__textarea");
    textArea.addEventListener("input", () => {
        localStorage.setItem("postText", textArea.value);
    });

    if (localStorage.getItem("postText")) {
        textArea.insertAdjacentText("afterbegin", localStorage.getItem("postText"));
    }

    let pictureWrapper = document.querySelector(".post-form__picture-wrapper");
    let picture = document.querySelector(".post-form__picture");
    let pictureInput = document.querySelector(".post-form__picture-input_hidden");

    pictureInput.addEventListener("change", () => {
        let selectedFile = pictureInput.files[0];
        let reader = new FileReader();

        reader.addEventListener("load", () => {
            localStorage.setItem("postPicture", reader.result);
        });

        reader.readAsDataURL(selectedFile);
    });

    if (localStorage.getItem("postPicture")) {
        pictureWrapper.classList.add("picture-wrapper_active");
        picture.setAttribute("src", localStorage.getItem("postPicture"));
    }

}