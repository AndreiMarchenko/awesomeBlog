"use strict"

{
    let profilePicture = document.querySelector(".profile-editor__picture");

    let profilePictureInput = document.querySelector(".profile-editor__picture-input_hidden");
    let profilePictureForm = document.querySelector(".profile-editor__picture-form");

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
