"use strict";

///////////////////////////
/////    SELECTORS    /////
///////////////////////////

const itemNames = document.querySelector(".shop__list");
const shopItems = document.querySelector(".shop__list");
const shopTitle = document.querySelector(".shop__title");
const shopDescription = document.querySelector(".shop__description");
const shopCity = document.querySelector(".shop__city");
const shopPrice = document.querySelector(".shop__amount");
const shopImg = document.querySelector(".shop__img");
const shopCheckbox = document.querySelector(".shop__checkbox");
const btnCart = document.querySelector(".shop__cart");

///////////////////////////
/////   ITEM OBJECTS  /////
///////////////////////////

const arabica = {
    keyword: "arabica",
    name: "Ethiopian Arabica",
    price: 14.99,
    description: "High quality arabica beans picked by hand and grown in subtropical climates having a strong roasted flavour with hints of chocolate and caramel.",
    location: "Adis Ababa, Ethiopia",
};

const catimor = {
    keyword: "catimor",
    name: "Indian Catimor",
    price: 11.99,
    description: "Premium catimor beans harvested by our partner farmers from the plains of India with a rich dark taste and a deep nutty flavour.",
    location: "Patiala, India",
};

const robusta = {
    keyword: "robusta",
    name: "Brazilian Robusta",
    price: 13.99,
    description: "Freshly roasted robusta beans from the hills of Brazil grown at the perfect altitude and temperature with an underlying bitter and woody taste.",
    location: "Sao Paulo, Brazil",
};

const bourbon = {
    keyword: "bourbon",
    name: "American Bourbon",
    price: 18.99,
    description: "The finest bourbon beans from the valleys of California. Balanced with a smooth texture and a sweet finish, they make for a great option.",
    location: "California, USA",
};

const caturra = {
    keyword: "caturra",
    name: "Spanish Caturra",
    price: 9.99,
    description: "Exclusive sweet, complex and crisp coffee beans from the Caturra plants in the plains of Spain and are perfect to be used in sweet desserts and drinks.",
    location: "Bilbao, Spain",
};

const items = [arabica, catimor, robusta, bourbon, caturra];
let currentItem = items.find((item) => item.keyword === "arabica");

///////////////////////////
////   HOVER EFFECTS   ////
///////////////////////////

itemNames.addEventListener("mouseover", function (e) {
    hoverEffect(e, 0.4, "shop__list", "shop__item");
});

itemNames.addEventListener("mouseout", function (e) {
    hoverEffect(e, 1, "shop__list", "shop__item");
});

///////////////////////////
/////   SHOP CONTENT  /////
///////////////////////////

shopItems.addEventListener("click", (e) => {
    const clickedItem = e.target;
    currentItem = items.find((item) => item.keyword === clickedItem.textContent);
    if (clickedItem.classList.contains("shop__item")) {
        const siblings = clickedItem.closest(".shop__list").querySelectorAll(".shop__item");
        siblings.forEach((item) => item.classList.remove("shop__item--active"));
        clickedItem.classList.add("shop__item--active");
        shopTitle.textContent = currentItem.name;
        shopDescription.textContent = currentItem.description;
        shopCity.textContent = currentItem.location;
        shopPrice.textContent = `$${currentItem.price}`;
        shopImg.src = `images/coffee_bag_${currentItem.keyword}.png`;
    }
});

shopCheckbox.addEventListener("click", (e) => {
    shopPrice.textContent = shopCheckbox.checked ? `$${currentItem.price + 1}` : `$${currentItem.price}`;
});

///////////////////////////
/////  CART REDIRECT  /////
///////////////////////////

btnCart.addEventListener("click", function () {
    window.location.href = "shop_landing.html";
});
