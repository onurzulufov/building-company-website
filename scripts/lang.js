document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.header__lang-switch__btn')
  const langSwitchContainer = document.querySelector('.header__lang-switch')

  const translations = {
    ru: {
      'nav__item-home': 'Главная',
      'nav__item-about': 'О нас',
      'nav__item-projects': 'Проекты',
      'nav__item-contacts': 'Контакты',
      'nav__item-news': 'Новости',
      header__title: 'СТРОИМ КАЧЕСТВЕННО И БЕЗОПАСНО',
      btn__projects: 'Наши проекты',
      btn__contacts: 'Связаться с нами',
      'about-company__title': 'О компании',
      'about-company__text':
        'Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. <br> <br> Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта. Это текст о компании. Он необходим для дальнейшего продвижения Вашего сайта.',
      'info-grid__item-text-1': 'Текст, который нужно вставить. Текст, который нужно вставить.',
      'info-grid__item-text-2': 'Текст, который нужно вставить. Текст, который нужно вставить.',
      'info-grid__item-text-3': 'Текст, который нужно вставить. Текст, который нужно вставить.',
      'info-grid__item-text-4': 'Текст, который нужно вставить. Текст, который нужно вставить.',
      'projects__section-title': 'Наши проекты',
      'projects__title-1': 'НАЗВАНИЕ ОДНОГО ИЗ ВАШИХ ПРОЕКТОВ',
      'projects__description-1':
        'Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию.',
      'projects__title-2': 'НАЗВАНИЕ ОДНОГО ИЗ ВАШИХ ПРОЕКТОВ',
      'projects__description-2':
        'Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию.',
      'projects__title-3': 'НАЗВАНИЕ ОДНОГО ИЗ ВАШИХ ПРОЕКТОВ',
      'projects__description-3':
        'Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию.',
      'projects__title-4': 'НАЗВАНИЕ ОДНОГО ИЗ ВАШИХ ПРОЕКТОВ',
      'projects__description-4':
        'Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию. Текст описание вашего проекта. Вам нужно будет предоставить нужную инормацию.',
      advantages__title: 'Наши преимущества',
      'advantages__item-title-1': 'Гарантия качества',
      'advantages__item-text-1':
        'Строим по стандартам, используем сертифицированные материалы и проверенные технологии.',
      'advantages__item-title-2': 'Соблюдение сроков',
      'advantages__item-text-2': 'Работаем по чёткому плану и сдаём объекты точно в оговорённые сроки',
      'advantages__item-title-3': 'Безопасность на первом месте',
      'advantages__item-text-3': 'Соблюдаем строительные, санитарные и противопожарные нормы на всех этапах.',
      'advantages__item-title-4': 'Прозрачная смета',
      'advantages__item-text-4': 'Честный расчёт стоимости без скрытых услуг и неожиданных доплат.',
      'advantages__item-title-5': 'Индивидуальный подход',
      'advantages__item-text-5': 'Учитываем задачи, бюджет и особенности объекта каждого клиента.',
      'advantages__item-title-6': 'Опытная команда',
      'advantages__item-text-6': 'Над проектами работают квалифицированные инженеры, архитекторы и строители.',
      specialization__title: 'На чём специализируется<br />наша компания',
      'specialization__list-item-1': 'Строительство промышленных и гражданских зданий и сооружений',
      'specialization__list-item-2': 'Проектно-изыскательские работы в строительстве',
      'specialization__list-item-3': 'Экспертные работы и инжиниринговые услуги в строительстве',
      'specialization__list-item-4': 'Реконструкция и капитальный ремонт',
      'specialization__list-item-5': 'Реставрационные работы',
      'specialization__list-item-6': 'Прочие стрительно-монтажные работы',
      licenses__title: 'Лицензии и сертификаты',
      faq__title: 'Часто задаваемые вопросы',
      'faq__question-1': 'Сколько времени занимает строительство объекта?',
      'faq__answer-1':
        'Сроки зависят от масштаба проекта, но мы всегда обсуждаем график заранее и строго его соблюдаем.',
      'faq__question-2': 'Сколько стоит строительство под ключ?',
      'faq__answer-2':
        'Стоимость зависит от проекта, площади и материалов. Средняя цена - от 150,000 ₸/м². Точную смету составим после обсуждения.',
      'faq__question-3': 'Какие документы вы предоставляете?',
      'faq__answer-3': 'Предоставляем договор, смету, акты выполненных работ, лицензии и сертификаты соответствия.',
      'faq__question-4': 'Вы работаете только в Астане или по всему Казахстану?',
      'faq__answer-4': 'Работаем по всему Казахстану, включая Астану, Алматы и регионы.',
      'faq__question-5': 'Можно ли использовать свои материалы?',
      'faq__answer-5': 'Да, вы можете предоставить свои материалы, мы согласуем их соответствие стандартам.',
      'faq__question-6': 'Есть ли гарантия на выполненные работы?',
      'faq__answer-6': 'Да, даём гарантию до 10 лет на строительные и монтажные работы.',
      partners__title: 'Наши партнёры',
      news__title: 'Новости',
      'news__heading-1': 'Название новости',
      'news__text-1': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      'news__heading-2': 'Название новости',
      'news__text-2': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      'news__heading-3': 'Название новости',
      'news__text-3': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      'news__heading-4': 'Название новости',
      'news__text-4': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      'news__heading-5': 'Название новости',
      'news__text-5': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      'news__heading-6': 'Название новости',
      'news__text-6': 'Текст-описание новости. Текст-описание новости. Текст-описание новости. Текст-описание новости',
      request__address: 'Казахстан, г. Название, дом 12',
      'request__link-google': 'Google Maps',
      'request__link-2gis': '2GIS / 2ГИС',
      'request__label-weekdays': 'Пн-Пт:',
      'request__label-weekends': 'Сб-Вс:',
      request__weekends: 'Выходной',
      request__phone: '+7 (777) 777 77 77',
      request__email: 'info@primer.kz',
      request__title: 'Оставьте заявку',
      request__description: 'Оставьте заявку и наш менеджер свяжется с Вами в ближайшее рабочее время.',
      'request__input-name': 'Ваше имя',
      'request__input-phone': 'Телефон',
      'request__input-message': 'Суть обращения',
      request__submit: 'Отправить',
      'footer__nav-home': 'Навигация',
      'footer__nav-about': 'О нас',
      'footer__nav-projects': 'Проекты',
      'footer__nav-contacts': 'Контакты',
      'footer__nav-news': 'Новости',
      'footer__contacts-title': 'Контакты',
      'footer__contacts-address': 'Адрес: Казахстан, г. Название, дом 12',
      'footer__contacts-phone': 'Телефон: +7 (777) 777 77 77',
      footer__copy: 'ABC DESIGN',
    },
    en: {
      'nav__item-home': 'Home',
      'nav__item-about': 'About Us',
      'nav__item-projects': 'Projects',
      'nav__item-contacts': 'Contacts',
      'nav__item-news': 'News',
      header__title: 'WE BUILD WITH QUALITY AND SAFETY',
      btn__projects: 'Our Projects',
      btn__contacts: 'Contact Us',
      'about-company__title': 'About the Company',
      'about-company__text':
        'This is the company text. It is necessary for further promotion of your website. This is the company text. It is necessary for further promotion of your website. This is the company text. It is necessary for further promotion of your website. This is the company text. It is necessary for further promotion of your website. This is the company text. <br> <br> This is the company text. It is necessary for further promotion of your website. This is the company text. It is necessary for further promotion of your website. This is the company text. It is necessary for further promotion of your website.',
      'info-grid__item-text-1': 'Text that needs to be inserted. Text that needs to be inserted.',
      'info-grid__item-text-2': 'Text that needs to be inserted. Text that needs to be inserted.',
      'info-grid__item-text-3': 'Text that needs to be inserted. Text that needs to be inserted.',
      'info-grid__item-text-4': 'Text that needs to be inserted. Text that needs to be inserted.',
      'projects__section-title': 'Our Projects',
      'projects__title-1': 'NAME OF ONE OF YOUR PROJECTS',
      'projects__description-1':
        'Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information.',
      'projects__title-2': 'NAME OF ONE OF YOUR PROJECTS',
      'projects__description-2':
        'Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information.',
      'projects__title-3': 'NAME OF ONE OF YOUR PROJECTS',
      'projects__description-3':
        'Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information.',
      'projects__title-4': 'NAME OF ONE OF YOUR PROJECTS',
      'projects__description-4':
        'Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information. Description text of your project. You will need to provide the necessary information.',
      advantages__title: 'Our Advantages',
      'advantages__item-title-1': 'Quality Guarantee',
      'advantages__item-text-1': 'We build according to standards, using certified materials and proven technologies.',
      'advantages__item-title-2': 'Meeting Deadlines',
      'advantages__item-text-2': 'We work according to a clear plan and deliver projects exactly on agreed terms.',
      'advantages__item-title-3': 'Safety First',
      'advantages__item-text-3': 'We comply with construction, sanitary, and fire safety regulations at all stages.',
      'advantages__item-title-4': 'Transparent Estimate',
      'advantages__item-text-4': 'Honest cost calculation without hidden services or unexpected additional charges.',
      'advantages__item-title-5': 'Individual Approach',
      'advantages__item-text-5': 'We take into account the tasks, budget, and specifics of each client’s project.',
      'advantages__item-title-6': 'Experienced Team',
      'advantages__item-text-6': 'Our projects are handled by qualified engineers, architects, and builders.',
      specialization__title: 'What Our Company Specializes In<br />',
      'specialization__list-item-1': 'Construction of industrial and civil buildings and structures',
      'specialization__list-item-2': 'Design and survey work in construction',
      'specialization__list-item-3': 'Expert work and engineering services in construction',
      'specialization__list-item-4': 'Reconstruction and major repairs',
      'specialization__list-item-5': 'Restoration work',
      'specialization__list-item-6': 'Other construction and installation work',
      licenses__title: 'Licenses and Certificates',
      faq__title: 'Frequently Asked Questions',
      'faq__question-1': 'How long does it take to construct a building?',
      'faq__answer-1':
        'The timeline depends on the project’s scale, but we always discuss the schedule in advance and strictly adhere to it.',
      'faq__question-2': 'How much does turnkey construction cost?',
      'faq__answer-2':
        'The cost depends on the project, area, and materials. The average price starts at 150,000 ₸/m². We will provide an accurate estimate after discussion.',
      'faq__question-3': 'What documents do you provide?',
      'faq__answer-3':
        'We provide a contract, estimate, work completion certificates, licenses, and compliance certificates.',
      'faq__question-4': 'Do you work only in Astana or throughout Kazakhstan?',
      'faq__answer-4': 'We work throughout Kazakhstan, including Astana, Almaty, and other regions.',
      'faq__question-5': 'Can I use my own materials?',
      'faq__answer-5': 'Yes, you can provide your own materials, and we will ensure they meet the required standards.',
      'faq__question-6': 'Is there a warranty for the work performed?',
      'faq__answer-6': 'Yes, we provide a warranty of up to 10 years for construction and installation work.',
      partners__title: 'Our Partners',
      news__title: 'News',
      'news__heading-1': 'News Title',
      'news__text-1': 'News description text. News description text. News description text. News description text.',
      'news__heading-2': 'News Title',
      'news__text-2': 'News description text. News description text. News description text. News description text.',
      'news__heading-3': 'News Title',
      'news__text-3': 'News description text. News description text. News description text. News description text.',
      'news__heading-4': 'News Title',
      'news__text-4': 'News description text. News description text. News description text. News description text.',
      'news__heading-5': 'News Title',
      'news__text-5': 'News description text. News description text. News description text. News description text.',
      'news__heading-6': 'News Title',
      'news__text-6': 'News description text. News description text. News description text. News description text.',
      request__address: 'Kazakhstan, City Name, House 12',
      'request__link-google': 'Google Maps',
      'request__link-2gis': '2GIS',
      'request__label-weekdays': 'Mon-Fri:',
      'request__label-weekends': 'Sat-Sun:',
      request__weekends: 'Closed',
      request__phone: '+7 (777) 777 77 77',
      request__email: 'info@primer.kz',
      request__title: 'Leave a Request',
      request__description: 'Leave a request, and our manager will contact you during the nearest working hours.',
      'request__input-name': 'Your Name',
      'request__input-phone': 'Phone',
      'request__input-message': 'Message Details',
      request__submit: 'Send',
      'footer__nav-home': 'Home',
      'footer__nav-about': 'About Us',
      'footer__nav-projects': 'Projects',
      'footer__nav-contacts': 'Contacts',
      'footer__nav-news': 'News',
      'footer__contacts-title': 'Contacts',
      'footer__contacts-address': 'Address: Kazakhstan, City Name, House 12',
      'footer__contacts-phone': 'Phone: +7 (777) 777 77 77',
      footer__copy: 'ABC DESIGN',
    },
  }

  function updateLanguage(lang) {
    if (!translations[lang]) {
      lang = 'ru'
    }

    Object.keys(translations[lang]).forEach(key => {
      const element = document.querySelector(`[data-lang="${key}"]`)
      if (element) {
        if (element.classList.contains('btn--projects') || element.classList.contains('btn--contacts')) {
          const textNode = element.childNodes[0]
          if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = translations[lang][key] + ' '
          }
        } else {
          element.innerHTML = translations[lang][key]
        }
      }
      const placeholderElement = document.querySelector(`[data-lang-placeholder="${key}"]`)
      if (placeholderElement) {
        placeholderElement.placeholder = translations[lang][key]
      }
    })

    langButtons.forEach(btn => {
      btn.classList.toggle('header__lang-switch__btn--active', btn.dataset.lang === lang)
    })

    langSwitchContainer.classList.toggle('header__lang-switch--en', lang === 'en')

    try {
      localStorage.setItem('language', lang)
    } catch (e) {
    }
  }

  let savedLang = 'ru'
  try {
    savedLang = localStorage.getItem('language') || 'ru'
  } catch (e) {
    console.warn('Failed to load language from localStorage:', e)
  }
  updateLanguage(savedLang)

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const newLang = button.dataset.lang
      updateLanguage(newLang)
    })
  })
})
