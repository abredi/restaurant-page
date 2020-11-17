const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rawCardContent = () => ({
  price: getRandomInt(100, 200),
  desc: 'sed risus ultricies tristique nulla aliquet enim tortor at auctor urna',
  location: 'Bole',
  imgPath: '',
});

const cardFiller = (img) => {
  let cardContent = [];
  const singleContent = rawCardContent();

  for (let i = 0; i < 10; i += 1) {
    singleContent.imgPath = img;
    cardContent = [...cardContent, singleContent];
  }

  return cardContent;
};

export { cardFiller as default };