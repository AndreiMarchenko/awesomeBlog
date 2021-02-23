"use strict"

{
    const commentIcons = document.querySelectorAll(".comment-icon");

    commentIcons.forEach((commentIcon) => {
        commentIcon.addEventListener("click", () => {
            const newsItem = commentIcon.closest(".news-item");
            const comment = newsItem.querySelector(".comment__wrapper");

            comment.classList.toggle("comment__wrapper_active");
        });
    });
}