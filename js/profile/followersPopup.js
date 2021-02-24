"use strict"

{
    const followersRefSelector = ".profile-info__followers-ref";
    const followersModalSelector = ".followers-modal";
    const darkBodySelector = ".dark-body";
    const followersModalItemsSelector = ".followers-modal__items";
    const followersModalItemsAllSelector = ".followers-modal__items_all";
    const followersModalItemsSameSelector = ".followers-modal__items_same";
    const followersAllTabSelector = ".followers__all-tab";
    const followersSameTabSelector = ".followers__same-tab";
    const followersModalCrossSelector = ".followers-modal__close-cross";

    const followersModalActiveClass = "followers-modal_active";
    const followersTabActiveClass = "followers__tab_active";
    const followersModalItemsActiveClass = "followers-modal__items_active";
    const darkBodyActiveClass = "dark-body_active";
    const bodyLockClass = "body_lock";

    const followersRef = document.querySelector(followersRefSelector);
    const followersModal = document.querySelector(followersModalSelector);
    const darkBody = document.querySelector(darkBodySelector);
    const body = document.body;
    const followersModalItems = document.querySelectorAll(followersModalItemsSelector);
    const followersModalItemsAll = document.querySelector(followersModalItemsAllSelector);
    const followersModalItemsSame = document.querySelector(followersModalItemsSameSelector);
    const followersAllTab = document.querySelector(followersAllTabSelector);
    const followersSameTab =  document.querySelector(followersSameTabSelector);
    const followersModalCross = document.querySelector(followersModalCrossSelector);

    function openModal() {
        followersModal.classList.add(followersModalActiveClass);

        followersAllTab.classList.add(followersTabActiveClass);
        followersModalItemsAll.classList.add(followersModalItemsActiveClass);
        followersModalItemsSame.classList.remove(followersModalItemsActiveClass);
        followersSameTab.classList.remove(followersTabActiveClass);

        darkBody.classList.add(darkBodyActiveClass);
        body.classList.add(bodyLockClass);
    }

    function closeModal() {
        followersModal.classList.remove(followersModalActiveClass);
        darkBody.classList.remove(darkBodyActiveClass);
        body.classList.remove(bodyLockClass);
    }

    function changeModalTab() {
        followersAllTab.classList.toggle(followersTabActiveClass);
        followersSameTab.classList.toggle(followersTabActiveClass);

        followersModalItemsAll.classList.toggle(followersModalItemsActiveClass);
        followersModalItemsSame.classList.toggle(followersModalItemsActiveClass);
    }

    followersModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followersRef.addEventListener("click", openModal);

    followersAllTab.addEventListener("click", () => {
        if (!followersAllTab.classList.contains(followersTabActiveClass)) {
            changeModalTab();
        }
    });

    followersSameTab.addEventListener("click", () => {
        if (!followersSameTab.classList.contains(followersTabActiveClass)) {
            changeModalTab();
        }
    });

    followersModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
