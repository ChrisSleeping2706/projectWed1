import { getAPIProduct, getAPIProductById } from "../services/api.js";
getProducts();
let productList = [];
let cartList = [];

function getProducts() {
  getAPIProduct()
    .then((response) => {
      productList = response;
      renderProduct(productList);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function getProductById(id) {
  try {
    const data = await getAPIProductById(id);
    cartList.push(data);
    renderCart(cartList);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const renderProduct = (productList) => {
  // Sử dụng reduce để tích hợp từng sản phẩm vào chuỗi HTML kết quả
  let productHTML = productList.reduce((html, product) => {
    return (
      html +
      `
      <div class="box">
        <div class="icons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-plus" id="add-cart" keyCart="${product.id}"></i>
        </div>
        <div class="content">
          <img src=${product.img} alt="">
          <h3>${product.name}</h3>
          <div class="price">$${product.price} - <span>$3000</span></div>
          <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
          </div>
        </div>
      </div>
      `
    );
  }, "");

  // Hiển thị chuỗi HTML hoặc thực hiện các hành động khác dựa trên chuỗi này
  getElement(".product__box").innerHTML = productHTML;
};
renderProduct(productList);

function renderCart(cartList) {
  let cartListHTML = cartList.reduce((html, product) => {
    return (
      html +
      `
      <div class="item">
      <div class="image">
                    <img src="${product.img}">
                </div>
                <div class="name">
                ${product.name}
                </div>
                <div class="totalPrice">$${product.price}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>$${product.price}</span>
                    <span class="plus">></span>
                </div>
      
      </div>
      `
    );
  }, "");

  // Hiển thị chuỗi HTML hoặc thực hiện các hành động khác dựa trên chuỗi này
  getElement(".listCart").innerHTML = cartListHTML;
}
// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}

export { getProductById };
