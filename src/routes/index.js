import Header from "../templates/Header";
import Footer from "../templates/Footer";
import { views } from "../controllers";
import getHash from "../utils/getHash";

const routes = {
  "/": views.home,
  "/about": views.about,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const footer = null || document.getElementById("footer");
  const content = null || document.getElementById("content");
  content.innerHTML = "";

  header.innerHTML = await Header();
  footer.innerHTML = await Footer();
  let route = getHash(location.hash);

  let render = routes[route] ? routes[route] : views.notFound;

  content.appendChild(render());
};

export default router;
