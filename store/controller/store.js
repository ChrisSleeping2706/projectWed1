import { getAPIProduct } from "../services/api.js";
getProducts();
let productList = [];

function getProducts(searchValue) {
  getAPIProduct(searchValue)
    .then((response) => {
      productList = response.product;
      renderProduct(productList);
    })
    .catch((error) => {
      console.log(error);
    });
}

const renderProduct = (productList) => {
  // Sử dụng reduce để tích hợp từng sản phẩm vào chuỗi HTML kết quả
  let productHTML = productList.reduce((html, product) => {
    return (
      html +
      `
        <div class="product__card">
          <div class="product__img">
            <img src="${product.img}" alt="${product.name}">
          </div>
          <div class="product__title">
            <span class="product__trademark">${product.brand}</span>
            <h5 class="product__description">${product.description}</h5>
            <h4 class="product__price">${product.price}</h4>
          </div>
          <div class="product__cart">
            <button>mua hàng <i class="fa-solid fa-cart-shopping" style="color: #000000;"></i></button>
          </div>
        </div>
      `
    );
  }, "");

  // Hiển thị chuỗi HTML hoặc thực hiện các hành động khác dựa trên chuỗi này
  getElement(".product__box").innerHTML = productHTML;
};
renderProduct(productList);
// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
