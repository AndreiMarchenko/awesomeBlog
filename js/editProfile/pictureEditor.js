"use strict"

{
    const profilePictureSelector = ".profile-editor__picture";
    const profilePictureInputSelector = ".profile-editor__picture-input_hidden";
    const profilePictureFormSelector = ".profile-editor__picture-form";

    const profilePicture = document.querySelector(profilePictureSelector);
    const profilePictureInput = document.querySelector(profilePictureInputSelector);
    const profilePictureForm = document.querySelector(profilePictureFormSelector);

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
