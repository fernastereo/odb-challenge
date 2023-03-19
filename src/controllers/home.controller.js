import view from "../pages/home.html";
import getData from "../utils/getRepositories";
import Repository from "../templates/Repository";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const btnSearchRepo = divElement.querySelector("#btnSearchRepo");
  const txtSearchRepo = divElement.querySelector("#txtSearchRepo");
  btnSearchRepo.addEventListener("click", async () => {
    const resp = await getData(txtSearchRepo.value);
    const divResponse = divElement.querySelector("#response");
    divResponse.innerHTML = Repository(resp.items);
  });

  return divElement;
};

export default Home;
