export default function loadMenu() {
    const contentDiv = document.querySelector("div#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu")

    // Types (Wing, Drums, Boneless)
    const typeDiv = document.createElement("div");
    const typeHeading = document.createElement("p");
    typeHeading.classList.add("menu-heading");
    typeHeading.textContent = "Types";
    const typeList = document.createElement("ul")
    const typeWing = document.createElement("li");
    typeWing.textContent = "Wings";
    const typeDrums = document.createElement("li");
    typeDrums.textContent = "Drums";
    const typeBoneless = document.createElement("li");
    typeBoneless.textContent = "Boneless";
    typeList.append(typeWing, typeDrums, typeBoneless)
    typeDiv.append(typeHeading, typeList);

    // Flavors
    const flavorDiv = document.createElement("div");
    const flavorHeading = document.createElement("p");
    flavorHeading.classList.add("menu-heading");
    flavorHeading.textContent = "Flavors";
    const flavorList = document.createElement("ul");
    const flavorOriginal = document.createElement("li");
    flavorOriginal.textContent = "Original";
    const flavorSpicy = document.createElement("li");
    flavorSpicy.textContent = "Spicy";
    const flavorSweetSpicy = document.createElement("li");
    flavorSweetSpicy.textContent = "Sweet & Spicy";
    flavorList.append(flavorOriginal, flavorSpicy, flavorSweetSpicy)
    flavorDiv.append(flavorHeading, flavorList);

    // Sides
    const sidesDiv = document.createElement("div");
    const sidesHeading = document.createElement("p");
    sidesHeading.classList.add("menu-heading");
    sidesHeading.textContent = "Sides";
    const sidesList = document.createElement("ul");
    const sideFries = document.createElement("li");
    sideFries.textContent = "Fries";
    const sideTaterTots = document.createElement("li");
    sideTaterTots.textContent = "Tater Tots";
    const sidesNuggets = document.createElement("li");
    sidesNuggets.textContent = "Nuggets";
    sidesList.append(sideFries, sideTaterTots, sidesNuggets)
    sidesDiv.append(sidesHeading, sidesList);

    // Drinks
    const drinksDiv = document.createElement("div");
    const drinksHeading = document.createElement("p");
    drinksHeading.classList.add("menu-heading");
    drinksHeading.textContent = "Drinks";
    const drinksList = document.createElement("ul");
    const drinksMilkshake = document.createElement("li");
    drinksMilkshake.textContent = "Milkshake";
    const drinksSoda = document.createElement("li");
    drinksSoda.textContent = "Soda";
    const drinksBeer = document.createElement("li");
    drinksBeer.textContent = "Beer";
    drinksList.append(drinksMilkshake, drinksSoda, drinksBeer);
    drinksDiv.append(drinksHeading, drinksList);

    // Reset
    contentDiv.textContent = "";
    menuDiv.append(typeDiv, flavorDiv, sidesDiv, drinksDiv);
    contentDiv.append(menuDiv);
}