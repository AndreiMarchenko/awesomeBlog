"use strict"

{
    const likeIconSelector = ".like__icon";
    const likeIconActiveClass = "like__icon_active";
    const likeIcons = document.querySelectorAll(likeIconSelector);

    likeIcons.forEach((likeIcon) => {
        likeIcon.addEventListener("click", () => {
            likeIcon.classList.toggle(likeIconActiveClass);
        });
    });
}
