import view from "../pages/home.html";
import prepareData from "../utils/prepareData";
import Repository from "../templates/Repository";
import Spinner from "../templates/Spinner";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const btnSearchRepo = divElement.querySelector("#btnSearchRepo");
  const txtSearchRepo = divElement.querySelector("#txtSearchRepo");
  btnSearchRepo.addEventListener("click", async () => {
    const loading = divElement.querySelector("#loading");
    loading.innerHTML = await Spinner();

    const resp = await prepareData(txtSearchRepo.value);

    const divResponse = divElement.querySelector("#response");
    divResponse.innerHTML = Repository(resp);
    loading.innerHTML = "";
  });

  return divElement;
};

export default Home;
