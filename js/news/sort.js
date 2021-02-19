"use strict"

let sortIconWrapper = document.querySelector(".sort-by-date");
let sortIcon = document.querySelector(".sort-icon");

sortIconWrapper.addEventListener("click", () => {
    sortIcon.classList.toggle("sort-icon_active");
});