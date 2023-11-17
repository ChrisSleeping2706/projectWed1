function User(account, password, email, mssv) {
  this.account = account;
  this.password = password;
  this.email = email;
  this.mssv = mssv;
  this.positionJob = "client";
  this.status = false;
  this.confirmProduct = [];
}

export { User };
