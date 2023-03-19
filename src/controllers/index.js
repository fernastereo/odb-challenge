import Home from "./home.controller";
import About from "./about.controller";
import NotFound from "./error404.controller";

const views = {
  home: Home,
  about: About,
  notFound: NotFound,
};

export { views };
