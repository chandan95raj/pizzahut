const ORDERSERVICES = {
    orderList: [],
    
    addToCart(pizzaId) {
        let pizza = this.orderList.find(item => item.id === pizzaId);    
        this.orderList.push({ id: pizzaId});
        console.log(this.orderList);
    }
};

export default ORDERSERVICES;