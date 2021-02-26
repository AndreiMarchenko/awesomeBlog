"use strict"

{
    const SORT_ICON_WRAPPER_SELECTOR = ".sort-by-date";
    const SORT_ICON_SELECTOR = ".sort-icon";
    const SORT_ICON_ACTIVE_CLASS = "sort-icon_active";

    const sortIconWrapper = document.querySelector(SORT_ICON_WRAPPER_SELECTOR);
    const sortIcon = document.querySelector(SORT_ICON_SELECTOR);

    sortIconWrapper.addEventListener("click", () => {
        sortIcon.classList.toggle(SORT_ICON_ACTIVE_CLASS);
    });
}
