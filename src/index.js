import './css/vendor/tailwind.vendor.css';
import './css/style.css';
import {
  createHeader, createSidenav, cleanLinkHighlight,
  createSelectedCategory, createCards, clearContent,
} from './dom';
import cakeModule from './cake';
import pizzaModule from './pizza';
import burgerModule from './burger';

const pizza = pizzaModule();
const burger = burgerModule();
const cake = cakeModule();

const contentElem = document.getElementById('content');

const displayContent = (activeData = [], activatedLink = '') => {
  contentElem.appendChild(createSelectedCategory(activatedLink));
  contentElem.appendChild(createCards(activeData));
};

const getCurrentContent = (linkTo) => {
  switch (linkTo) {
    case 'cake':
      return cake.getCakeData();
    case 'pizza':
      return pizza.getPizzaData();
    default:
      return burger.getBurgerData();
  }
};

const navigate = (event) => {
  cleanLinkHighlight();
  clearContent();

  event.target.parentElement.classList.toggle('bg-gray-400');
  const linkTo = event.target.getAttribute('linkto');

  const currentContent = getCurrentContent(linkTo);
  displayContent(currentContent, linkTo);
};

const init = () => {
  const bodyElem = document.getElementsByTagName('body');
  bodyElem[0].prepend(createSidenav(navigate));
  bodyElem[0].prepend(createHeader());
  const firstElem = document.querySelector('aside ul > li:first-child');
  firstElem.classList.toggle('bg-gray-400');
  displayContent(pizza.getPizzaData(), 'Pizza');
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});
