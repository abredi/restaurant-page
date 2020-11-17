import cardFiller from './util';
import burgerImg from './assets/img/burger.png';

const burgerModule = () => {
  const getBurgerData = () => cardFiller(burgerImg);
  return { getBurgerData };
};

export { burgerModule as default };