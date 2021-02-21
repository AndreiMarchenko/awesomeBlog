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


    let followingRef = document.querySelector(".profile-info__following-ref");
    let followingModal = document.querySelector(".following-modal");
    let darkBody = document.querySelector(".dark-body");
    let body = document.body;
    let followingModalItems = document.querySelectorAll(".following-modal__items");
    let followingModalItemsAll = document.querySelector(".following-modal__items_all");
    let followingModalItemsSame = document.querySelector(".following-modal__items_same");
    let followingAllTab = document.querySelector(".following__all-tab");
    let followingSameTab =  document.querySelector(".following__same-tab");
    let followingModalCross = document.querySelector(".following-modal__close-cross");


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
