"use strict"

{
    const FOLLOWERS_REF_SELECTOR = ".profile-info__followers-ref";
    const FOLLOWERS_MODAL_SELECTOR = ".followers-modal";
    const DARK_BODY_SELECTOR = ".dark-body";
    const FOLLOWERS_MODAL_ITEMS_SELECTOR = ".followers-modal__items";
    const FOLLOWERS_MODAL_ITEMS_ALL_SELECTOR = ".followers-modal__items_all";
    const FOLLOWERS_MODAL_ITEMS_SAME_SELECTOR = ".followers-modal__items_same";
    const FOLLOWERS_ALL_TAB_SELECTOR = ".followers__all-tab";
    const FOLLOWERS_SAME_TAB_SELECTOR = ".followers__same-tab";
    const FOLLOWERS_MODAL_CROSS_SELECTOR = ".followers-modal__close-cross";

    const FOLLOWERS_MODAL_ACTIVE_CLASS = "followers-modal_active";
    const FOLLOWERS_TAB_ACTIVE_CLASS = "followers__tab_active";
    const FOLLOWERS_MODAL_ITEMS_ACTIVE_CLASS = "followers-modal__items_active";
    const DARK_BODY_ACTIVE_CLASS = "dark-body_active";
    const BODY_LOCK_CLASS = "body_lock";

    const followersRef = document.querySelector(FOLLOWERS_REF_SELECTOR);
    const followersModal = document.querySelector(FOLLOWERS_MODAL_SELECTOR);
    const darkBody = document.querySelector(DARK_BODY_SELECTOR);
    const body = document.body;
    const followersModalItems = document.querySelectorAll(FOLLOWERS_MODAL_ITEMS_SELECTOR);
    const followersModalItemsAll = document.querySelector(FOLLOWERS_MODAL_ITEMS_ALL_SELECTOR);
    const followersModalItemsSame = document.querySelector(FOLLOWERS_MODAL_ITEMS_SAME_SELECTOR);
    const followersAllTab = document.querySelector(FOLLOWERS_ALL_TAB_SELECTOR);
    const followersSameTab =  document.querySelector(FOLLOWERS_SAME_TAB_SELECTOR);
    const followersModalCross = document.querySelector(FOLLOWERS_MODAL_CROSS_SELECTOR);

    function openModal() {
        followersModal.classList.add(FOLLOWERS_MODAL_ACTIVE_CLASS);

        followersAllTab.classList.add(FOLLOWERS_TAB_ACTIVE_CLASS);
        followersModalItemsAll.classList.add(FOLLOWERS_MODAL_ITEMS_ACTIVE_CLASS);
        followersModalItemsSame.classList.remove(FOLLOWERS_MODAL_ITEMS_ACTIVE_CLASS);
        followersSameTab.classList.remove(FOLLOWERS_TAB_ACTIVE_CLASS);

        darkBody.classList.add(DARK_BODY_ACTIVE_CLASS);
        body.classList.add(BODY_LOCK_CLASS);
    }

    function closeModal() {
        followersModal.classList.remove(FOLLOWERS_MODAL_ACTIVE_CLASS);
        darkBody.classList.remove(DARK_BODY_ACTIVE_CLASS);
        body.classList.remove(BODY_LOCK_CLASS);
    }

    function changeModalTab() {
        followersAllTab.classList.toggle(FOLLOWERS_TAB_ACTIVE_CLASS);
        followersSameTab.classList.toggle(FOLLOWERS_TAB_ACTIVE_CLASS);

        followersModalItemsAll.classList.toggle(FOLLOWERS_MODAL_ITEMS_ACTIVE_CLASS);
        followersModalItemsSame.classList.toggle(FOLLOWERS_MODAL_ITEMS_ACTIVE_CLASS);
    }

    followersModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followersRef.addEventListener("click", openModal);

    followersAllTab.addEventListener("click", () => {
        if (!followersAllTab.classList.contains(FOLLOWERS_TAB_ACTIVE_CLASS)) {
            changeModalTab();
        }
    });

    followersSameTab.addEventListener("click", () => {
        if (!followersSameTab.classList.contains(FOLLOWERS_TAB_ACTIVE_CLASS)) {
            changeModalTab();
        }
    });

    followersModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
