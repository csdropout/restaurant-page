import loadHome from "./load-home.js";
import loadMenu from "./load-menu.js";
import loadAbout from "./load-about.js";
import "./styles.css";

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
    });
})

const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", loadHome);
const menuTab = document.querySelector("#menu");
menuTab.addEventListener("click", loadMenu);
const aboutTab = document.querySelector("#about");
aboutTab.addEventListener("click", loadAbout);

loadHome();
homeTab.classList.add("active");