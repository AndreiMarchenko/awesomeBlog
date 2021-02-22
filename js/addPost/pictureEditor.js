"use strict"

{
    let pictureInput = document.querySelector(".post-form__picture-input_hidden");
    let pictureWrapper = document.querySelector(".post-form__picture-wrapper");
    let picture = document.querySelector(".post-form__picture");
    pictureInput.addEventListener("change", () => {
        if (pictureInput.files[0] !== null) {
            pictureWrapper.classList.add("picture-wrapper_active");
        } else {
            pictureWrapper.classList.remove("picture-wrapper_active");
        }

        let selectedFile = pictureInput.files[0];
        let reader = new FileReader();

        reader.onload = function () {
            picture.setAttribute("src", reader.result);
        };
        reader.readAsDataURL(selectedFile);
    });
}
