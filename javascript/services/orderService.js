import { Order } from "../model/orders.js";
import PIZZASERVICE from "./pizzaService.js";

const ORDERSERVICES = {
    orderList:[],
    totalBill:0,
    addToCart(pizzaId){
        const pizza =  PIZZASERVICE.serachPizza(pizzaId);
        // console.log(pizza);
        // create references
        let orderObj = new Order(1,pizza.id,"Aman ",pizza.price,pizza.name);
        this.totalBill = this.totalBill + this.makeBill(pizza.price);
        this.orderList.push(orderObj);
        console.log(this.orderList);

    },
    getTotalOrders(){
        return this.orderList.length;
    },
    getTotalBill(){
        return this.totalBill;
    },
    makeBill(value){
        return parseFloat(value.slice(1));
    },
    getPizzaName(){
        return this.orderList.name;
    },
    
    getPizzaPrice(){
        return this.orderList.price;
    }
}

export default ORDERSERVICES;