import { getAPIProduct } from "../services/api.js";
getProducts();
let productList = [];

function getProducts(searchValue) {
  getAPIProduct(searchValue)
    .then((response) => {
      productList = response;
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
      <div class="box">
        <div class="icons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="content">
          <img src=${product.img} alt="">
          <h3>${product.name}</h3>
          <div class="price">$5000  <span>$${product.price}</span></div>
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
// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
