"use strict"

{
    const sortIconWrapperSelector = ".sort-by-date";
    const sortIconSelector = ".sort-icon";
    const sortIconActiveClass = "sort-icon_active";

    const sortIconWrapper = document.querySelector(sortIconWrapperSelector);
    const sortIcon = document.querySelector(sortIconSelector);

    sortIconWrapper.addEventListener("click", () => {
        sortIcon.classList.toggle(sortIconActiveClass);
    });
}
