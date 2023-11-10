function Product(brand, name, description, img, price) {
  // Sử dụng từ khóa this để thiết lập các thuộc tính của đối tượng
  this.brand = brand;
  this.name = name;
  this.description = description;
  this.img = img;
  this.price = price;
}

export { Product };
