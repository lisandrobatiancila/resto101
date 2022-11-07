class RestoStorage {
    constructor() {
    }
    dishExistAlready(orders, id) {
        return orders.filter(order => order.id == id).length > 0?true:false;
    }
    addNewDish(orders, dish) {
        orders.push(dish);
        return orders;
    }
    countedOrders () {
        if(localStorage.getItem("orders")) {
            const orders = JSON.parse(localStorage.getItem("orders")).length;

            return orders > 9?orders:`0${orders}`;
        }
        return `00`;
    }
    removeDish(id) {
        let orders = JSON.parse(localStorage.getItem("orders"));

        const neworders = orders.filter(order => order.id != id);

        return neworders;
    }
}