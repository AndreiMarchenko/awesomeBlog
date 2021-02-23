"use strict"

{
    function openModal() {
        followersModal.classList.add("followers-modal_active");

        followersAllTab.classList.add("followers__tab_active");
        followersModalItemsAll.classList.add("followers-modal__items_active");
        followersModalItemsSame.classList.remove("followers-modal__items_active");
        followersSameTab.classList.remove("followers__tab_active");

        darkBody.classList.add("dark-body_active");
        body.classList.add("body_lock");
    }

    function closeModal() {
        followersModal.classList.remove("followers-modal_active");
        darkBody.classList.remove("dark-body_active");
        body.classList.remove("body_lock");
    }

    function changeModalTab() {
        followersAllTab.classList.toggle("followers__tab_active");
        followersSameTab.classList.toggle("followers__tab_active");

        followersModalItemsAll.classList.toggle("followers-modal__items_active");
        followersModalItemsSame.classList.toggle("followers-modal__items_active");
    }


    const followersRef = document.querySelector(".profile-info__followers-ref");
    const followersModal = document.querySelector(".followers-modal");
    const darkBody = document.querySelector(".dark-body");
    const body = document.body;
    const followersModalItems = document.querySelectorAll(".followers-modal__items");
    const followersModalItemsAll = document.querySelector(".followers-modal__items_all");
    const followersModalItemsSame = document.querySelector(".followers-modal__items_same");
    const followersAllTab = document.querySelector(".followers__all-tab");
    const followersSameTab =  document.querySelector(".followers__same-tab");
    const followersModalCross = document.querySelector(".followers-modal__close-cross");


    followersModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followersRef.addEventListener("click", openModal);

    followersAllTab.addEventListener("click", () => {
        if (!followersAllTab.classList.contains("followers__tab_active")) {
            changeModalTab();
        }
    });

    followersSameTab.addEventListener("click", () => {
        if (!followersSameTab.classList.contains("followers__tab_active")) {
            changeModalTab();
        }
    });

    followersModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
