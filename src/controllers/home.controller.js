import view from "../pages/home.html";

const Home = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  return divElement;
};

export default Home;
