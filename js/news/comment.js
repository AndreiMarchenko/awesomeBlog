"use strict"

{
    const commentIconSelector = ".comment-icon";
    const newsItemSelector = ".news-item";
    const commentSelector = ".comment__wrapper";

    const commentActiveClass = "comment__wrapper_active";

    const commentIcons = document.querySelectorAll(commentIconSelector);

    commentIcons.forEach((commentIcon) => {
        commentIcon.addEventListener("click", () => {
            const newsItem = commentIcon.closest(newsItemSelector);
            const comment = newsItem.querySelector(commentSelector);

            comment.classList.toggle(commentActiveClass);
        });
    });
}