document.addEventListener('DOMContentLoaded', () => {
  // Навигация по меню
  const navList = document.querySelector('.nav__list');
  const navItems = document.querySelectorAll('.nav__item');

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      document.documentElement.style.setProperty('--nav-translate-x', `${index * 130}px`);
      navItems.forEach(i => i.classList.remove('nav__item--active'));
      item.classList.add('nav__item--active');
    });
  });

  // Мобильное меню
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const closeBtn = document.querySelector('.nav__close');
  const body = document.body;

  function closeMenu() {
    nav.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    closeBtn.addEventListener('click', closeMenu);
    navItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
        closeMenu();
      }
    });
  }
});
