import PizzaSlice from "./pizza_slice.jpg"

function loadHomepage() {
    const container = document.querySelector("#content");

    const restaurantName = document.createElement("div");
    
    restaurantName.textContent = "Papa Johns pizzeria";

    const pizzaSlice = new Image();
    pizzaSlice.src = PizzaSlice;

    container.appendChild(restaurantName);
    container.appendChild(pizzaSlice);
}

export default loadHomepage;