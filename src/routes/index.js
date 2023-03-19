import Header from "../templates/Header";
import { views } from "../controllers";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": views.home,
  "/about": views.about,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  content.innerHTML = "";

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : views.notFound;

  content.appendChild(render());
};

export default router;
