import { getAPIuserById, getAPIuser } from "../services/api.js";

getUser();
let user = [];
async function getUser() {
  const data = await getAPIuser();
  try {
    user = data;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

function checkAccount(account, password) {
  const accountSignIn = user.filter((user) => {
    return user.account === account && user.password === password;
  });
  console.log(typeof account, typeof password);
  if (accountSignIn.length === 0) {
    getElement(
      "#alertSignIn"
    ).innerHTML = `<span>Nhập sai tài khoản hoặc là mật khẩu!!!!!!!!!!!!!!!!!!</span>`;
  } else {
    if (account === "admin" && password === "admin") {
      getElement("#alertSignIn").innerHTML = `<div class="register-link">
        <p>
            Chào mừng quản trị viên 
            <a href="../../admin/view/admin.html">
                ADMIN
            </a>
        </p>
    </div>`;
    } else {
      getElement("#alertSignIn").innerHTML = `<div class="register-link">
        <p>
            Shoe Shop xin chào quý khách
            <a href="../../store/view/store.html">
                PRODUCTS
            </a>
        </p>
    </div>`;
    }
  }
}

getElement(".btn-login").addEventListener("click", () => {
  let account = getElement("#account").value;
  let password = getElement("#password").value;
  checkAccount(account, password);
});

// help
function getElement(selector) {
  return document.querySelector(selector);
}
