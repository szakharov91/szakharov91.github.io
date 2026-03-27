(() => {
  const content = {
    ru: {
      htmlLang: 'ru',
      title: 'Святослав Захаров — Киберпанк-резюме',
      brandName: 'Svyatoslav Zakharov',
      brandSubtitle: 'Кибер-портфолио / .NET Developer',
      nav: {
        experience: 'Опыт',
        stack: 'Стек',
        projects: 'Проекты',
        education: 'Образование',
        contacts: 'Контакты'
      },
      hero: {
        status: 'Открыт к senior backend / full-stack предложениям',
        eyebrow: '.NET • REST API • WPF • Интеграции',
        headline: 'СВЯТОСЛАВ<br />ЗАХАРОВ',
        glitchText: 'СВЯТОСЛАВ',
        role: '.NET Developer / Integration Engineer',
        summary: 'Backend-инженер с 10+ годами коммерческого опыта в системной интеграции, автоматизации гостиничного и retail-сегмента, разработке внутренних инструментов, миграциях данных и API-сервисах на платформе .NET. Сильная база в desktop- и web-разработке, reverse engineering и production-решениях для нескольких стран.',
        actions: {
          primary: 'Инициализировать контакт',
          secondary: 'Открыть таймлайн',
          email: 'Написать на почту'
        }
      },
      contacts: {
        title: 'Каналы связи',
        subtitle: 'Прямые сигналы',
        items: [
          { icon: '✉', label: 'Email', value: '79035042610@ya.ru', href: 'mailto:79035042610@ya.ru' },
          { icon: '◉', label: 'Telegram', value: '@zs_rus', href: 'https://t.me/zs_rus' },
          { icon: '⌘', label: 'GitHub', value: 'github.com/szakharov91', href: 'https://github.com/szakharov91' },
          { icon: '⌖', label: 'Локация', value: 'Россия, Москва', href: 'https://yandex.ru/maps/-/CDr~AHzx' }
        ]
      },
      metrics: {
        title: 'Быстрые метрики',
        subtitle: 'Снимок профиля',
        items: [
          { value: '10+', label: 'лет в коммерческой разработке ПО' },
          { value: '100+', label: 'крупных отелей мигрировано внутренним инструментом' },
          { value: '6', label: 'стран используют стек фискальных решений' },
          { value: '50+', label: 'ресторанов подключены к регуляторному workflow' }
        ]
      },
      experience: {
        title: 'Опыт работы',
        subtitle: '2010 — настоящее время',
        items: [
          {
            company: 'HRS Hospitality & Retail Systems',
            date: 'Дек 2021 — настоящее время',
            url: 'https://hrsinternational.com',
            displayUrl: 'hrsinternational.com',
            role: 'Разработчик решений по фискализации и локализации',
            bullets: [
              'Разработал инструмент миграции данных отелей с Oracle Opera v5 на Oracle Opera Cloud и добился его публикации в Oracle Cloud Marketplace.',
              'Участвовал в проектах миграции для 100+ крупных отелей и повысил пропускную способность enterprise-миграций.',
              'Разработал cashier/front-office решение для фискальных устройств и платежных сценариев, используемое в отелях, ресторанах и retail в 6 странах.',
              'Реализовал back-office сервер выгрузки чеков для автоматизированного взаимодействия с государственными регуляторами в Венгрии; решение использовали около 50 крупных ресторанов.',
              'Спроектировал и реализовал REST API слой для внешних интеграций, расширяющий import/export возможности Oracle MICROS Simphony.'
            ]
          },
          {
            company: 'AT Telecom LLC',
            date: 'Авг 2019 — Дек 2021',
            url: 'https://at-telecom.ru/',
            displayUrl: 'at-telecom.ru',
            role: 'Software Engineer',
            bullets: [
              'Разработал модуль интеграции NETUP UTM billing с сетевым оборудованием и автоматизировал provisioning услуг для конечных пользователей.',
              'Оптимизировал обмен данными с бухгалтерскими процессами и сократил объём ручных операционных действий.',
              'Расширил систему управления транскодером и web-интерфейс модулями мониторинга и управления устройствами.',
              'Реализовал планировщик записи видеопотоков с камер, подключённых к IPTV-комплексу.'
            ]
          },
          {
            company: 'АО ТГК ВЕГА',
            date: 'Апр 2014 — Авг 2019',
            url: 'https://www.hotel-vega.ru/',
            displayUrl: 'hotel-vega.ru',
            role: 'Software Engineer',
            bullets: [
              'Разработал информационный сервис отображения текущих событий для гостей конгресс-центра.',
              'Создал и внедрил внутреннюю биллинговую систему для Siemens HiPath4000 PBX с интеграцией в гостиничную PMS.',
              'Автоматизировал учёт телефонных услуг и формирование отчётности для оператора связи в гостиничном контуре.',
              'Разработал систему учёта расходных материалов для внутренних нужд IT-отдела.'
            ]
          },
          {
            company: 'Колледж сферы услуг и туризма №29',
            date: 'Авг 2012 — Апр 2014',
            url: 'https://www.tsit29.ru/',
            displayUrl: 'tsit29.ru',
            role: 'Разработчик',
            bullets: [
              'Разработал интерактивный информационный сервис расписания занятий для студентов.'
            ]
          },
          {
            company: 'Marat-C',
            date: 'Мар 2010 — Авг 2012',
            url: 'https://www.marat-c.com/',
            displayUrl: 'marat-c.com',
            role: 'Junior Developer',
            bullets: [
              'Начал коммерческий инженерный путь, участвовал во внутренних задачах разработки и поставке бизнес-софта.'
            ]
          }
        ]
      },
      stack: {
        title: 'Технологический стек',
        subtitle: 'Metro-тайлы',
        tiles: [
          { title: 'Языки', chips: ['C#', 'JavaScript', 'Rust', 'FreePascal'] },
          { title: '.NET Ecosystem', chips: ['.NET Framework', '.NET 8', 'Kestrel', 'MudBlazor', 'REST API', 'WPF MVVM'] },
          { title: 'Фреймворки и tooling', chips: ['Caliburn.Micro', 'AutoMapper', 'TopShelf', 'SonarAnalyzer.CSharp', 'Microsoft DI', 'Ninject', 'Autofac'] },
          { title: 'Data Layer', chips: ['NHibernate', 'Entity Framework', 'SQLite', 'MySQL', 'PostgreSQL', 'Oracle'] },
          { title: 'Reverse Engineering', chips: ['dnSpy', 'dotPeek', 'dot4net'] },
          {
            title: 'Фокусные области',
            list: [
              'Миграции данных и integration-heavy системы',
              'Фискальные устройства и платёжные workflow',
              'Back-office сервисы и автоматизация',
              'Desktop + web enterprise-продукты'
            ]
          }
        ]
      },
      projects: {
        title: 'Pet-проекты',
        subtitle: 'Open Source',
        repoLabel: 'Репозиторий ↗',
        items: [
          {
            name: 'Shortly.NET',
            href: 'https://github.com/szakharov91/Shortly.NET',
            description: 'Минималистичный URL-сервис на .NET 8 для создания коротких ссылок и редиректов.'
          },
          {
            name: 'GoogleTranslateHelper',
            href: 'https://github.com/szakharov91/GoogleTranslateHelper',
            description: 'Библиотека для быстрых онлайн-переводов и лёгких интеграционных сценариев.'
          },
          {
            name: 'Gpio-monitoring-service',
            href: 'https://github.com/szakharov91/Gpio-monitoring-service',
            description: 'Сервис мониторинга GPIO-интерфейсов Raspberry Pi 4 с интеграцией данных датчиков в системы умного дома.'
          }
        ]
      },
      certifications: {
        title: 'Сертификаты',
        subtitle: 'Подтверждено',
        items: [
          {
            title: 'Foundational C# with Microsoft Certification',
            href: 'https://freecodecamp.org/certification/szakharov/foundational-c-sharp-with-microsoft'
          },
          {
            title: 'Develop an ASP.NET Core web app that consumes an API',
            href: 'https://learn.microsoft.com/en-us/users/72165185/credentials/3150eb2a497c0020'
          }
        ]
      },
      education: {
        title: 'Образование',
        subtitle: 'База',
        institution: 'Колледж автоматизации и информационных технологий №20',
        courseLabel: 'Специальность:',
        course: 'Автоматизированные системы обработки информации и управления',
        period: 'Сентябрь 2006 — Июль 2010',
        linkLabel: 'kait20.mskobr.ru ↗',
        href: 'https://kait20.mskobr.ru/'
      },
      profile: {
        title: 'Профиль',
        subtitle: 'Сигналы',
        items: [
          'Проектирует и доводит до продакшена бизнес-инструменты промышленного уровня.',
          'Уверенно работает с модернизацией legacy-систем и reverse engineering.',
          'Имеет практический опыт enterprise-интеграций и предметной автоматизации.',
          'Сильный fit для backend, platform и full-stack product-команд.'
        ]
      },
      interests: {
        title: 'Интересы',
        subtitle: 'Вне работы',
        items: ['Написание песен', 'Игра на гитаре и пианино', 'Автомобили и автоспорт']
      },
      footer: {
        left: 'Resume landing page / multi-file build',
        right: 'Cyberpunk × Matrix × Metro UI'
      }
    },
    en: {
      htmlLang: 'en',
      title: 'Svyatoslav Zakharov — Cyberpunk Resume',
      brandName: 'Svyatoslav Zakharov',
      brandSubtitle: 'Cybernetic Portfolio / .NET Developer',
      nav: {
        experience: 'Experience',
        stack: 'Stack',
        projects: 'Projects',
        education: 'Education',
        contacts: 'Contacts'
      },
      hero: {
        status: 'Open for senior backend / full-stack challenges',
        eyebrow: '.NET • REST API • WPF • Integrations',
        headline: 'SVYATOSLAV<br />ZAKHAROV',
        glitchText: 'SVYATOSLAV',
        role: '.NET Developer / Integration Engineer',
        summary: 'Backend-focused engineer with 10+ years of commercial experience designing integration-heavy systems, fiscal solutions, hotel and retail automation, internal tooling, data migrations, and API services on the .NET platform. Strong background in desktop and web delivery, reverse engineering, and production systems used across multiple countries.',
        actions: {
          primary: 'Initialize Contact',
          secondary: 'View Timeline',
          email: 'Send Email'
        }
      },
      contacts: {
        title: 'Signal Channels',
        subtitle: 'Direct Links',
        items: [
          { icon: '✉', label: 'Email', value: '79035042610@ya.ru', href: 'mailto:79035042610@ya.ru' },
          { icon: '◉', label: 'Telegram', value: '@zs_rus', href: 'https://t.me/zs_rus' },
          { icon: '⌘', label: 'GitHub', value: 'github.com/szakharov91', href: 'https://github.com/szakharov91' },
          { icon: '⌖', label: 'Location', value: 'Russia, Moscow', href: 'https://yandex.ru/maps/-/CDr~AHzx' }
        ]
      },
      metrics: {
        title: 'Quick Metrics',
        subtitle: 'Snapshot',
        items: [
          { value: '10+', label: 'Years in software engineering' },
          { value: '100+', label: 'Hotels migrated with internal tooling' },
          { value: '6', label: 'Countries using fiscal solution stack' },
          { value: '50+', label: 'Restaurants connected to regulator workflow' }
        ]
      },
      experience: {
        title: 'Experience Timeline',
        subtitle: '2010 — Present',
        items: [
          {
            company: 'HRS Hospitality & Retail Systems',
            date: 'Dec 2021 — Present',
            url: 'https://hrsinternational.com',
            displayUrl: 'hrsinternational.com',
            role: 'Fiscalization and Localization Solutions Developer',
            bullets: [
              'Built a hotel data migration tool for Oracle Opera v5 to Oracle Opera Cloud and got it listed in the Oracle Cloud Marketplace.',
              'Delivered migration projects for 100+ large hotels and improved enterprise migration throughput.',
              'Developed a cashier/front-office solution for fiscal devices and payment workflows used in hotel, restaurant, and retail operations across 6 countries.',
              'Implemented a back-office receipt unload server for automated communication with government regulators in Hungary, used by about 50 large restaurants.',
              'Designed and implemented a REST API layer for third-party integrations extending Oracle MICROS Simphony import/export capabilities.'
            ]
          },
          {
            company: 'AT Telecom LLC',
            date: 'Aug 2019 — Dec 2021',
            url: 'https://at-telecom.ru/',
            displayUrl: 'at-telecom.ru',
            role: 'Software Engineer',
            bullets: [
              'Developed a NETUP UTM billing integration module for network equipment and automated service provisioning for end users.',
              'Streamlined data exchange with accounting workflows and reduced manual operational steps.',
              'Expanded a transcoder control system and web interface with monitoring and device-management modules.',
              'Implemented a scheduler for recording video streams from cameras connected to the IPTV complex.'
            ]
          },
          {
            company: 'JSC THC VEGA',
            date: 'Apr 2014 — Aug 2019',
            url: 'https://www.hotel-vega.ru/',
            displayUrl: 'hotel-vega.ru',
            role: 'Software Engineer',
            bullets: [
              'Developed an information service displaying current events for convention center guests.',
              'Built and deployed an in-house billing system for Siemens HiPath4000 PBX with hotel PMS integration.',
              'Automated telephone service accounting and provider reporting for hospitality operations.',
              'Created a consumables accounting system for IT department internal needs.'
            ]
          },
          {
            company: 'College of Service and Tourism No. 29',
            date: 'Aug 2012 — Apr 2014',
            url: 'https://www.tsit29.ru/',
            displayUrl: 'tsit29.ru',
            role: 'Developer',
            bullets: [
              'Developed an interactive lesson schedule information service for students.'
            ]
          },
          {
            company: 'Marat-C',
            date: 'Mar 2010 — Aug 2012',
            url: 'https://www.marat-c.com/',
            displayUrl: 'marat-c.com',
            role: 'Junior Developer',
            bullets: [
              'Started commercial engineering track and contributed to internal development tasks and business software delivery.'
            ]
          }
        ]
      },
      stack: {
        title: 'Core Stack',
        subtitle: 'Metro Tiles',
        tiles: [
          { title: 'Languages', chips: ['C#', 'JavaScript', 'Rust', 'FreePascal'] },
          { title: '.NET Ecosystem', chips: ['.NET Framework', '.NET 8', 'Kestrel', 'MudBlazor', 'REST API', 'WPF MVVM'] },
          { title: 'Frameworks & Tooling', chips: ['Caliburn.Micro', 'AutoMapper', 'TopShelf', 'SonarAnalyzer.CSharp', 'Microsoft DI', 'Ninject', 'Autofac'] },
          { title: 'Data Layer', chips: ['NHibernate', 'Entity Framework', 'SQLite', 'MySQL', 'PostgreSQL', 'Oracle'] },
          { title: 'Reverse Engineering', chips: ['dnSpy', 'dotPeek', 'dot4net'] },
          {
            title: 'Focus Areas',
            list: [
              'Data migration and integration-heavy systems',
              'Fiscal devices and payment workflows',
              'Back-office services and automation',
              'Desktop + web enterprise products'
            ]
          }
        ]
      },
      projects: {
        title: 'Pet Projects',
        subtitle: 'Open Source',
        repoLabel: 'Repository ↗',
        items: [
          {
            name: 'Shortly.NET',
            href: 'https://github.com/szakharov91/Shortly.NET',
            description: 'Minimal URL utility for .NET 8 with support for creating short links and redirects.'
          },
          {
            name: 'GoogleTranslateHelper',
            href: 'https://github.com/szakharov91/GoogleTranslateHelper',
            description: 'Library for fast online translations and lightweight integration scenarios.'
          },
          {
            name: 'Gpio-monitoring-service',
            href: 'https://github.com/szakharov91/Gpio-monitoring-service',
            description: 'Service for monitoring GPIO interfaces of Raspberry Pi 4 and integrating sensor data with smart home systems.'
          }
        ]
      },
      certifications: {
        title: 'Certifications',
        subtitle: 'Verified',
        items: [
          {
            title: 'Foundational C# with Microsoft Certification',
            href: 'https://freecodecamp.org/certification/szakharov/foundational-c-sharp-with-microsoft'
          },
          {
            title: 'Develop an ASP.NET Core web app that consumes an API',
            href: 'https://learn.microsoft.com/en-us/users/72165185/credentials/3150eb2a497c0020'
          }
        ]
      },
      education: {
        title: 'Education',
        subtitle: 'Foundation',
        institution: 'College of Automation and Information Technologies 20',
        courseLabel: 'Course:',
        course: 'Automated information processing and management systems',
        period: 'September 2006 — July 2010',
        linkLabel: 'kait20.mskobr.ru ↗',
        href: 'https://kait20.mskobr.ru/'
      },
      profile: {
        title: 'Profile',
        subtitle: 'Signals',
        items: [
          'Designs and ships production-grade business tools.',
          'Comfortable with legacy modernization and reverse engineering.',
          'Experienced in enterprise integrations and domain-specific automation.',
          'Strong fit for backend, platform, and full-stack product teams.'
        ]
      },
      interests: {
        title: 'Interests',
        subtitle: 'Off Duty',
        items: ['Songwriting', 'Playing guitar and piano', 'Cars and autosport']
      },
      footer: {
        left: 'Resume landing page / multi-file build',
        right: 'Cyberpunk × Matrix × Metro UI'
      }
    }
  };

  const elements = {
    brandName: document.getElementById('brandName'),
    brandSubtitle: document.getElementById('brandSubtitle'),
    navExperience: document.getElementById('navExperience'),
    navStack: document.getElementById('navStack'),
    navProjects: document.getElementById('navProjects'),
    navEducation: document.getElementById('navEducation'),
    navContacts: document.getElementById('navContacts'),
    heroStatus: document.getElementById('heroStatus'),
    heroEyebrow: document.getElementById('heroEyebrow'),
    heroHeadline: document.getElementById('heroHeadline'),
    heroRole: document.getElementById('heroRole'),
    heroSummary: document.getElementById('heroSummary'),
    heroActionPrimary: document.getElementById('heroActionPrimary'),
    heroActionSecondary: document.getElementById('heroActionSecondary'),
    heroActionEmail: document.getElementById('heroActionEmail'),
    contactsTitle: document.getElementById('contactsTitle'),
    contactsSubtitle: document.getElementById('contactsSubtitle'),
    contactsList: document.getElementById('contactsList'),
    metricsTitle: document.getElementById('metricsTitle'),
    metricsSubtitle: document.getElementById('metricsSubtitle'),
    metricsGrid: document.getElementById('metricsGrid'),
    experienceTitle: document.getElementById('experienceTitle'),
    experienceSubtitle: document.getElementById('experienceSubtitle'),
    experienceTimeline: document.getElementById('experienceTimeline'),
    stackTitle: document.getElementById('stackTitle'),
    stackSubtitle: document.getElementById('stackSubtitle'),
    stackTiles: document.getElementById('stackTiles'),
    projectsTitle: document.getElementById('projectsTitle'),
    projectsSubtitle: document.getElementById('projectsSubtitle'),
    projectsList: document.getElementById('projectsList'),
    certificationsTitle: document.getElementById('certificationsTitle'),
    certificationsSubtitle: document.getElementById('certificationsSubtitle'),
    certificationsList: document.getElementById('certificationsList'),
    educationTitle: document.getElementById('educationTitle'),
    educationSubtitle: document.getElementById('educationSubtitle'),
    educationBlock: document.getElementById('educationBlock'),
    profileTitle: document.getElementById('profileTitle'),
    profileSubtitle: document.getElementById('profileSubtitle'),
    profileList: document.getElementById('profileList'),
    interestsTitle: document.getElementById('interestsTitle'),
    interestsSubtitle: document.getElementById('interestsSubtitle'),
    interestsList: document.getElementById('interestsList'),
    footerLeft: document.getElementById('footerLeft'),
    footerRight: document.getElementById('footerRight')
  };

  const langButtons = [...document.querySelectorAll('.lang-btn')];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentLang = getInitialLanguage();
  let revealObserver = null;
  let parallaxHandlerBound = false;
  let rainControllerStarted = false;

  function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const langParam = (params.get('lang') || '').toLowerCase();
    return langParam === 'ru' ? 'ru' : 'en';
  }

  function syncLanguageUrl(lang) {
    const url = new URL(window.location.href);

    if (lang === 'ru') {
      url.searchParams.set('lang', 'ru');
    } else {
      url.searchParams.delete('lang');
    }

    window.history.replaceState({}, '', url);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function renderList(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  }

  function renderContacts(items) {
    elements.contactsList.innerHTML = items.map((item) => `
      <a class="contact-item" href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
        <div class="contact-icon">${item.icon}</div>
        <div>
          <small>${escapeHtml(item.label)}</small>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      </a>
    `).join('');
  }

  function renderMetrics(items) {
    elements.metricsGrid.innerHTML = items.map((item) => `
      <div class="stat">
        <strong>${escapeHtml(item.value)}</strong>
        <span>${escapeHtml(item.label)}</span>
      </div>
    `).join('');
  }

  function renderExperience(items) {
    elements.experienceTimeline.innerHTML = items.map((item, index) => `
      <article class="timeline-item reveal" style="--delay: ${50 + index * 50}ms;">
        <span class="timeline-dot"></span>
        <div class="timeline-meta">
          <span class="timeline-company">${escapeHtml(item.company)}</span>
          <span class="timeline-date">${escapeHtml(item.date)}</span>
          <a class="timeline-link" href="${item.url}" target="_blank" rel="noreferrer">${escapeHtml(item.displayUrl)}</a>
        </div>
        <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
        <ul class="timeline-list">${renderList(item.bullets)}</ul>
      </article>
    `).join('');
  }

  function renderStack(tiles) {
    elements.stackTiles.innerHTML = tiles.map((tile) => `
      <article class="tile">
        <h3>${escapeHtml(tile.title)}</h3>
        ${tile.chips ? `<div class="chip-set">${tile.chips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join('')}</div>` : `<ul>${renderList(tile.list)}</ul>`}
      </article>
    `).join('');
  }

  function renderProjects(projects, repoLabel) {
    elements.projectsList.innerHTML = projects.map((project) => `
      <article class="project">
        <div class="project-top">
          <h3>${escapeHtml(project.name)}</h3>
          <a href="${project.href}" target="_blank" rel="noreferrer">${escapeHtml(repoLabel)}</a>
        </div>
        <p>${escapeHtml(project.description)}</p>
      </article>
    `).join('');
  }

  function renderCertifications(items) {
    elements.certificationsList.innerHTML = items.map((item) => `
      <li><a href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a></li>
    `).join('');
  }

  function renderEducation(item) {
    elements.educationBlock.innerHTML = `
      <p class="edu-name"><strong>${escapeHtml(item.institution)}</strong></p>
      <p class="edu-line"><span class="edu-meta">${escapeHtml(item.courseLabel)}</span> ${escapeHtml(item.course)}</p>
      <p class="edu-meta">${escapeHtml(item.period)}</p>
      <p><a class="edu-link" href="${item.href}" target="_blank" rel="noreferrer">${escapeHtml(item.linkLabel)}</a></p>
    `;
  }

  function setActiveLanguageButton(lang) {
    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyLanguage(lang) {
    const t = content[lang];
    currentLang = lang;
    document.documentElement.lang = t.htmlLang;
    syncLanguageUrl(lang);
    document.title = t.title;

    elements.brandName.textContent = t.brandName;
    elements.brandSubtitle.textContent = t.brandSubtitle;

    elements.navExperience.textContent = t.nav.experience;
    elements.navStack.textContent = t.nav.stack;
    elements.navProjects.textContent = t.nav.projects;
    elements.navEducation.textContent = t.nav.education;
    elements.navContacts.textContent = t.nav.contacts;

    elements.heroStatus.textContent = t.hero.status;
    elements.heroEyebrow.textContent = t.hero.eyebrow;
    elements.heroHeadline.innerHTML = t.hero.headline;
    elements.heroHeadline.dataset.text = t.hero.glitchText;
    elements.heroRole.textContent = t.hero.role;
    elements.heroSummary.textContent = t.hero.summary;
    elements.heroActionPrimary.textContent = t.hero.actions.primary;
    elements.heroActionSecondary.textContent = t.hero.actions.secondary;
    elements.heroActionEmail.textContent = t.hero.actions.email;

    elements.contactsTitle.textContent = t.contacts.title;
    elements.contactsSubtitle.textContent = t.contacts.subtitle;
    renderContacts(t.contacts.items);

    elements.metricsTitle.textContent = t.metrics.title;
    elements.metricsSubtitle.textContent = t.metrics.subtitle;
    renderMetrics(t.metrics.items);

    elements.experienceTitle.textContent = t.experience.title;
    elements.experienceSubtitle.textContent = t.experience.subtitle;
    renderExperience(t.experience.items);

    elements.stackTitle.textContent = t.stack.title;
    elements.stackSubtitle.textContent = t.stack.subtitle;
    renderStack(t.stack.tiles);

    elements.projectsTitle.textContent = t.projects.title;
    elements.projectsSubtitle.textContent = t.projects.subtitle;
    renderProjects(t.projects.items, t.projects.repoLabel);

    elements.certificationsTitle.textContent = t.certifications.title;
    elements.certificationsSubtitle.textContent = t.certifications.subtitle;
    renderCertifications(t.certifications.items);

    elements.educationTitle.textContent = t.education.title;
    elements.educationSubtitle.textContent = t.education.subtitle;
    renderEducation(t.education);

    elements.profileTitle.textContent = t.profile.title;
    elements.profileSubtitle.textContent = t.profile.subtitle;
    elements.profileList.innerHTML = renderList(t.profile.items);

    elements.interestsTitle.textContent = t.interests.title;
    elements.interestsSubtitle.textContent = t.interests.subtitle;
    elements.interestsList.innerHTML = renderList(t.interests.items);

    elements.footerLeft.textContent = t.footer.left;
    elements.footerRight.textContent = t.footer.right;

    setActiveLanguageButton(lang);
    rebindReveals();
  }

  function rebindReveals() {
    const revealItems = [...document.querySelectorAll('.reveal')];

    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }

    if (!prefersReduced && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      revealItems.forEach((item) => {
        item.classList.remove('is-visible');

        const rect = item.getBoundingClientRect();
        const isInitiallyVisible = rect.top < viewportHeight * 0.98 && rect.bottom > 0;

        if (isInitiallyVisible) {
          item.classList.add('is-visible');
        } else {
          revealObserver.observe(item);
        }
      });
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }

  function initParallax() {
    if (prefersReduced || parallaxHandlerBound) return;

    const parallaxItems = [...document.querySelectorAll('[data-parallax]')];
    if (!parallaxItems.length) return;

    let pointerX = 0;
    let pointerY = 0;
    let rafId = null;

    const renderParallax = () => {
      parallaxItems.forEach((item) => {
        const speed = parseFloat(item.dataset.speed || '0.02');
        const x = pointerX * speed;
        const y = pointerY * speed;
        item.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      rafId = null;
    };

    window.addEventListener('pointermove', (event) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      pointerX = nx * 18;
      pointerY = ny * 18;
      if (!rafId) rafId = requestAnimationFrame(renderParallax);
    }, { passive: true });

    parallaxHandlerBound = true;
  }

  function initCodeRain() {
    if (rainControllerStarted) return;
    rainControllerStarted = true;

    const canvas = document.getElementById('codeRain');
    const ctx = canvas.getContext('2d');
    const glyphs = 'アカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>$#@&%+=/*-;:.NET';
    let columns = [];
    let fontSize = 15;
    let width = 0;
    let height = 0;
    let animationId = 0;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fontSize = width < 640 ? 12 : 15;
      const count = Math.ceil(width / fontSize);
      columns = Array.from({ length: count }, () => Math.random() * -60);
    }

    function drawRain() {
      ctx.fillStyle = 'rgba(4, 7, 14, 0.12)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, monospace`;

      for (let i = 0; i < columns.length; i += 1) {
        const char = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        ctx.fillStyle = i % 11 === 0 ? 'rgba(255, 79, 216, 0.75)' : 'rgba(57, 244, 255, 0.78)';
        ctx.fillText(char, x, y);

        if (y > height + Math.random() * 200 && Math.random() > 0.985) {
          columns[i] = Math.random() * -20;
        } else {
          columns[i] += width < 640 ? 0.42 : 0.58;
        }
      }

      animationId = requestAnimationFrame(drawRain);
    }

    function startRain() {
      resizeCanvas();
      if (!prefersReduced) {
        cancelAnimationFrame(animationId);
        ctx.fillStyle = '#04070e';
        ctx.fillRect(0, 0, width, height);
        drawRain();
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    startRain();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else if (!prefersReduced) {
        drawRain();
      }
    });
  }

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang;
      if (nextLang !== currentLang && content[nextLang]) {
        applyLanguage(nextLang);
      }
    });
  });

  applyLanguage(currentLang);
  initParallax();
  initCodeRain();
})();
