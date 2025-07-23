// Скрипт для кнопки перключателя языка

document.querySelectorAll('.header__lang-switch__btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.header__lang-switch__btn').forEach(btn => {
      btn.classList.remove('header__lang-switch__btn--active')
      btn.setAttribute('aria-selected', 'false')
    })

    button.classList.add('header__lang-switch__btn--active')
    button.setAttribute('aria-selected', 'true')

    const langSwitch = document.querySelector('.header__lang-switch')
    langSwitch.classList.remove('header__lang-switch--en')
    if (button.dataset.lang === 'en') {
      langSwitch.classList.add('header__lang-switch--en')
    }

    console.log(`Выбран язык: ${button.dataset.lang}`)
  })
})

// Ховер на блоки секции Наши проекты

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.projects__card')
  const track = document.querySelector('.projects__track')
  const firstCard = cards[0]

  const clearActiveClasses = () => {
    cards.forEach(card => card.classList.remove('projects__card--active'))
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      clearActiveClasses()
      card.classList.add('projects__card--active')
    })
  })

  track.addEventListener('mouseleave', () => {
    clearActiveClasses()
    firstCard.classList.add('projects__card--active')
  })
})
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.projects__card')
  let activeCard = null

  projectCards.forEach(card => {
    card.addEventListener('click', e => {
  
      if (window.innerWidth <= 768) {
    
        if (card === activeCard) {
          card.classList.remove('projects__card--active')
          activeCard = null
        } else {
      
          if (activeCard) {
            activeCard.classList.remove('projects__card--active')
          }
      
          card.classList.add('projects__card--active')
          activeCard = card
        }
      }
    })
  })

  // Обработка изменения размера окна
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
  
      if (activeCard) {
        activeCard.classList.remove('projects__card--active')
        activeCard = null
      }
    }
  })
})
