function loadHomeInfo() {
    const pageContainer = document.querySelector(".page-container");

    const restaurantName = document.createElement("div");
    
    restaurantName.textContent = "Papa John";

    pageContainer.appendChild(restaurantName);
}

export default loadHomeInfo;