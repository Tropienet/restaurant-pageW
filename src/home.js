function loadHomeInfo() {
    const pageContainer = document.querySelector(".page-container");

    const restaurantInfoContainer = document.createElement("div");

    restaurantInfoContainer.classList.add("restaurant-info");
    
    const restaurantName = document.createElement("p");

    restaurantName.textContent = "Papa Johns";

    const restaurantHours = document.createElement("p");

    restaurantHours.textContent = "Mon-Fri: 7:00-20:00";

    restaurantInfoContainer.appendChild(restaurantName);
    restaurantInfoContainer.appendChild(restaurantHours)

    pageContainer.appendChild(restaurantInfoContainer);
}

export default loadHomeInfo;