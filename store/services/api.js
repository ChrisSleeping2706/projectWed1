const URL = "https://run.mocky.io/v3/37f3ce6a-cd0e-4a59-98fd-98e12d47a333";
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

export { getAPIProduct };
