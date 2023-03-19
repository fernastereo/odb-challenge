import view from "../pages/home.html";
import prepareData from "../utils/prepareData";
import Repository from "../templates/Repository";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const btnSearchRepo = divElement.querySelector("#btnSearchRepo");
  const txtSearchRepo = divElement.querySelector("#txtSearchRepo");
  btnSearchRepo.addEventListener("click", async () => {
    const resp = await prepareData(txtSearchRepo.value);

    const divResponse = divElement.querySelector("#response");
    divResponse.innerHTML = Repository(resp);
  });

  return divElement;
};

export default Home;
