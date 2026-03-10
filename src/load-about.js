import resturantLogo from "./fried-chicken-logo.jpg";

export default function loadAbout() {
    const contentDiv = document.querySelector("div#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about");

    // Image
    const logo = document.createElement("img")
    logo.src = resturantLogo;
    logo.classList.add("logo");

    // Background
    const backgroundDiv = document.createElement("div");
    const backgroundHeading = document.createElement("p");
    backgroundHeading.classList.add("about-heading");
    backgroundHeading.textContent = "Background";
    const backgroundText = document.createElement("p");
    backgroundText.textContent = "We started this restaurant in 2000 because we love fried chicken!";
    backgroundDiv.append(backgroundHeading, backgroundText);

    // Where to find us
    const findUsHeading = document.createElement("p");
    findUsHeading.textContent = "We are open:";
    findUsHeading.classList.add("about-heading");
    const findUsDiv = document.createElement("div");
    const openingDays = document.createElement("p");
    openingDays.textContent = "Monday - Friday";
    const openingHours = document.createElement("p");
    openingHours.textContent = "11am - 8pm";
    const address = document.createElement("p");
    address.textContent = "123 Quaint Neighbourhood";
    findUsDiv.append(findUsHeading, openingDays, openingHours, address);

    // reset
    contentDiv.textContent = "";
    aboutDiv.append(logo, backgroundDiv, findUsDiv);
    contentDiv.append(aboutDiv);
};