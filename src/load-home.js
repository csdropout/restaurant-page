import resturantLogo from "./fried-chicken-logo.jpg";

export default function loadHome() {
    const contentDiv = document.querySelector("div#content");
    const logo = document.createElement("img");
    logo.src = resturantLogo;
    logo.style.width = "5em";
    logo.style.height = "auto";
    const headline = document.createElement("h1");
    headline.textContent = "Singapore's No. 1 Fried Chicken Restaurant";
    const subtext = document.createElement("p");
    subtext.textContent = "According to survey on the best fried chicken in the country which gathered more than 500 responses...";

    contentDiv.textContent = "";
    contentDiv.append(logo, headline, subtext);
};