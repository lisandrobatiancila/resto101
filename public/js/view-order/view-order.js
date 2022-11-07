const orders = JSON.parse(localStorage.getItem("orders"));
const ORDER_CONTAINER = document.getElementById("order-container");

if(!localStorage.getItem("doesPaymentCollapse"))
    localStorage.setItem("doesPaymentCollapse", false);

if(orders && orders.length > 0) {
    ORDER_CONTAINER.appendChild(drawOrders());
    
    const ORDER_PAYMENT_CONTAINER = document.createElement("div");

    const COLLAPSE_PAYMENT = document.createElement("div");
    const COLLAPSE_PTAG = document.createElement("p");
    const PAYMENT_TITLE = document.createElement("p");
    const TOTAL_PAYMENT = document.createElement("p");

    COLLAPSE_PAYMENT.className = "collapse-payment text-capitalize";
    COLLAPSE_PTAG.textContent = "collapse";
    PAYMENT_TITLE.textContent = "payment";
    TOTAL_PAYMENT.textContent = "0";

    PAYMENT_TITLE.className = "payment-title text-capitalize";
    ORDER_PAYMENT_CONTAINER.className = JSON.parse(localStorage.getItem("doesPaymentCollapse"))?"collapse":"order-payment-container";
    TOTAL_PAYMENT.className = "total-payment";

    COLLAPSE_PAYMENT.appendChild(COLLAPSE_PTAG);

    ORDER_PAYMENT_CONTAINER.appendChild(COLLAPSE_PAYMENT);
    ORDER_PAYMENT_CONTAINER.appendChild(PAYMENT_TITLE);
    ORDER_PAYMENT_CONTAINER.appendChild(TOTAL_PAYMENT);

    let index = 0;
    let ordersLen = orders.length;

    const si = setInterval(() => {
        TOTAL_PAYMENT.textContent = parseInt(TOTAL_PAYMENT.innerHTML)+orders[index].price;
        index++;
        if(index >= ordersLen)
            clearInterval(si);
    }, 1000);

    ORDER_CONTAINER.appendChild(ORDER_PAYMENT_CONTAINER);

    COLLAPSE_PAYMENT.addEventListener("click", collapsePayment);
}
else {
    const RESPONSE_MESSAGES = document.getElementById("response-messages");

    const ORDER_MESSAGE_IF_EMPTY = document.createElement("p");
    ORDER_MESSAGE_IF_EMPTY.textContent = "You have not placed any order!";

    ORDER_CONTAINER.appendChild(ORDER_MESSAGE_IF_EMPTY);

    RESPONSE_MESSAGES.textContent = "No order to show!";
    RESPONSE_MESSAGES.style.opacity = 1;
    RESPONSE_MESSAGES.style.backgroundColor = "#ffb34f";
    RESPONSE_MESSAGES.style.transition = "all 0.8s";

    const si = setInterval(() => {
        RESPONSE_MESSAGES.style.opacity = 0;
        clearInterval(si);
    }, 3000);
}

function drawOrders () {
    const ORDER_CONTENT_CONTAINER = document.createElement("div");
    ORDER_CONTENT_CONTAINER.className = "order-content"; // a flex

    const orderLen = orders.length;
    for(let i = 0; i < orderLen; i++) {
        const ORDER_ITEM_CONTAINER = document.createElement("div"); // a flex item
        ORDER_ITEM_CONTAINER.className = "order-content-item";
        
        const ORDER_LEFT_ITEM = document.createElement("div");
        let orderIMG = document.createElement("img");
        let orderPRICE_CONTAINER = document.createElement("div");
        let orderPRICE_PTAG = document.createElement("span");

        ORDER_LEFT_ITEM.style.position = "relative";
        orderPRICE_CONTAINER.className = "order-price";
        orderPRICE_CONTAINER.appendChild(orderPRICE_PTAG);

        orderIMG.src = orders[i].img;
        orderPRICE_PTAG.textContent = orders[i].price;
        
        ORDER_LEFT_ITEM.appendChild(orderIMG);
        ORDER_LEFT_ITEM.appendChild(orderPRICE_CONTAINER);

        const ORDER_RIGHT_ITEM = document.createElement("div");
        let orderTitle = document.createElement("p");
        let orderRemoveAction = document.createElement("button");

        orderTitle.className = "text-capitalize";
        orderTitle.textContent = orders[i].title;

        orderRemoveAction.setAttribute("id", `remove-${orders[i].id}`)
        orderRemoveAction.textContent = "remove";
        orderRemoveAction.className = "btn btn-outline-remove text-capitalize";
        orderRemoveAction.style.marginTop = "20px";

        orderRemoveAction.addEventListener("click", removeOrders);

        ORDER_RIGHT_ITEM.appendChild(orderTitle);
        ORDER_RIGHT_ITEM.appendChild(orderRemoveAction);

        ORDER_ITEM_CONTAINER.appendChild(ORDER_LEFT_ITEM)
        ORDER_ITEM_CONTAINER.appendChild(ORDER_RIGHT_ITEM);

        ORDER_CONTENT_CONTAINER.appendChild(ORDER_ITEM_CONTAINER);
    }


    return ORDER_CONTENT_CONTAINER;
}

function removeOrders () {
    const ORDER_ID = this.getAttribute("id").split("-")[1];
    const ORDER_PAYMENT_CONTAINER = ORDER_CONTAINER.children[1];
    const NEW_PAYMENT_PTAG = ORDER_PAYMENT_CONTAINER.children[2];

    NEW_PAYMENT_PTAG.textContent = parseInt(NEW_PAYMENT_PTAG.innerHTML)-orders.filter(order => order.id == ORDER_ID)[0].price;
    localStorage.setItem("orders", JSON.stringify(RESTO_STORAGE.removeDish(parseInt(ORDER_ID))));

    this.parentElement.parentElement.remove();

    const RESPONSE_MESSAGES = document.getElementById("response-messages");
    RESPONSE_MESSAGES.textContent = "One order is removed!";
    RESPONSE_MESSAGES.style.zIndex = "1";
    RESPONSE_MESSAGES.style.opacity = 1;
    RESPONSE_MESSAGES.style.backgroundColor = "#ffb34f";
    RESPONSE_MESSAGES.style.transition = "all 0.8s";

    const si = setInterval(() => {
        RESPONSE_MESSAGES.style.opacity = 0;
        clearInterval(si);
    }, 1500);
}

function collapsePayment () {
    const ORDER_PAYMENT_CONTAINER = ORDER_CONTAINER.children[1];
    const COLLAPSE_PAYMENT_PTAG = ORDER_PAYMENT_CONTAINER.children[0].children[0];

    if(!JSON.parse(localStorage.getItem("doesPaymentCollapse"))){
        ORDER_PAYMENT_CONTAINER.className = "collapse";

        COLLAPSE_PAYMENT_PTAG.textContent = "open payment";
        localStorage.setItem("doesPaymentCollapse", true);
    }
    else {
        ORDER_PAYMENT_CONTAINER.className = "order-payment-container";

        COLLAPSE_PAYMENT_PTAG.textContent = "collapse";

        localStorage.setItem("doesPaymentCollapse", false);
    }
}