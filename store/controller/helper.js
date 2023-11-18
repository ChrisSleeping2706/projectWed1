import { getProductById } from "../../store/controller/store.js";

getElement(".product__box").addEventListener("click", (event) => {
  let id = event.target.id;
  let keyCart = event.target.attributes.keyCart.value;
  if (id === "add-cart") {
    getProductById(keyCart);
  }
});

getElement(".fa-shopping-cart").addEventListener("click", () => {
  getElement("body").classList.toggle("showCart");
});
getElement(".close").addEventListener("click", () => {
  getElement("body").classList.toggle("showCart");
});

// help
function getElement(selector) {
  return document.querySelector(selector);
}
