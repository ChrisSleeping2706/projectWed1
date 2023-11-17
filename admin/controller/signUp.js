import { createAPIuser } from "../../admin/services/api.js";
import { User } from "../../admin/model/managementStore.js";

async function createUser() {
  let account = getElement("#account").value;
  let password = getElement("#password").value;
  let mssv = getElement("#mssv").value;
  let email = getElement("#email").value;

  const dataUser = new User(account, password, email, mssv);
  console.log(dataUser);
  try {
    await createAPIuser(dataUser);
    getElement("#signUp-success").innerHTML =
      "đăng kí thành công mời về trang đăng nhập để đăng nhập tài khoản";
  } catch (error) {
    console.log(error);
  }
}

// USER
// create user
getElement(".btn-signUp").addEventListener("click", (event) => {
  createUser();
});

// help
function getElement(selector) {
  return document.querySelector(selector);
}
