import { getAPIProduct } from "../../store/services/api.js";
import { getAPIuser } from "../../admin/services/api.js";
let tableProduct = [];
let tableUser = [];
function getTableProduct() {
  getAPIProduct()
    .then((result) => {
      tableProduct = result.product;
      console.log(tableProduct);
      renderTableProduct(tableProduct);
    })
    .catch((err) => {
      console.log(err);
    });
}
getTableProduct();

function getTableUser() {
  getAPIuser()
    .then((result) => {
      tableUser = result.account;
      renderTableUser(tableUser);
      console.log(tableUser);
    })
    .catch((err) => {
      console.log(err);
    });
}
getTableUser();

function renderTableProduct(tableProduct) {
  let HTML = tableProduct.reduce((html, product) => {
    return (
      html +
      `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.brand}</td>
        <td><img src=${product.img} alt=""></td>
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
