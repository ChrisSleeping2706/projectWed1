const URL = "https://654e9c8ccbc3253557430300.mockapi.io/account";
async function getAPIuser() {
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
async function getAPIuserById(id) {
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

async function createAPIuser(jsonUser) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonUser),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Wait for the JSON Promise to resolve
    const responseData = await response.json();
    // Use the parsed JSON data
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAPIuser(id) {
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

async function updateAPIuser(id, updateUser) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });
    const dataUpdate = response.json();
    return dataUpdate;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAPIuser,
  createAPIuser,
  deleteAPIuser,
  updateAPIuser,
  getAPIuserById,
};
