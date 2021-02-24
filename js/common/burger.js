"use strict"

{
    const burgerSelector = ".burger";
    const headerSelector = ".header";
    const headerListSelector = ".header__list-wrapper";
    const logoRefSelector = ".logo__ref";
    const bodySelector = "body";
    const searchPanelSelector = ".search__wrapper";

    const burgerActiveClass = "burger_active";
    const headerActiveClass = "header_active";
    const headerListActiveCLass = "header__list_active";
    const logoRefActiveClass = "logo__ref_active";
    const bodyLockClass = "body_lock";
    const searchPanelActiveClass = "search__wrapper_active";

    const burger = document.querySelector(burgerSelector);
    const header = document.querySelector(headerSelector);
    const headerList = document.querySelector(headerListSelector);
    const logoRef = document.querySelector(logoRefSelector);
    const body = document.querySelector(bodySelector);

    const searchPanel = document.querySelector(searchPanelSelector);

    burger.addEventListener("click", () => {
        burger.classList.toggle(burgerActiveClass);
        header.classList.toggle(headerActiveClass);
        headerList.classList.toggle(headerListActiveCLass);
        logoRef.classList.toggle(logoRefActiveClass);
        body.classList.toggle(bodyLockClass);

        if (searchPanel !== null) {
            searchPanel.classList.toggle(searchPanelActiveClass);
        }
    });
}
