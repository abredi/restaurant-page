const createElem = (elemName, classes = [], attrs = '') => {
  const elem = document.createElement(elemName);
  if (classes.length > 0) {
    elem.classList.add(...classes);
  }
  
  if (attrs !== '') {
    if (typeof attrs === 'string') {
      attrs = { id: attrs };
    }
    for (const key in attrs) {
      if (attrs.hasOwnProperty(key)) {
        elem.setAttribute(key, attrs[key]);
      }
    };
  };
  return elem;
};

const createCard = () => {
  const cardElem = createElem('div', ['flex', 'flex-col', 'w-64', 'max-w-xs', 'p-4', 'm-2', 'gap-y-4']);
  const cardPriceTagElem = createElem('span', ['flex', 'justify-end', 'text-teal-500']);
  const cardImgElem = createElem('i', ['self-center', 'w-20', 'h-20', 'bg-cover', 'bg-burger']);
  const cardFooter = createElem('div', ['self-center', 'w-20', 'h-20', 'bg-cover', 'bg-burger']);
  const cardFooterText = createElem('div');
  const cardDesc = createElem('p', ['mb-2', 'text-sm', 'text-gray-700']);
  const cardLocation = createElem('i', ['flex', 'justify-start', 'text-teal-500']);
  const cardAddToCart = createElem('button', ['flex', 'text-xl', 'font-thin', 'items-center',
    'outline-none', 'justify-center', 'w-10', 'h-10', 'text-gray-100', 'bg-yellow-500',
    'rounded-full', 'h-min-10', 'min-w-10']);
  cardPriceTagElem.innerText = '4Br';
  cardAddToCart.innerText = '+';
  cardDesc.innerText = `sed risus ultricies tristique nulla aliquet enim tortor at auctor urna`;
  cardFooterText.appendChild(cardDesc);
  cardFooterText.appendChild(cardLocation);
  cardFooter.appendChild(cardFooterText);
  cardFooter.appendChild(cardAddToCart);
  cardElem.appendChild(cardPriceTagElem);
  cardElem.appendChild(cardImgElem);
  cardElem.appendChild(cardFooter);
  return cardElem;
};

const createCards = () => {
  const cardContainerElem = createElem('div', ['flex', 'flex-row', 'py-4', 'flex-wrap']);
  for (let index = 0; index < 10; index++) {
    cardContainerElem.appendChild(createCard());
  };
  return cardContainerElem;
};

const createListItem = (bgImg = '', active = '') => {
  let liCls = ['rounded-full', 'p-3'];
  if (active !== '') {
    liCls = [...liCls, active];
  }
  const li = createElem('li', liCls);
  const a = createElem('a', ['block', 'w-8', 'h-8', 'bg-transparent', bgImg]);
  li.appendChild(a);
  return li;
};

const createList = () => {
  const listWrapper = createElem('div', ['flex', 'justify-center', 'align-center']);
  const ul = createElem('ul', ['flex', 'flex-col', 'gap-y-16']);
  ['bg-pizza', 'bg-cake', 'bg-burger'].forEach((img, i) => {
    const list = createListItem(img, i == 1 ? 'bg-gray-300' : '');
    ul.appendChild(list);
  });
  listWrapper.appendChild(ul);
  return listWrapper;
};

const createSNHeading = () => {
  const heading = createElem('h1', ['mb-8', 'uppercase', 'text-xl', 'font-light', 'text-center', 'text-gray-700']);
  heading.innerText = 'Effoyy';
  return heading;
};

const createSNFooter = () => {
  const sidenavFooterElem = createElem('div', ['grid', 'justify-center', 'align-center']);
  const settingLink = createElem('a', ['block', 'w-8', 'h-8', 'bg-transparent', 'bg-cover', 'bg-setting']);
  sidenavFooterElem.appendChild(settingLink);
  return sidenavFooterElem;
};
 
const createSidenav = () => {
  const sideNavElem = createElem('aside', ['row-span-full','pt-8','p-12','top-0','box-border',
  'flex','flex-col','justify-between','sticky','h-screen','min-h-screen']);
  sideNavElem.appendChild(createSNHeading());
  sideNavElem.appendChild(createList());
  sideNavElem.appendChild(createSNFooter());
  return sideNavElem;
};

const createSelectedCategory = () => {
  const currentHeading = createElem('h2', ['mb-4','ml-2','text-xl','font-hairline','text-gray-700']);
  currentHeading.innerText = 'Burger';
  return currentHeading;
};

const createHeader = () => {
  const header = createElem('header', ['w-full','p-8','col-start-2','h-16']);
  const headingWrapper = createElem('div', ['flex','items-center','justify-center']);
  const welcomMsg = createElem('h2', ['text-2xl','font-light','leading-tight','text-gray-700']);
  welcomMsg.innerText = 'Welcome to Reziz';
  headingWrapper.appendChild(welcomMsg);
  header.appendChild(headingWrapper);
  return header;
};

export { createElem, createCard, createCards, createListItem, createList,
  createSNFooter, createSidenav, createSelectedCategory, createHeader };