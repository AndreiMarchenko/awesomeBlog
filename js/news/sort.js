"use strict"

{
    const sortIconWrapper = document.querySelector(".sort-by-date");
    const sortIcon = document.querySelector(".sort-icon");

    sortIconWrapper.addEventListener("click", () => {
        sortIcon.classList.toggle("sort-icon_active");
    });
}
