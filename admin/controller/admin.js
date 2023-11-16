import {
  getAPIProduct,
  createAPIProduct,
  deleteAPIProduct,
  updateAPIProduct,
} from "../../store/services/api.js";
import { getAPIuser } from "../../admin/services/api.js";
import { Product } from "../../store/model/shoeShop.js";
getTableProduct();
getTableUser();
let tableProduct = [];
let tableUser = [];
async function getTableProduct() {
  const data = await getAPIProduct();
  try {
    tableProduct = data;
    renderTableProduct(tableProduct);
  } catch (error) {}
}

async function getTableUser() {
  const data = await getAPIuser();
  try {
    tableUser = data;
    renderTableUser(tableUser);
  } catch (error) {
    console.log(error);
  }
}

// create product
async function createProduct() {
  const brand = getElement("#product-brand").value;
  const name = getElement("#product-name").value;
  const price = getElement("#product-price").value;
  const img = getElement("#product-image").value;
  const description = getElement("#product-description").value;
  const newProduct = new Product(brand, name, description, img, price);
  tableProduct.push(newProduct);
  try {
    renderTableProduct(tableProduct);
    await createAPIProduct(newProduct);
    location.reload();
  } catch (error) {
    console.error(error);
  }
}

// delete product
async function deleteProduct(productID) {
  tableProduct = tableProduct.filter((product) => product.id !== productID);
  try {
    renderTableProduct(tableProduct);
    await deleteAPIProduct(productID);
  } catch (error) {
    console.log(error);
  }
}
// update product
function getValueProduct(productID) {
  let productUpdate = tableProduct.filter(
    (product) => product.id === productID
  );
  getElement("#product-brand").value = productUpdate[0].brand;
  getElement("#product-name").value = productUpdate[0].name;
  getElement("#product-price").value = productUpdate[0].price;
  getElement("#product-image").value = productUpdate[0].img;
  getElement("#product-description").value = productUpdate[0].description;
}
async function updateProduct(productID) {
  const brand = getElement("#product-brand").value;
  const name = getElement("#product-name").value;
  const price = getElement("#product-price").value;
  const img = getElement("#product-image").value;
  const description = getElement("#product-description").value;
  const newProduct = new Product(brand, name, description, img, price);
  const index = tableProduct.findIndex((product) => product.id === productID);
  tableProduct[index] = { ...tableProduct[index], ...newProduct };
  try {
    renderTableProduct(tableProduct);
    await updateAPIProduct(productID, tableProduct[index]);
  } catch (error) {
    console.log(error);
  }
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
        <td><img src=${product.img} alt="#"></td>
        <td>
          <button type="button" id="btn-deleteProduct" keyProduct="${product.id}">xóa</button>
          <button type="button" id="btn-updateProduct" keyProduct="${product.id}">cập nhật</button>
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
          <td>${user.email}</td>
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
export { createProduct, deleteProduct, updateProduct, getValueProduct };
