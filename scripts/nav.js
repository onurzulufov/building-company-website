document.querySelectorAll('.nav__item a').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav__item').forEach(item => {
      item.classList.remove('nav__item--active');
      item.querySelector('a').removeAttribute('aria-current');
    });
    link.parentElement.classList.add('nav__item--active');
    link.setAttribute('aria-current', 'page');
    
    const navList = document.querySelector('.nav__list');
    const itemWidth = 130;
    const gap = 10;
    const translateX = index * (itemWidth + gap);
    navList.style.setProperty('--nav-translate-x', `${translateX}px`);
    
    console.log(`Активный пункт: ${link.textContent}, translateX: ${translateX}px`);
  });
});