const addJavaScriptClasses = () => {
  document.querySelector('.page-header').classList.add('page-header--js');
  document.querySelector('.logo-menu--header').classList.add('logo-menu--js');
};

const checkIfMenuOpened = (header) => {
  if (header.classList.contains('page-header--is-opened')) {
    return true;
  }
  return false;
};

const openMenu = (header, logoMenu, menuToggle) => {
  header.classList.add('page-header--is-opened');
  logoMenu.classList.add('logo-menu--is-opened');
  menuToggle.classList.add('logo-menu__menu-toggle--is-opened');
  menuToggle.classList.remove('logo-menu__menu-toggle--is-closed');
};

const closeMenu = (header, logoMenu, menuToggle) => {
  header.classList.remove('page-header--is-opened');
  logoMenu.classList.remove('logo-menu--is-opened');
  menuToggle.classList.remove('logo-menu__menu-toggle--is-opened');
  menuToggle.classList.add('logo-menu__menu-toggle--is-closed');
};

const listenMenuToggle = () => {
  const header = document.querySelector('.page-header');
  const logoMenu = header.querySelector('.logo-menu');
  const menuToggle = header.querySelector('.logo-menu__menu-toggle');

  menuToggle.addEventListener('click', () => {
    if (checkIfMenuOpened(header)) {
      closeMenu(header, logoMenu, menuToggle);
    } else {
      openMenu(header, logoMenu, menuToggle);
    }
  });
};

export {addJavaScriptClasses, listenMenuToggle};
