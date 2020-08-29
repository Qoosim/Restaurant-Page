const displayNav = (() => {
  const menuBarArr = ['Home', 'Menu', 'Contact'];

  const navbar = document.createElement('div');
  const list = ['navbar', 'navbar-expand', 'navbar-light'];
  navbar.classList.add(...list);
  navbar.setAttribute('style', 'background: #174038;');

  const insertItem = document.createElement('div');
  insertItem.classList.add('menu');

  menuBarArr.forEach((item) => {
    const menuContainer = document.createElement('button');
    menuContainer.classList.add('menu-item');
    menuContainer.innerHTML = item;
    insertItem.appendChild(menuContainer);
  });

  navbar.appendChild(insertItem);

  return navbar;
})();

export default displayNav;
