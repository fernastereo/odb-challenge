import view from "../pages/error404.html";

const Error404 = () => {
  const divelement = document.createElement("div");
  divelement.innerHTML = view;

  return divelement;
};

export default Error404;
