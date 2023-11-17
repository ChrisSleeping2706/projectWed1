const URL = "https://654e9c8ccbc3253557430300.mockapi.io/product";
async function getAPIProduct() {
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    return data; // Trả về dữ liệu từ API
  } catch (error) {
    console.log(error);
  }
}
async function getAPIProductById(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data; // Trả về dữ liệu từ API
  } catch (error) {
    console.log(error);
  }
}

async function createAPIProduct(jsonProduct) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonProduct),
    });
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON in the response
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function deleteAPIProduct(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataDelete = response.json();
    return dataDelete;
  } catch (error) {
    console.log(error);
  }
}

async function updateAPIProduct(id, updateProduct) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    const dataUpdate = response.json();
    return dataUpdate;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAPIProduct,
  createAPIProduct,
  deleteAPIProduct,
  updateAPIProduct,
  getAPIProductById,
};
