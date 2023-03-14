import pizza4 from "./pizza_slice.jpg"
import pizza1 from "./pizza1.jpg";
import pizza2 from "./pizza2.jpg";
import pizza3 from "./pizza3.jpg";

function loadMenuInfo() {
    const pageContainer = document.querySelector(".page-container");

    const menuContainer = document.createElement("div");

    menuContainer.classList.add("menu-container");

    const pizza4Img = new Image();
    pizza4Img.src = pizza4;
    const pizza1Img = new Image();
    pizza1Img.src = pizza1;
    const pizza2Img = new Image();
    pizza2Img.src = pizza2;
    const pizza3Img = new Image();
    pizza3Img.src = pizza3;

    for(let i = 1; i< 5; i+=1) {
        const menuItemContainer = document.createElement("div");

        const menuItemName = document.createElement("p");

        menuItemName.textContent = `pizza ${i}`;

        menuItemContainer.appendChild(menuItemName);
        
        switch(i) {
            case 1:
                menuItemContainer.appendChild(pizza1Img);
                break;
            case 2:
                menuItemContainer.appendChild(pizza2Img);
                break;
            case 3:
                menuItemContainer.appendChild(pizza3Img);
                break;
            case 4:
                menuItemContainer.appendChild(pizza4Img);
                break;
            default:
                console.log("error");
        } 

        menuContainer.appendChild(menuItemContainer);
    }

    pizza4Img.classList.add("menu-img");
    pizza1Img.classList.add("menu-img");
    pizza2Img.classList.add("menu-img");
    pizza3Img.classList.add("menu-img");

    pageContainer.appendChild(menuContainer);

}

export default loadMenuInfo;