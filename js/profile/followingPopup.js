"use strict"

{
    const followingRefSelector = ".profile-info__following-ref";
    const followingModalSelector = ".following-modal";
    const darkBodySelector = ".dark-body";
    const followingModalItemsSelector = ".following-modal__items";
    const followingModalItemsAllSelector = ".following-modal__items_all";
    const followingModalItemsSameSelector = ".following-modal__items_same";
    const followingAllTabSelector = ".following__all-tab";
    const followingSameTabSelector = ".following__same-tab";
    const followingModalCrossSelector = ".following-modal__close-cross";

    const followingModalActiveClass = "following-modal_active";
    const followingTabActiveClass = "following__tab_active";
    const followingModalItemsActiveClass = "following-modal__items_active";
    const darkBodyActiveClass = "dark-body_active";
    const bodyLockClass = "body_lock";

    const followingRef = document.querySelector(followingRefSelector);
    const followingModal = document.querySelector(followingModalSelector);
    const darkBody = document.querySelector(darkBodySelector);
    const body = document.body;
    const followingModalItems = document.querySelectorAll(followingModalItemsSelector);
    const followingModalItemsAll = document.querySelector(followingModalItemsAllSelector);
    const followingModalItemsSame = document.querySelector(followingModalItemsSameSelector);
    const followingAllTab = document.querySelector(followingAllTabSelector);
    const followingSameTab =  document.querySelector(followingSameTabSelector);
    const followingModalCross = document.querySelector(followingModalCrossSelector);

    function openModal() {
        followingModal.classList.add(followingModalActiveClass);

        followingAllTab.classList.add(followingTabActiveClass);
        followingModalItemsAll.classList.add(followingModalItemsActiveClass);
        followingModalItemsSame.classList.remove(followingModalItemsActiveClass);
        followingSameTab.classList.remove(followingTabActiveClass);

        darkBody.classList.add(darkBodyActiveClass);
        body.classList.add(bodyLockClass);
    }

    function closeModal() {
        followingModal.classList.remove(followingModalActiveClass);
        darkBody.classList.remove(darkBodyActiveClass);
        body.classList.remove(bodyLockClass);
    }

    function changeModalTab() {
        followingAllTab.classList.toggle(followingTabActiveClass);
        followingSameTab.classList.toggle(followingTabActiveClass);

        followingModalItemsAll.classList.toggle(followingModalItemsActiveClass);
        followingModalItemsSame.classList.toggle(followingModalItemsActiveClass);
    }

    followingModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followingRef.addEventListener("click", openModal);

    followingAllTab.addEventListener("click", () => {
        if (!followingAllTab.classList.contains(followingTabActiveClass)) {
            changeModalTab();
        }
    });

    followingSameTab.addEventListener("click", () => {
        if (!followingSameTab.classList.contains(followingTabActiveClass)) {
            changeModalTab();
        }
    });

    followingModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
