// Скрипт для кнопки перключателя языка

document.querySelectorAll('.header__lang-switch__btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.header__lang-switch__btn').forEach(btn => {
      btn.classList.remove('header__lang-switch__btn--active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    button.classList.add('header__lang-switch__btn--active');
    button.setAttribute('aria-selected', 'true');
    
    const langSwitch = document.querySelector('.header__lang-switch');
    langSwitch.classList.remove('header__lang-switch--en');
    if (button.dataset.lang === 'en') {
      langSwitch.classList.add('header__lang-switch--en');
    }
    
    console.log(`Выбран язык: ${button.dataset.lang}`);
  });
});