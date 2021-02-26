"use strict"

{
    const BURGER_SELECTOR = ".burger";
    const HEADER_SELECTOR = ".header";
    const HEADER_LIST_SELECTOR = ".header__list-wrapper";
    const LOGO_REF_SELECTOR = ".logo__ref";
    const BODY_SELECTOR = "body";
    const SEARCH_PANEL_SELECTOR = ".search__wrapper";

    const BURGER_ACTIVE_CLASS = "burger_active";
    const HEADER_ACTIVE_CLASS = "header_active";
    const HEADER_LIST_ACTIVE_CLASS = "header__list_active";
    const LOGO_REF_ACTIVE_CLASS = "logo__ref_active";
    const BODY_LOCK_CLASS = "body_lock";
    const SEARCH_PANEL_ACTIVE_CLASS = "search__wrapper_active";

    const burger = document.querySelector(BURGER_SELECTOR);
    const header = document.querySelector(HEADER_SELECTOR);
    const headerList = document.querySelector(HEADER_LIST_SELECTOR);
    const logoRef = document.querySelector(LOGO_REF_SELECTOR);
    const body = document.querySelector(BODY_SELECTOR);

    const searchPanel = document.querySelector(SEARCH_PANEL_SELECTOR);

    burger.addEventListener("click", () => {
        burger.classList.toggle(BURGER_ACTIVE_CLASS);
        header.classList.toggle(HEADER_ACTIVE_CLASS);
        headerList.classList.toggle(HEADER_LIST_ACTIVE_CLASS);
        logoRef.classList.toggle(LOGO_REF_ACTIVE_CLASS);
        body.classList.toggle(BODY_LOCK_CLASS);

        if (searchPanel !== null) {
            searchPanel.classList.toggle(SEARCH_PANEL_ACTIVE_CLASS);
        }
    });
}
