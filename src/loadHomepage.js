import loadHomeInfo from "./home";
import clearDisplay from "./clearDisplay";

function loadHomepage() {
    const container = document.querySelector("#content");

    const header = document.createElement("div");
    const homeBtn = document.createElement("div");
    const menuBtn = document.createElement("div");
    const contactBtn = document.createElement("div");

    const pageContainer = document.createElement("div");
    pageContainer.classList.add("page-container")

    header.classList.add("header")
    
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    homeBtn.classList.add("btn");
    menuBtn.classList.add("btn");
    contactBtn.classList.add("btn");
    
    function addActiveClass ( element ) {
        element.classList.add("active");
    }

    function removeActiveClass() {
        homeBtn.classList.remove("active");
        menuBtn.classList.remove("active");
        contactBtn.classList.remove("active");
    }

    homeBtn.addEventListener("click", () => {
        clearDisplay(pageContainer);
        removeActiveClass();
        addActiveClass(homeBtn);
        loadHomeInfo();
    });

    menuBtn.addEventListener("click", () => {
        clearDisplay(pageContainer);
        removeActiveClass();
        addActiveClass(menuBtn);
    });

    contactBtn.addEventListener("click", () => {
        clearDisplay(pageContainer);
        removeActiveClass();
        addActiveClass(contactBtn);
    });

    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);

    container.appendChild(header);
    container.appendChild(pageContainer);
}

export default loadHomepage;