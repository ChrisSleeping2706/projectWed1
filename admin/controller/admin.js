import {
  getAPIProduct,
  createAPIProduct,
  deteleAPIProduct,
} from "../../store/services/api.js";
import { getAPIuser } from "../../admin/services/api.js";
import { Product } from "../../store/model/shoeShop.js";
let tableProduct = [];
let tableUser = [];
getTableProduct();
getTableUser();
function getTableProduct() {
  getAPIProduct()
    .then((result) => {
      tableProduct = result;
      renderTableProduct(tableProduct);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getTableUser() {
  getAPIuser()
    .then((result) => {
      tableUser = result;
      renderTableUser(tableUser);
    })
    .catch((err) => {
      console.log(err);
    });
}

// create product
function createProduct() {
  const brand = getElement("#product-brand").value;
  const name = getElement("#product-name").value;
  const price = getElement("#product-price").value;
  const img = getElement("#product-image").value;
  const description = getElement("#product-description").value;
  console.log(img);
  const newProduct = new Product(brand, name, description, img, price);
  console.log(newProduct);
  tableProduct.push(newProduct);
  createAPIProduct(newProduct);
}

// delete product
function deleteProduct(productID) {
  console.log(productID);
  deteleAPIProduct(productID);
}

function renderTableProduct(tableProduct) {
  let HTML = tableProduct.reduce((html, product) => {
    return (
      html +
      `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}$</td>
        <td>${product.brand}</td>
        <td><img src=${product.img} alt=""></td>
        <td>
          <button id="btn-deleteProduct" onclick="deleteProduct('${product.id}')">xóa</button>
          <button type="button" id="btn-updateProduct">cập nhật</button>
        </td>
      </tr>
      `
    );
  }, "");

  // Hiển thị chuỗi HTML hoặc thực hiện các hành động khác dựa trên chuỗi này
  getElement("#tableProduct").innerHTML = HTML;
}
function renderTableUser(tableUser) {
  let HTML = tableUser.reduce((html, user) => {
    return (
      html +
      `
      <tr>
          <td>${user.id}</td>
          <td>${user.account}</td>
          <td>${user.password}</td>
          <td>${user.mail}</td>
          <td>${user.MSSV}</td>
          <td>${user.positionJob}</td>
          <td>
            <button>xác nhận đơn hàng</button>
          </td>
      </tr>
      `
    );
  }, "");

  // Hiển thị chuỗi HTML hoặc thực hiện các hành động khác dựa trên chuỗi này
  getElement("#tableUser").innerHTML = HTML;
}

// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
export { createProduct, deleteProduct };
