const CERTAIN_MENU = JSON.parse(localStorage.getItem("view-top-menu")); // the certain active certain menu

const CERTAIN_MENU_CONTAINER = document.getElementById("certain-menu-container");
const MENU_PRICE = document.getElementById("certain-menu-price");
const PRICE_TAG = document.createElement("p");

if(CERTAIN_MENU) {
    PRICE_TAG.textContent = CERTAIN_MENU[0].price;
    MENU_PRICE.appendChild(PRICE_TAG);
    CERTAIN_MENU_CONTAINER.appendChild(drawCertainMenu());
}
else {
    const empty_response = document.createElement("div");
    empty_response.textContent = "nothing to view here!!";
    CERTAIN_MENU_CONTAINER.appendChild(empty_response);
}

function drawCertainMenu() {
    const CERTAIN_MENU_CONTENT = document.createElement("div");

    CERTAIN_MENU_CONTENT.className = "certain-menu-content";

    const CERT_MENU_LEFT_SIDE_CONTAINER = document.createElement("div"); // this is image side
    let left_side_img = document.createElement("img");
    let left_side_title = document.createElement("p");
    let left_side_addToOrder = document.createElement("button");

    left_side_img.src = `${CERTAIN_MENU[0].img}`;
    left_side_title.textContent = CERTAIN_MENU[0].title;
    left_side_addToOrder.textContent = "add to order";
    left_side_img.style.width = "200px";
    left_side_img.style.height = "200px";
    left_side_title.className = "content-title";
    left_side_addToOrder.style.marginTop = "5px";
    left_side_addToOrder.className = "btn btn-outline-order text-capitalize";
    left_side_addToOrder.style.width = "100%";

    CERT_MENU_LEFT_SIDE_CONTAINER.appendChild(left_side_img);
    CERT_MENU_LEFT_SIDE_CONTAINER.appendChild(left_side_title);
    CERT_MENU_LEFT_SIDE_CONTAINER.appendChild(left_side_addToOrder);

    left_side_addToOrder.addEventListener("click", function () {
        addDishToOrder(CERTAIN_MENU[0]);
    });

    const CERT_MENU_RIGHT_SIDE_CONTAINER = document.createElement("div"); // this is description of info side
    CERT_MENU_RIGHT_SIDE_CONTAINER.className = "certain-menu-right-content-body";
    // CSS
    // for OTHER-INFO container content
    const otherInfoContainer = document.createElement("div"); // other info field
    const infoTAG = document.createElement("div");

    otherInfoContainer.className = "other-info-container";
    infoTAG.className = "info-content-title text-capitalize";

    infoTAG.textContent = "information"
    let info = CERTAIN_MENU[0].otherInfo.info.split(';');
    const infoLen = info.length;

    otherInfoContainer.appendChild(infoTAG);
    for(let i = 0; i < infoLen; i++) {
        const OIContent = document.createElement("p");
        OIContent.textContent = info[i];
        otherInfoContainer.appendChild(OIContent);

    }
    CERT_MENU_RIGHT_SIDE_CONTAINER.appendChild(otherInfoContainer);

    //end of OTHER-INFO container content

    //for INGREDIENTS-CONTAINER CONTENT
    const INGREDIENTS_Container = document.createElement("div"); // other ingredients field
    const INGREDIENTS_TAG = document.createElement("div");

    INGREDIENTS_Container.className = "ingredients-info-container";
    INGREDIENTS_TAG.className = "ingredients-content-title text-capitalize";

    INGREDIENTS_TAG.textContent = "ingredients";
    const ingredients = CERTAIN_MENU[0].ingredients;
    let ingredientsLen = ingredients.length;

    INGREDIENTS_Container.appendChild(INGREDIENTS_TAG);
    for(let i = 0; i < ingredientsLen; i++) {
        const INGRDNTSContent = document.createElement("p");
        INGRDNTSContent.textContent = ingredients[i];
        INGREDIENTS_Container.appendChild(INGRDNTSContent);
    }
    CERT_MENU_RIGHT_SIDE_CONTAINER.appendChild(INGREDIENTS_Container);
    // end of INGREDIENTS-CONTAINER CONTENT

    // for DIRECTIONS-CONTAINER CONTENT
    const DIRECTIONS_Container = document.createElement("div"); // other direction field
    const DIRECTIONS_TAG = document.createElement("div");
    
    DIRECTIONS_Container.className = "directions-info-container";
    DIRECTIONS_TAG.className = "directions-content-title text-capitalize";
    DIRECTIONS_TAG.textContent = "directions";

    let directions = CERTAIN_MENU[0].directions;
    let directionLen = directions.length;

    DIRECTIONS_Container.appendChild(DIRECTIONS_TAG);
    for(let i = 0; i < directionLen; i++) {
        const DIRECTIONSContent = document.createElement("div");
        const DIRECTIONSContentLITAG = document.createElement("li");
        DIRECTIONSContent.className = "directions-content-item"
        DIRECTIONSContentLITAG.textContent = directions[i].title;

        DIRECTIONSContent.appendChild(DIRECTIONSContentLITAG);
        DIRECTIONS_Container.appendChild(DIRECTIONSContent);
    }
    CERT_MENU_RIGHT_SIDE_CONTAINER.appendChild(DIRECTIONS_Container);
    // end of DIRECTIONS-CONTAINER CONTENT

    CERTAIN_MENU_CONTENT.appendChild(CERT_MENU_LEFT_SIDE_CONTAINER);
    CERTAIN_MENU_CONTENT.appendChild(CERT_MENU_RIGHT_SIDE_CONTAINER);

    return CERTAIN_MENU_CONTENT;
}

function addDishToOrder(dish) {
    const RESPONSE_MESSAGES = document.getElementById("response-messages");
    const ORDER_LIST = document.getElementById("order-list");
    let orders = [];

    if(localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));

        if(!RESTO_STORAGE.dishExistAlready(orders, dish.id)) {
            localStorage.setItem("orders", JSON.stringify(RESTO_STORAGE.addNewDish(
                orders,
                dish
            )));

            RESPONSE_MESSAGES.textContent = "New order was added!";
            RESPONSE_MESSAGES.style.opacity = 1;
            RESPONSE_MESSAGES.style.backgroundColor = "#76eba5";
            RESPONSE_MESSAGES.style.transition = "all 0.8s";

            const si = setInterval(() => {
                RESPONSE_MESSAGES.style.opacity = 0;
                clearInterval(si);
            }, 1500);
        }
        else {
            RESPONSE_MESSAGES.textContent = "This order has been added already!";
            RESPONSE_MESSAGES.style.opacity = 1;
            RESPONSE_MESSAGES.style.backgroundColor = "#ffb34f";
            RESPONSE_MESSAGES.style.transition = "all 0.8s"

            const si = setInterval(() => {
                RESPONSE_MESSAGES.style.opacity = 0;
                clearInterval(si);
            }, 1500);
        }
    }
    else {
        orders.push(dish);
        localStorage.setItem("orders", JSON.stringify(orders));

        RESPONSE_MESSAGES.textContent = "New order was added!";
        RESPONSE_MESSAGES.style.opacity = 1;
        RESPONSE_MESSAGES.style.backgroundColor = "#76eba5";
        RESPONSE_MESSAGES.style.transition = "all 0.8s";

        const si = setInterval(() => {
            RESPONSE_MESSAGES.style.opacity = 0;
            clearInterval(si);
        }, 1500);
    }
    ORDER_LIST.textContent = RESTO_STORAGE.countedOrders();
}