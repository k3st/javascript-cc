import { loadProducts,loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage(){
    console.log('load page');

    await loadProductsFetch();
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage()

/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/