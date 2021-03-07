"use strict"

{
    const PROFILE_PICTURE_SELECTOR = ".profile-editor__picture";
    const PROFILE_PICTURE_INPUT_SELECTOR = ".profile-editor__picture-input_hidden";
    const PROFILE_PICTURE_FORM_SELECTOR = ".profile-editor__picture-form";

    const profilePicture = document.querySelector(PROFILE_PICTURE_SELECTOR);
    const profilePictureInput = document.querySelector(PROFILE_PICTURE_INPUT_SELECTOR);
    const profilePictureForm = document.querySelector(PROFILE_PICTURE_FORM_SELECTOR);

    profilePictureInput.addEventListener("change", () => {
        let picture = profilePictureInput.files[0];
        let reader = new FileReader();

        reader.readAsDataURL(picture);
        reader.addEventListener("load", () => {
            profilePicture.setAttribute("src", reader.result);
        });

        profilePictureForm.submit();
    });
}
