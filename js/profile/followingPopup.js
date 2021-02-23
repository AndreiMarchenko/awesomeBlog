"use strict"

{
    function openModal() {
        followingModal.classList.add("following-modal_active");

        followingAllTab.classList.add("following__tab_active");
        followingModalItemsAll.classList.add("following-modal__items_active");
        followingModalItemsSame.classList.remove("following-modal__items_active");
        followingSameTab.classList.remove("following__tab_active");

        darkBody.classList.add("dark-body_active");
        body.classList.add("body_lock");
    }

    function closeModal() {
        followingModal.classList.remove("following-modal_active");
        darkBody.classList.remove("dark-body_active");
        body.classList.remove("body_lock");
    }

    function changeModalTab() {
        followingAllTab.classList.toggle("following__tab_active");
        followingSameTab.classList.toggle("following__tab_active");

        followingModalItemsAll.classList.toggle("following-modal__items_active");
        followingModalItemsSame.classList.toggle("following-modal__items_active");
    }


    const followingRef = document.querySelector(".profile-info__following-ref");
    const followingModal = document.querySelector(".following-modal");
    const darkBody = document.querySelector(".dark-body");
    const body = document.body;
    const followingModalItems = document.querySelectorAll(".following-modal__items");
    const followingModalItemsAll = document.querySelector(".following-modal__items_all");
    const followingModalItemsSame = document.querySelector(".following-modal__items_same");
    const followingAllTab = document.querySelector(".following__all-tab");
    const followingSameTab =  document.querySelector(".following__same-tab");
    const followingModalCross = document.querySelector(".following-modal__close-cross");


    followingModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    followingRef.addEventListener("click", openModal);

    followingAllTab.addEventListener("click", () => {
        if (!followingAllTab.classList.contains("following__tab_active")) {
            changeModalTab();
        }
    });

    followingSameTab.addEventListener("click", () => {
        if (!followingSameTab.classList.contains("following__tab_active")) {
            changeModalTab();
        }
    });

    followingModalCross.addEventListener("click",  closeModal);
    darkBody.addEventListener("click", closeModal);
}
