import {
  createProduct,
  deleteProduct,
  updateProduct,
  getValueProduct,
} from "../../admin/controller/admin.js";
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
    btnAddProduct.style.zIndex = "1000000000000000";
    document.body.style.overflow = "auto";
    formProductContainer.style.display = "none";
  } else {
    formProductContainer.style.display = "block";
    formProductBox.style.position = "absolute";
    formProductBox.style.top = "50%";
    formProductBox.style.left = "50%";
    formProductBox.style.transform = "translate(-50%, 50%)";
    document.body.style.overflow = "hidden";
    btnAddProduct.style.zIndex = "0";
  }
}

getElement(".btn-addProduct").addEventListener("click", () => {
  getElement("#product-brand").value = "";
  getElement("#product-name").value = "";
  getElement("#product-price").value = "";
  getElement("#product-image").value = "";
  getElement("#product-description").value = "";
  openBtnProduct();
});
getElement(".fa-circle-xmark").addEventListener("click", () => {
  let btnCreate = getElement("#btn-createProduct");
  let btnUpdate = getElement("#btn-update");
  btnCreate.style.display = "block";
  btnUpdate.style.display = "none";
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
  openBtnProduct();
  createProduct();
});
// delete product
getElement("#tableProduct").addEventListener("click", (event) => {
  const id = event.target.id;
  const productId = event.target.getAttribute("keyProduct");
  switch (id) {
    case "btn-deleteProduct":
      deleteProduct(productId);
      break;
  }
});
//update product
let productID;
getElement("#tableProduct").addEventListener("click", (event) => {
  const id = event.target.id;
  productID = event.target.getAttribute("keyProduct");
  switch (id) {
    case "btn-updateProduct":
      openBtnProduct();
      let btnCreate = getElement("#btn-createProduct");
      let btnUpdate = getElement("#btn-update");
      btnCreate.style.display = "none";
      btnUpdate.style.display = "block";
      getValueProduct(productID);
      break;
  }
});
getElement("#btn-update").addEventListener("click", () => {
  updateProduct(productID);
  let btnCreate = getElement("#btn-createProduct");
  let btnUpdate = getElement("#btn-update");
  if (btnCreate.style.display === "block") {
    btnUpdate.style.display = "block";
    btnCreate.style.display = "none";
  } else {
    btnUpdate.style.display = "none";
    btnCreate.style.display = "block";
  }
  openBtnProduct();
});

// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
