"use strict"

{
    let likeIcons = document.querySelectorAll(".like__icon");

    likeIcons.forEach((likeIcon) => {
        likeIcon.addEventListener("click", () => {
            likeIcon.classList.toggle("like__icon_active");
        });
    });
}
