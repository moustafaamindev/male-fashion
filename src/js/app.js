import "../scss/app.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import "bootstrap/dist/js/bootstrap.bundle";
const about = require("./about-us");
const contacts = require("./contacts");
const blog = require("./blog");
const shopDetails = require("./shop-details");
const shop = require("./shop");
const home = require("./home");

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.classList.add("spinner");
});