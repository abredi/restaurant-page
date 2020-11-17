import pizzaImg from './assets/img/pizza.png';
import cardFiller from './util';

const pizzaModule = () => {
  const getPizzaData = () => cardFiller(pizzaImg);
  return { getPizzaData };
};

export { pizzaModule as default };