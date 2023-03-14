function loadMenuInfo() {
    const pageContainer = document.querySelector(".page-container");

    const menuInfo = document.createElement("div");

    menuInfo.textContent = "Menu information";

    pageContainer.appendChild(menuInfo)
}

export default loadMenuInfo;