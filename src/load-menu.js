export default function loadMenu() {
    const contentDiv = document.querySelector("div#content");

    // Types (Wing, Drums, Boneless)
    const typeDiv = document.createElement("div");
    const typeHeading = document.createElement("p");
    typeHeading.classList.add("menu-heading");
    typeHeading.textContent = "Types";
    const typeWing = document.createElement("p");
    typeWing.textContent = "Wings";
    const typeDrums = document.createElement("p");
    typeDrums.textContent = "Drums";
    const typeBoneless = document.createElement("p");
    typeBoneless.textContent = "Boneless";
    typeDiv.append(typeHeading, typeWing, typeDrums, typeBoneless);

    // Flavors
    const flavorDiv = document.createElement("div");
    const flavorHeading = document.createElement("p");
    flavorHeading.classList.add("menu-heading");
    flavorHeading.textContent = "Flavors";
    const flavorOriginal = document.createElement("p");
    flavorOriginal.textContent = "Original";
    const flavorSpicy = document.createElement("p");
    flavorSpicy.textContent = "Spicy";
    const flavorSweetSpicy = document.createElement("p");
    flavorSweetSpicy.textContent = "Sweet & Spicy";
    flavorDiv.append(flavorHeading, flavorOriginal, flavorSpicy, flavorSweetSpicy);

    // Sides
    const sidesDiv = document.createElement("div");
    const sidesHeading = document.createElement("p");
    sidesHeading.classList.add("menu-heading");
    sidesHeading.textContent = "Sides";
    const sideFries = document.createElement("p");
    sideFries.textContent = "Fries";
    const sideTaterTots = document.createElement("p");
    sideTaterTots.textContent = "Tater Tots";
    const sidesNuggets = document.createElement("p");
    sidesNuggets.textContent = "Nuggets";
    sidesDiv.append(sidesHeading, sideFries, sideTaterTots, sidesNuggets);

    // Drinks
    const drinksDiv = document.createElement("div");
    const drinksHeading = document.createElement("p");
    drinksHeading.classList.add("menu-heading");
    drinksHeading.textContent = "Drinks";
    const drinksMilkshake = document.createElement("p");
    drinksMilkshake.textContent = "Milkshake";
    const drinksSoda = document.createElement("p");
    drinksSoda.textContent = "Soda";
    const drinksBeer = document.createElement("p");
    drinksBeer.textContent = "Beer";
    drinksDiv.append(drinksHeading, drinksMilkshake, drinksSoda, drinksBeer);

    // Reset
    contentDiv.textContent = "";
    contentDiv.append(typeDiv, flavorDiv, drinksDiv);
}