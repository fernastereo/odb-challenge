import token from "../../tokens.json";
const API = "https://api.github.com";

const getUser = async (userName) => {
  const apiUrl = userName ? `${API}/users/${userName}` : API;

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  };

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error", error);
  }
};

export default getUser;
