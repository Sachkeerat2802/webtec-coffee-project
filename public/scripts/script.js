"use strict";

///////////////////////////
/////    SELECTORS    /////
///////////////////////////

const navLinks = document.querySelector(".nav__list");
const navCart = document.querySelector(".nav__cart");
const body = document.getElementsByTagName("body")[0];

///////////////////////////
////   HOVER EFFECTS   ////
///////////////////////////

const hoverEffect = function (e, opacity, parentIdentifier, identifier) {
    const hoveredElement = e.target;
    if (hoveredElement.classList.contains(identifier)) {
        const siblings = hoveredElement.closest(`.${parentIdentifier}`).querySelectorAll(`.${identifier}`);
        siblings.forEach((element) => {
            if (element !== hoveredElement) element.style.opacity = opacity;
        });
    }
};

navLinks.addEventListener("mouseover", function (e) {
    hoverEffect(e, 0.4, "nav__list", "nav__item");
});

navLinks.addEventListener("mouseout", function (e) {
    hoverEffect(e, 1, "nav__list", "nav__item");
});

///////////////////////////
/////   CART MESSAGE  /////
///////////////////////////

navCart.addEventListener("click", function () {
    navCart.classList.toggle("nav__cart--open");
});

body.addEventListener("click", function (e) {
    if (!e.target.parentNode.classList.contains("nav__cart")) navCart.classList.remove("nav__cart--open");
});
