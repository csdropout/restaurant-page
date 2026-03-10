import restaurantLogo from "./fried-chicken-logo.jpg";

export default function loadHome() {
    const contentDiv = document.querySelector("div#content");
    const logo = document.createElement("img");
    logo.classList.add("logo")
    logo.src = restaurantLogo;
    const headline = document.createElement("h1");
    headline.textContent = "Chilli Chicken";
    const subtext = document.createElement("p");
    subtext.textContent = "Which came first, the chicken or the egg?";

    contentDiv.textContent = "";
    contentDiv.append(logo, headline, subtext);
};