"use strict";

///////////////////////////
/////    SELECTORS    /////
///////////////////////////

const btnSubmit = document.querySelector(".contact__submit");
const contactName = document.querySelector(".contact__name");
const contactEmail = document.querySelector(".contact__email");
const contactMsg = document.querySelector(".contact__message");

///////////////////////////
////  FORM VALIDATION  ////
///////////////////////////

const inputs = [contactName, contactEmail, contactMsg];

inputs.forEach((input) => {
    input.addEventListener("keydown", function (e) {
        input.classList.remove("contact__input--error");
        input.placeholder = input.dataset.ptext;
    });
});

btnSubmit.addEventListener("click", function (e) {
    let validationStatus;
    if (contactName.validity.valid && contactEmail.validity.valid && contactMsg.value.length !== 0) validationStatus = true;

    if (!contactName.validity.valid) {
        contactName.classList.add("contact__input--error");
        contactName.placeholder = "Please enter your name!";
    }

    if (!contactEmail.validity.valid && contactName.validity.valid) {
        contactEmail.classList.add("contact__input--error");
        contactEmail.placeholder = "Please enter your correct Email!";
    }

    if (contactMsg.value.length === 0 && contactName.validity.valid && contactEmail.validity.valid) {
        contactMsg.classList.add("contact__input--error");
        contactMsg.placeholder = "Please enter a message!";
    }

    if (validationStatus) window.location.href = "contact_landing.html";
});
