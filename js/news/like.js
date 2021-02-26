"use strict"

{
    const LIKE_ICON_SELECTOR = ".like__icon";
    const LIKE_ICON_ACTIVE_CLASS = "like__icon_active";
    const likeIcons = document.querySelectorAll(LIKE_ICON_SELECTOR);

    likeIcons.forEach((likeIcon) => {
        likeIcon.addEventListener("click", () => {
            likeIcon.classList.toggle(LIKE_ICON_ACTIVE_CLASS);
        });
    });
}
