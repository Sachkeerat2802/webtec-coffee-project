"use strict";

///////////////////////////
/////    SELECTORS    /////
///////////////////////////

const rootElement = document.documentElement;
const btnScrollTop = document.querySelector(".scroll__top");
const hero = document.querySelector(".hero");

///////////////////////////
//// STICKY SCROLL BTN ////
///////////////////////////

const scrollTop = function (entries) {
    const entry = entries[0];
    !entry.isIntersecting ? btnScrollTop.classList.add("scroll__show") : btnScrollTop.classList.remove("scroll__show");
};

const btnObserver = new IntersectionObserver(scrollTop, {
    root: null,
    threshold: 0,
    rootMargin: "-250px",
});

btnObserver.observe(hero);

btnScrollTop.addEventListener("click", function () {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
