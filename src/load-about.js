import resturantLogo from "./fried-chicken-logo.jpg";

export default function loadAbout() {
    const contentDiv = document.querySelector("div#content");

    // Image
    const logo = document.createElement("img")
    logo.src = resturantLogo;

    // Background
    const backgroundText = document.createElement("p");
    backgroundText.textContent = "We started this restaurant in 2000 because we love fried chicken! You've probably seen our restaurant on your feed, a quaint little restaurant tucked in a small neighbourhood. We hope you come and enjoy our fried chicken!"

    // Where to find us
    const findUsDiv = document.createElement("div");
    const openingDays = document.createElement("p");
    openingDays.textContent = "Monday - Friday";
    const openingHours = document.createElement("p");
    openingHours.textContent = "11am - 8pm";
    const address = document.createElement("p");
    address.textContent = "123 Quaint Neighbourhood";
    findUsDiv.append(openingDays, openingHours, address);

    // reset
    contentDiv.textContent = ""

    contentDiv.append(logo, backgroundText, findUsDiv)
};