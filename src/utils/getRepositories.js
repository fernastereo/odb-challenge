import token from "../../tokens.json";
const API = "https://api.github.com";

const getRepositories = async (repoName) => {
  const apiUrl = repoName ? `${API}/search/repositories?q=${repoName}` : API;

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

export default getRepositories;
