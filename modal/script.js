"use strict";

const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const btnsModal = document.querySelectorAll(".show-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  if (
    !modal.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  ) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};
// console.log(btnsModal);
for (let i = 0; i < btnsModal.length; i++)
  btnsModal[i].addEventListener("click", showModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
});
