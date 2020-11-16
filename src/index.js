import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import { createHeader, createSidenav, createSelectedCategory, createCards } from "./dom";

const init = () => {
  const bodyElem = document.getElementsByTagName('body');
  const content = document.getElementById('content');
  bodyElem[0].prepend(createSidenav());
  bodyElem[0].prepend(createHeader());
  content.appendChild(createSelectedCategory());
  content.appendChild(createCards());
};

init();
