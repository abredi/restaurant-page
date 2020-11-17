import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import burgerImg from './assets/img/burger.png'
import cakeImg from './assets/img/cake.png'
import pizzaImg from './assets/img/pizza.png'
import { createHeader, createSidenav, createSelectedCategory, createCards, clearContent } from "./dom";

const contents = {cake: [], burger: [], pizza: []};
const contentElem = document.getElementById('content');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getCardContent = (num) => {
  let cardContent ={
    price: getRandomInt(100, 200),
    desc: 'sed risus ultricies tristique nulla aliquet enim tortor at auctor urna',
    location: 'Bole',
    imgPath: ''
  };

  if (num > 19) {
    cardContent.imgPath = pizzaImg; //'pizza.png';
    contents.pizza = [...contents.pizza, cardContent];
  } else if (num > 9 && num < 21) {
    cardContent.imgPath = burgerImg; //'burger.png';
    contents.burger = [...contents.burger, cardContent];
  } else {
    cardContent.imgPath = cakeImg; //'cake.png';
    contents.cake = [...contents.cake, cardContent];
  }
};

const displayContent = (activeData = [], activatedLink = '') => {
  contentElem.appendChild(createSelectedCategory(activatedLink));
  contentElem.appendChild(createCards(activeData));
};

const cleanLinkHighlight = () => {
  const prev = document.querySelectorAll('.bg-gray-400');
  prev.forEach(elem => {
    elem.classList.remove('bg-gray-400');
  });
};

const navigate = (event) => {
  cleanLinkHighlight();
  event.target.parentElement.classList.toggle('bg-gray-400');
  const linkTo = event.target.getAttribute('linkto');
  clearContent();
  displayContent(contents[linkTo], linkTo);
};

const init = () => {
  const bodyElem = document.getElementsByTagName('body');
  bodyElem[0].prepend(createSidenav(navigate));
  bodyElem[0].prepend(createHeader());

  for (let i = 0; i < 30; i++) {
    getCardContent(i);
  };
  displayContent(contents.burger, 'Burger');
};

document.addEventListener('DOMContentLoaded', (event) => {
  init();
});



