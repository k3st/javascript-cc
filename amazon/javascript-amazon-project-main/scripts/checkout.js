import { loadProducts,loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage(){
    try{      
    await loadProductsFetch();
    console.log('success')
    } catch (error){
        console.log('Unexpected Error \n',error)
    }    
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