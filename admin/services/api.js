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

export { getAPIuser };
