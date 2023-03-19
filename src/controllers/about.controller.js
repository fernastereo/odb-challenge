import view from "../pages/about.html";

const About = () => {
  const divelement = document.createElement("div");
  divelement.innerHTML = view;

  return divelement;
};

export default About;
