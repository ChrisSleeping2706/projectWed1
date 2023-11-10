import { createProduct, deleteProduct } from "../../admin/controller/admin.js";
// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = getElement(".toggle");
let navigation = getElement(".navigation");
let main = getElement(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function openBtnProduct() {
  let formProductContainer = getElement(".formProduct_container");
  let formProductBox = getElement(".formProduct_box");
  let btnAddProduct = getElement(".btn-addProduct");
  if (formProductContainer.style.display === "block") {
    formProductContainer.style.display = "none";
    btnAddProduct.style.zIndex = "1000000000000000";
    document.body.style.overflow = "auto";
  } else {
    formProductContainer.style.display = "block";
    formProductBox.style.position = "absolute";
    formProductBox.style.top = "50%";
    formProductBox.style.left = "50%";
    formProductBox.style.transform = "translate(-50%, 3%)";
    document.body.style.overflow = "hidden";
    btnAddProduct.style.zIndex = "0";
  }
}

getElement(".btn-addProduct").addEventListener("click", () => {
  openBtnProduct();
});
getElement(".fa-circle-xmark").addEventListener("click", () => {
  openBtnProduct();
});

// open product và user
let btnProduct = getElement("#btn-product");
let btnUser = getElement("#btn-user");

function openProductUser() {
  let detailsProduct = getElement("#detailsProduct");
  let detailsUser = getElement("#detailsUser");
  if (detailsProduct.style.display === "none") {
    detailsUser.style.display = "none";
    detailsProduct.style.display = "block";
  } else {
    detailsUser.style.display = "block";
    detailsProduct.style.display = "none";
  }
}
btnProduct.addEventListener("click", () => {
  openProductUser();
});
btnUser.addEventListener("click", () => {
  openProductUser();
});
// create product
let btnCreateProduct = getElement("#btn-createProduct");
btnCreateProduct.addEventListener("click", () => {
  createProduct();
  setTimeout(() => {
    location.reload();
  }, 2000);
});

// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
