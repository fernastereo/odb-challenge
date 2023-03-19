import Header from "../templates/Header";
import Home from "../controllers/home.controller";
import About from "../controllers/about.controller";
import Error404 from "../controllers/error404.controller";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/about": About,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  content.innerHTML = "";

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.appendChild(render());
};

export default router;
