import displayNavBar from './createNav';

const getLoad = () => {
  const content = document.querySelector('#content');
  const list = ['container', 'main'];
  content.classList.add(...list);

  const navbar = displayNavBar();

  content.appendChild(navbar);
};

export default getLoad;