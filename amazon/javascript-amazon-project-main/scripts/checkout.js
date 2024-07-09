import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

new Promise(()=>{
    console.log('promise')
})

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})

