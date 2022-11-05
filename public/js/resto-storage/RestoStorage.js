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
}