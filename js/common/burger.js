"use strict"

{
    let burger = document.querySelector(".burger");
    let header = document.querySelector(".header");
    let headerList = document.querySelector(".header__list-wrapper");
    let logoRef = document.querySelector(".logo__ref");
    let body = document.querySelector("body");

    let searchPanel = document.querySelector(".search__wrapper");

    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        header.classList.toggle("header_active");
        headerList.classList.toggle("header__list_active");
        logoRef.classList.toggle("logo__ref_active");
        body.classList.toggle("body_lock");

        if (searchPanel !== null) {
            searchPanel.classList.toggle("search__wrapper_active");
        }
    });
}
