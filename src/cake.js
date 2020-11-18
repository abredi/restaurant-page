import cardFiller from './util';
import cakeImg from './assets/img/cake.png';

const cakeModule = () => {
  const getCakeData = () => cardFiller(cakeImg);
  return { getCakeData };
};

export { cakeModule as default };