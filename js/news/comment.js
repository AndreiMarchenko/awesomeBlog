"use strict"

{
    const COMMENT_ICON_SELECTOR = ".comment-icon";
    const NEWS_ITEM_SELECTOR = ".news-item";
    const COMMENT_SELECTOR = ".comment__wrapper";

    const COMMENT_ACTIVE_CLASS = "comment__wrapper_active";

    const commentIcons = document.querySelectorAll(COMMENT_ICON_SELECTOR);

    commentIcons.forEach((commentIcon) => {
        commentIcon.addEventListener("click", () => {
            const newsItem = commentIcon.closest(NEWS_ITEM_SELECTOR);
            const comment = newsItem.querySelector(COMMENT_SELECTOR);

            comment.classList.toggle(COMMENT_ACTIVE_CLASS);
        });
    });
}