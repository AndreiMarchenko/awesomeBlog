"use strict"

{
    let followersRef = document.querySelector(".profile-info__followers-ref");
    let followersModal = document.querySelector(".followers-modal");

    let body = document.body;
    let darkBody = document.querySelector(".dark-body");

    followersRef.addEventListener("click", () => {
        followersModal.classList.toggle("followers-modal_active");
        darkBody.classList.toggle("dark-body_active");
        body.classList.toggle("body_lock");
    });

    darkBody.addEventListener("click", function()  {
        if (darkBody.classList.contains("dark-body_active")) {
            followersModal.classList.toggle("followers-modal_active");
            darkBody.classList.toggle("dark-body_active");
            body.classList.toggle("body_lock");
        }
    });

    let followersAllTab = document.querySelector(".followers__all-tab");
    let followersSameTab =  document.querySelector(".followers__same-tab");

    let followersModalItems = document.querySelectorAll(".followers-modal__items");

    followersModalItems.forEach((modalItem) => {
        modalItem.style.height = window.innerHeight/2 +  "px";
    })

    let followersModalItemsAll = document.querySelector(".followers-modal__items_all");
    let followersModalItemsSame = document.querySelector(".followers-modal__items_same");


    followersAllTab.addEventListener("click", () => {
        if (!followersAllTab.classList.contains("followers__tab_active")) {
            followersAllTab.classList.toggle("followers__tab_active");
            followersSameTab.classList.toggle("followers__tab_active");

            followersModalItemsAll.classList.toggle("followers-modal__items_active");
            followersModalItemsSame.classList.toggle("followers-modal__items_active");
        }
    });


    followersSameTab.addEventListener("click", () => {
        if (!followersSameTab.classList.contains("followers__tab_active")) {
            followersAllTab.classList.toggle("followers__tab_active");
            followersSameTab.classList.toggle("followers__tab_active");

            followersModalItemsAll.classList.toggle("followers-modal__items_active");
            followersModalItemsSame.classList.toggle("followers-modal__items_active");
        }
    });



}
