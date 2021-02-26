"use strict"

{
    const FOLLOWING_REF_SELECTOR = ".profile-info__following-ref";
    const FOLLOWING_MODAL_SELECTOR = ".following-modal";
    const DARK_BODY_SELECTOR = ".dark-body";
    const FOLLOWING_MODAL_ITEMS_SELECTOR = ".following-modal__items";
    const FOLLOWING_MODAL_ITEMS_ALL_SELECTOR = ".following-modal__items_all";
    const FOLLOWING_MODAL_ITEMS_SAME_SELECTOR = ".following-modal__items_same";
    const FOLLOWING_ALL_TAB_SELECTOR = ".following__all-tab";
    const FOLLOWING_SAME_TAB_SELECTOR = ".following__same-tab";
    const FOLLOWING_MODAL_CROSS_SELECTOR = ".following-modal__close-cross";

    const FOLLOWING_MODAL_ACTIVE_CLASS = "following-modal_active";
    const FOLLOWING_TAB_ACTIVE_CLASS = "following__tab_active";
    const FOLLOWING_MODAL_ITEMS_ACTIVE_CLASS = "following-modal__items_active";
    const DARK_BODY_ACTIVE_CLASS = "dark-body_active";
    const BODY_LOCK_CLASS = "body_lock";

    const followingRef = document.querySelector(FOLLOWING_REF_SELECTOR);
    const followingModal = document.querySelector(FOLLOWING_MODAL_SELECTOR);
    const darkBody = document.querySelector(DARK_BODY_SELECTOR);
    const body = document.body;
    const followingModalItems = document.querySelectorAll(FOLLOWING_MODAL_ITEMS_SELECTOR);
    const followingModalItemsAll = document.querySelector(FOLLOWING_MODAL_ITEMS_ALL_SELECTOR);
    const followingModalItemsSame = document.querySelector(FOLLOWING_MODAL_ITEMS_SAME_SELECTOR);
    const followingAllTab = document.querySelector(FOLLOWING_ALL_TAB_SELECTOR);
    const followingSameTab =  document.querySelector(FOLLOWING_SAME_TAB_SELECTOR);
    const followingModalCross = document.querySelector(FOLLOWING_MODAL_CROSS_SELECTOR);

    function openModal() {
        followingModal.classList.add(FOLLOWING_MODAL_ACTIVE_CLASS);

        followingAllTab.classList.add(FOLLOWING_TAB_ACTIVE_CLASS);
        followingModalItemsAll.classList.add(FOLLOWING_MODAL_ITEMS_ACTIVE_CLASS);
        followingModalItemsSame.classList.remove(FOLLOWING_MODAL_ITEMS_ACTIVE_CLASS);
        followingSameTab.classList.remove(FOLLOWING_TAB_ACTIVE_CLASS);

        darkBody.classList.add(DARK_BODY_ACTIVE_CLASS);
        body.classList.add(BODY_LOCK_CLASS);
    }

    function closeModal() {
        followingModal.classList.remove(FOLLOWING_MODAL_ACTIVE_CLASS);
        darkBody.classList.remove(DARK_BODY_ACTIVE_CLASS);
        body.classList.remove(BODY_LOCK_CLASS);
    }

    function changeModalTab() {
        followingAllTab.classList.toggle(FOLLOWING_TAB_ACTIVE_CLASS);
        followingSameTab.classList.toggle(FOLLOWING_TAB_ACTIVE_CLASS);

        followingModalItemsAll.classList.toggle(FOLLOWING_MODAL_ITEMS_ACTIVE_CLASS);
        followingModalItemsSame.classList.toggle(FOLLOWING_MODAL_ITEMS_ACTIVE_CLASS);
    }

    followingModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followingRef.addEventListener("click", openModal);

    followingAllTab.addEventListener("click", () => {
        if (!followingAllTab.classList.contains(FOLLOWING_TAB_ACTIVE_CLASS)) {
            changeModalTab();
        }
    });

    followingSameTab.addEventListener("click", () => {
        if (!followingSameTab.classList.contains(FOLLOWING_TAB_ACTIVE_CLASS)) {
            changeModalTab();
        }
    });

    followingModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
