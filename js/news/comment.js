"use strict"

{
    let commentIcons = document.querySelectorAll(".comment-icon");

    commentIcons.forEach((commentIcon) => {
        commentIcon.addEventListener("click", () => {
            let newsItem = commentIcon.closest(".news-item");
            let comment = newsItem.querySelector(".comment__wrapper");

            comment.classList.toggle("comment__wrapper_active");
        });
    });
}