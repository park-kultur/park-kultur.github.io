const aboutUsData = [
  { image: 'media/We/AGolikova.webp',   firstName: 'Александра',  lastName: 'Голикова',     role: 'Режиссёр' },
  { image: 'media/We/MLobova.webp',     firstName: 'Мария',       lastName: 'Лобова',       role: 'Помощник режиссёра' },
  { image: 'media/We/MMiglau.webp',     firstName: 'Мария',       lastName: 'Миглау',       role: 'Операционный директор' },
  { image: 'media/We/Temp.webp',        firstName: 'Екатерина',   lastName: 'Шишкова',      role: 'Исполнительный продюсер' },
  { image: 'media/We/Temp.webp',        firstName: 'Арина',       lastName: 'Смирнова',     role: 'Линейный продюсер' },
  { image: 'media/We/DSinitsyn.webp',   firstName: 'Дмитрий',     lastName: 'Синицын',      role: 'Продюсер' },
  { image: 'media/We/FGolikov.webp',    firstName: 'Фёдор',       lastName: 'Голиков',      role: 'Сценограф' },
  { image: 'media/We/VMaslova.webp',    firstName: 'Виктория',    lastName: 'Маслова',      role: 'Художник' },
  { image: 'media/We/IShein.webp',      firstName: 'Ян',          lastName: 'Шеин',         role: 'Технический директор' },
  { image: 'media/We/DChevalier.webp',  firstName: 'Даниил',      lastName: 'Шевалье',      role: 'Креативный директор' },
  { image: 'media/We/NSultanova.webp',  firstName: 'Нина',        lastName: 'Султанова',    role: 'Директор по маркетингу' },
  { image: 'media/We/Temp.webp',        firstName: 'Полина',      lastName: 'Белосорочко',  role: 'Руководитель отдела SMM и PR' },
  { image: 'media/We/Azmailova.webp',   firstName: 'Арина',       lastName: 'Измайлова',    role: 'Драматург' },
  { image: 'media/We/MFedotova.webp',   firstName: 'Мари',        lastName: 'Федотова',     role: 'Фотограф' },
  { image: 'media/We/KLitovkin.webp',   firstName: 'Кирилл',      lastName: 'Литовкин',     role: 'Фотограф' },
];

const showsData = [
  {
    id:         'vishnevyi-sad',
    title:      'Вишнёвый сад',
    poster:     'media/Posters/VISHNEVY_SAD_POSTER.webp',
    posterAlt:  'Постер спектакля «Вишнёвый сад»',
    ticketUrl:  'https://iframeab-pre8338.intickets.ru/event/63691712',
    duration:   '1 час 40 минут',
    dates:      '13-14 октября',
    description: [
      'Для семейства Раневских Вишнёвый сад — это не просто несколько деревьев с плохим урожаем. Это символ их дома, уютного милого дома, из которого порой хочется бежать без оглядки. Сны о новой жизни уже не представляются иллюзиями, а дивный новый мир со своими порядками и укладом настойчиво обивает пороги и с грохотом обрушивается на героев Чехова. Останется ли сад или его вырубят? Обретут дом наши герои или снова сбегут?',
      'Под гротескный оркестр взрывов, лампад и поминального песнопения на стыке перемен столкнутся атеисты и верующие, современность и история, коммунисты и дворяне в попытке ответить на вопрос: «Что же со всеми нами будет?»',
    ],
    gallery: {
      swiperId: 'show-vishnevyi-sad-swiper',
      prevEl:   'show-vishnevyi-sad-prev',
      nextEl:   'show-vishnevyi-sad-next',
      images: [
        { src: 'media/Gallery/01.webp' },
        { src: 'media/Gallery/02.webp' },
        { src: 'media/Gallery/03.webp' },
        { src: 'media/Gallery/04.webp' },
        { src: 'media/Gallery/05.webp', topAligned: true },
        { src: 'media/Gallery/06.webp' },
        { src: 'media/Gallery/07.webp' },
        { src: 'media/Gallery/08.webp' },
        { src: 'media/Gallery/09.webp' },
      ],
    },
  },
  {
    id:         'dorogaya-elena-sergeevna',
    title:      'Дорогая Елена Сергеевна',
    poster:     'media/Posters/ELENA_SERGEEVNA_POSTER.webp',
    posterAlt:  'Постер спектакля «Дорогая Елена Сергеевна»',
    duration:   '1 час 45 минут, без антракта',
    description: [
      'Творческое объединение Park Kultur представляет спектакль «Дорогая Елена Сергеевна» по пьесе Людмилы Разумовской',
      'Спектакль о необходимости диалога нового и старого. Попытка взглянуть на прошлое под лупой, буквально поместив его в аквариум. Возможность увидеть, где проходят границы сознания, и расширить их вместе с героями пьесы. Спектакль — встреча лицом к лицу с главными парадоксами взросления.',
      'Разумовская написала пьесу по заказу министерства культуры СССР. «Дорогая Елена Сергеевна» вышла в свет в 1980 году, после чего по словам автора «в министерстве пришли в ужас и сделали вид, что ничего не было». Три года пьеса была под запретом, но от этого она не утратила своей актуальности: история оказалась совершенно вне времени.',
      'Четверо школьников приходят к учительнице по математике в ее день рождения, однако их главная цель отнюдь не вручать подарки и озвучивать поздравления. Тесная советская квартира становится ареной, на которой разворачиваются бои принципов и ценностей, отстаивание которых дорого обойдется каждому из участников. Чем же придется пожертвовать ради своих убеждений и насколько высока цена морали?',
    ],
    gallery: {
      swiperId: 'show-elena-sergeevna-swiper',
      prevEl:   'show-elena-sergeevna-prev',
      nextEl:   'show-elena-sergeevna-next',
      images: [
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/001.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/002.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/003.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/004.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/005.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/006.webp'},
        { src: 'media/Gallery/ELENA SERGEEVNA PHOTOS/007.webp'},
      ],
    },
  },
  {
    id:         'fantazii-faryateva',
    title:      'Фантазии Фарятьева',
    poster:     'media/Posters/FANTAZII_FARYATEVA_POSTER.webp',
    posterAlt:  'Постер спектакля «Фантазии Фарятьева»',
    duration:   '1 час 40 минут, без антракта',
    description: [
      'Жизнь Александры идёт своим чередом: работа в музыкальной школе и вечная усталость, мама, контролирующая каждый шаг, и язвительная сестра-подросток дома.',
      'В жизни семьи всё меняется, когда на пороге их квартиры внезапно появляется Павел Фарятьев. Чудаковатый романтик-идеалист делает предложение Александре, зная её лишь 10 дней.',
      'Их отношения становятся столкновением мечты и реальности, где каждый балансирует между своими фантазиями и необходимостью принять жизнь такой, какая она есть.',
      'Наш спектакль — о любви, семье и человеческой уязвимости. Неужели любовь — это лишь зависимость и страдание? А может, есть что-то большее, чем мы? Где грань между сном и реальностью? И возможно ли выйти из бесконечного «заколдованного круга»?',
    ],
  },
];

const contactsData = [
  {
    heading:      'Администрация и PR',
    name:         'Мария Миглау',
    description:  'Ответит на ваши вопросы о билетах, сотрудничестве и приёме на работу.',
    email:        'info@parkkultur.space',
  },
  {
    heading:      'Социальные сети',
    name:         'Даниил Шевалье',
    description:  'Есть креативные идеи для наших социальных сетей, вам сюда!',
    email:        'promo@parkkultur.space',
  },
];

const socialLinks = [
  { href: 'https://vk.com/park.kultur',                                 type: 'vk',         label: 'VK' },
  { href: 'https://www.instagram.com/park.kultur',                      type: 'instagram',  label: 'Instagram' },
  { href: 'https://t.me/parkkultur',                                    type: 'telegram',   label: 'Telegram' },
  { href: 'https://www.youtube.com/@park.kultur',                       type: 'youtube',    label: 'YouTube' },
  { href: 'https://www.tiktok.com/@park_kultur?_t=ZM-90K61YR20VM&_r=1', type: 'tiktok',     label: 'TikTok' },
];

const afishaData = [
  {
    day:        '13',
    month:      'Октября',
    title:      'Вишнёвый сад (16+)',
    time:       'пн 19:00',
    ticketUrl:  'https://iframeab-pre8338.intickets.ru/seance/63691857',
  },
  {
    day:        '14',
    month:      'Октября',
    title:      'Вишнёвый сад (16+)',
    time:       'вт 19:00',
    ticketUrl:  'https://iframeab-pre8338.intickets.ru/seance/63692635',
  },
];

const actorsData = [
  { image: 'media/Actors/PLeshchenko.webp',       firstName: 'Павел',       lastName: 'Лещенко' },
  { image: 'media/Actors/ALobova.webp',           firstName: 'Александа',   lastName: 'Лобова' },
  { image: 'media/Actors/STsulaya.webp',          firstName: 'Софи',        lastName: 'Цулая' },
  { image: 'media/Actors/KTrachevsky.webp',       firstName: 'Константин',  lastName: 'Трачевский' },
  { image: 'media/Actors/EDesyatnikova.webp',     firstName: 'Екатерина',   lastName: 'Десятникова' },
  { image: 'media/Actors/ARozhdestvenskaya.webp', firstName: 'Алёна',       lastName: 'Рождественская' },
  { image: 'media/Actors/YPolyakov.webp',         firstName: 'Ярослав',     lastName: 'Поляков' },
  { image: 'media/Actors/IMalkin.webp',           firstName: 'Иван',        lastName: 'Малкин' },
  { image: 'media/Actors/DShelegova.webp',        firstName: 'Дарья',       lastName: 'Шелегова' },
  { image: 'media/Actors/AStepanova.webp',        firstName: 'Анна',        lastName: 'Степанова' },
  { image: 'media/Actors/GLosev.webp',            firstName: 'Григорий',    lastName: 'Лосев' },
  { image: 'media/Actors/IVelikaya.webp',         firstName: 'Ирина',       lastName: 'Великая' },
  { image: 'media/Actors/SChakvetadze.webp',      firstName: 'Сандро',      lastName: 'Чакветадзе' },
  { image: 'media/Actors/IIvanov.webp',           firstName: 'Илья',        lastName: 'Иванов' },
  { image: 'media/Actors/AIzotov.webp',           firstName: 'Артём',       lastName: 'Изотов' },
  { image: 'media/Actors/NSultanova.webp',        firstName: 'Нина',        lastName: 'Султанова' },
  { image: 'media/Actors/MChurmasov.webp',        firstName: 'Максим',      lastName: 'Чурмасов' },
  { image: 'media/Actors/NVasilieva.webp',        firstName: 'Наталия',     lastName: 'Васильева' },
];

document.addEventListener('DOMContentLoaded', () => {
  initAttentionTitle();
  initNavigation();
  renderAboutUs();
  renderActorsGallery();
  renderAfisha();
  renderShows();
  renderContacts();
  initSwipers();
  initModals();
  initContactMediaLinks();
  initViewportSizeVars();
});

function initAttentionTitle() {
  const pageTitle = document.title;
  const attentionMessage = 'Куда же вы!';

  document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? attentionMessage : pageTitle;
  });
}

function initNavigation() {
  const header = document.querySelector('header');
  const burgerCheckbox = document.getElementById('check');
  let headerHeight = header?.offsetHeight ?? 0;

  const updateHeaderHeight = () => {
    headerHeight = header?.offsetHeight ?? 0;
  };

  const scrollToId = (id) => {
    const targetElement = document.getElementById(id);

    if (!targetElement) {
      return;
    }

    const targetOffset = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: Math.max(targetOffset, 0),
      behavior: 'smooth',
    });
  };

  window.addEventListener('resize', updateHeaderHeight);

  document.querySelectorAll('.nav_link').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');

      if (!href || !href.startsWith('#')) {
        return;
      }

      event.preventDefault();
      scrollToId(href.slice(1));

      if (burgerCheckbox) {
        burgerCheckbox.checked = false;
      }
    });
  });
}

function renderActorsGallery() {
  const wrapper = document.getElementById('actors_swiper_wrapper');

  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = '';

  actorsData.forEach(({ image, firstName, lastName }) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    const card = document.createElement('a');
    card.className = 'actors_cards';
    const fullName = `${firstName} ${lastName}`;
    card.setAttribute('aria-label', fullName);

    const img = document.createElement('img');
    img.src = image;
    img.alt = fullName;
    img.className = 'actor_card_image image-square theatre_block_images';

    const title = document.createElement('h2');
    title.innerHTML = `${firstName}<br>${lastName}`;

    card.append(img, title);
    slide.append(card);
    wrapper.append(slide);
  });
}

function renderAfisha() {
  const container = document.getElementById('afisha_container');

  if (!container) return;

  container.innerHTML = '';

  afishaData.forEach(({ day, month, title, time, ticketUrl }) => {
    const eventEl = document.createElement('div');
    eventEl.className = 'afisha_event';

    const description = document.createElement('div');
    description.className = 'afisha_description';

    const date = document.createElement('div');
    date.className = 'afisha_date';

    const dayEl = document.createElement('div');
    dayEl.className = 'afisha_day afisha_text';
    dayEl.textContent = day;

    const monthEl = document.createElement('div');
    monthEl.className = 'afisha_month afisha_text';
    monthEl.textContent = month;

    date.append(dayEl, monthEl);

    const info = document.createElement('div');
    info.className = 'afisha_info';

    const titleLink = document.createElement('a');
    titleLink.className = 'button nav_link afisha_title afisha_text';
    titleLink.href = '#theatre_block';
    titleLink.textContent = title;

    const timeEl = document.createElement('div');
    timeEl.className = 'afisha_time afisha_text';
    timeEl.textContent = time;

    info.append(titleLink, timeEl);
    description.append(date, info);

    const action = document.createElement('div');
    action.className = 'afisha_action';

    const ticketLink = document.createElement('a');
    ticketLink.className = 'buy_ticket afisha_ticket';
    ticketLink.href = ticketUrl;
    ticketLink.target = '_blank';
    ticketLink.textContent = 'Купить билет';

    action.append(ticketLink);
    eventEl.append(description, action);
    container.append(eventEl);
  });
}

function renderContacts() {
  renderContactsDesktop();
  renderContactsMobile();
}

function renderContactsDesktop() {
  const container = document.getElementById('contacts_desktop');
  if (!container) return;

  const table = document.createElement('table');
  table.className = 'contacts_table';

  const headRow = document.createElement('tr');
  contactsData.forEach(({ heading }) => {
    const th = document.createElement('th');
    th.className = 'table_head_row';
    const h3 = document.createElement('h3');
    h3.className = 'table_heading';
    h3.textContent = heading;
    th.append(h3);
    headRow.append(th);
  });
  table.append(headRow);

  const nameRow = document.createElement('tr');
  contactsData.forEach(({ name }) => {
    const td = document.createElement('td');
    td.className = 'table_body_row';
    const p = document.createElement('p');
    p.className = 'contact_person contact_name';
    p.textContent = name;
    td.append(p);
    nameRow.append(td);
  });
  table.append(nameRow);

  const descRow = document.createElement('tr');
  contactsData.forEach(({ description }) => {
    const td = document.createElement('td');
    td.className = 'table_body_row';
    const p = document.createElement('p');
    p.className = 'contact_person contact_description';
    p.textContent = description;
    td.append(p);
    descRow.append(td);
  });
  table.append(descRow);

  const emailRow = document.createElement('tr');
  contactsData.forEach(({ email }) => {
    const td = document.createElement('td');
    td.className = 'table_body_row';
    const p = document.createElement('p');
    p.className = 'contact_person contact_email';
    const link = document.createElement('a');
    link.className = 'contact-link';
    link.href = `mailto:${email}`;
    link.textContent = email;
    p.append(link);
    td.append(p);
    emailRow.append(td);
  });
  table.append(emailRow);

  const actionRow = document.createElement('tr');

  const feedbackTd = document.createElement('td');
  feedbackTd.className = 'table_body_row';
  feedbackTd.append(createFeedbackLink('media_links_1'));
  actionRow.append(feedbackTd);

  const socialsTd = document.createElement('td');
  socialsTd.className = 'table_body_row';
  socialsTd.append(createSocialLinksBlock());
  actionRow.append(socialsTd);

  table.append(actionRow);

  container.innerHTML = '';
  container.append(table);
}

function renderContactsMobile() {
  const container = document.getElementById('contacts_mobile');
  if (!container) return;

  container.innerHTML = '';

  contactsData.forEach((contact, index) => {
    const table = document.createElement('table');
    table.className = 'contacts_table_media';

    const headingRow = document.createElement('tr');
    const th = document.createElement('th');
    th.className = 'table_head_row';
    const h3 = document.createElement('h3');
    h3.className = 'table_heading table_heading_with_padding';
    h3.textContent = contact.heading;
    th.append(h3);
    headingRow.append(th);
    table.append(headingRow);

    const nameRow = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.className = 'table_body_row';
    const nameP = document.createElement('p');
    nameP.className = 'contact_person contact_name';
    nameP.textContent = contact.name;
    nameTd.append(nameP);
    nameRow.append(nameTd);
    table.append(nameRow);

    const descRow = document.createElement('tr');
    const descTd = document.createElement('td');
    descTd.className = 'table_body_row';
    const descP = document.createElement('p');
    descP.className = 'contact_person contact_description';
    descP.textContent = contact.description;
    descTd.append(descP);
    descRow.append(descTd);
    table.append(descRow);

    const emailRow = document.createElement('tr');
    const emailTd = document.createElement('td');
    emailTd.className = 'table_body_row';
    const emailP = document.createElement('p');
    emailP.className = 'contact_person contact_email';
    const emailLink = document.createElement('a');
    emailLink.className = 'contact-link';
    emailLink.href = `mailto:${contact.email}`;
    emailLink.textContent = contact.email;
    emailP.append(emailLink);
    emailTd.append(emailP);
    emailRow.append(emailTd);
    table.append(emailRow);

    if (index === 0) {
      const feedbackRow = document.createElement('tr');
      const feedbackTd = document.createElement('td');
      feedbackTd.className = 'table_body_row';
      feedbackTd.append(createFeedbackLink());
      feedbackRow.append(feedbackTd);
      table.append(feedbackRow);
    }

    if (index === contactsData.length - 1) {
      const socialsRow = document.createElement('tr');
      const socialsTd = document.createElement('td');
      socialsTd.className = 'table_body_row';
      socialsTd.append(createSocialLinksBlock(true));
      socialsRow.append(socialsTd);
      table.append(socialsRow);
    }

    container.append(table);
  });
}

function createFeedbackLink(id) {
  const wrapper = document.createElement('div');
  wrapper.className = 'media_links';
  if (id) {
    wrapper.id = id;
  }
  const inner = document.createElement('div');
  inner.className = 'social_links social_links--light';
  const link = document.createElement('a');
  link.className = 'buy_ticket google_form_button';
  link.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfCnsmZN9jrxK6_Z7bRLILO5AATW37oWLH8v6a0cGMt-zofMg/viewform';
  link.target = '_blank';
  link.textContent = 'отзывы и предложения';
  inner.append(link);
  wrapper.append(inner);
  return wrapper;
}

function createSocialLinksBlock(isMobile = false) {
  const wrapper = document.createElement('div');
  wrapper.className = `media_links media_links_2${isMobile ? '' : ''}`;

  const linksContainer = document.createElement('div');
  linksContainer.className = 'social_links social_links--light';

  socialLinks.forEach((social) => {
    const a = document.createElement('a');
    a.href = social.href;
    a.target = '_blank';
    a.setAttribute('aria-label', social.label);

    const icon = createSocialIcon(social.type);
    if (icon) {
      a.append(icon);
    }

    linksContainer.append(a);
  });

  wrapper.append(linksContainer);
  return wrapper;
}

function createSocialIcon(type) {
  if (type === 'instagram') {
    const div = document.createElement('div');
    div.innerHTML = `<svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.14 122.88"><g><path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z"/></g></svg>`;
    return div.firstChild;
  }

  const i = document.createElement('i');
  i.classList.add('fa-brands');

  const iconMap = {
    vk: 'fa-vk',
    telegram: 'fa-telegram',
    youtube: 'fa-youtube',
    tiktok: 'fa-tiktok',
  };

  if (iconMap[type]) {
    i.classList.add(iconMap[type]);
    return i;
  }

  return null;
}

function renderShows() {
  const postersContainer = document.getElementById('our_shows');
  const modalsContainer =
    document.getElementById('modals_container') ||
    (() => {
      const div = document.createElement('div');
      div.id = 'modals_container';
      document.body.append(div);
      return div;
    })();

  if (!postersContainer) return;

  postersContainer.innerHTML = '';
  modalsContainer.innerHTML = '';

  showsData.forEach((show) => {
    const posterBtn = document.createElement('button');
    posterBtn.type = 'button';
    posterBtn.className = 'btn-reset show_poster_button';
    posterBtn.setAttribute('data-modal-target', `modal-${show.id}`);

    const img = document.createElement('img');
    img.src = show.poster;
    img.alt = show.posterAlt || show.title;
    img.className = 'poster_photo poster_image';

    posterBtn.append(img);
    postersContainer.append(posterBtn);

    const modal = createShowModal(show);
    modalsContainer.append(modal);
  });
}

function createShowModal(show) {
  const modalParent = document.createElement('div');
  modalParent.className = 'modal-parent';
  modalParent.id = `modal-${show.id}`;
  modalParent.setAttribute('data-modal-id', show.id);

  const wrapper = document.createElement('div');
  wrapper.className = 'modal-wrapper';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const info = document.createElement('div');
  info.className = 'modal_info';

  const title = document.createElement('h2');
  title.className = 'modal_title';
  title.textContent = show.title;

  info.append(title);

  show.description.forEach((paragraph) => {
    const p = document.createElement('p');
    p.className = 'modal_text';
    p.textContent = paragraph;
    info.append(p);
  });

  if (show.duration) {
    const p = document.createElement('p');
    p.className = 'modal_text';
    p.innerHTML = `Продолжительность: <br>${show.duration}`;
    info.append(p);
  }

  if (show.dates) {
    const p = document.createElement('p');
    p.className = 'modal_text';
    p.innerHTML = `Ближайшие спектакли: <br>${show.dates}`;
    info.append(p);
  }

  if (show.ticketUrl) {
    const ticket = document.createElement('a');
    ticket.className = 'buy_ticket';
    ticket.href = show.ticketUrl;
    ticket.target = '_blank';
    ticket.textContent = 'Купить билет';
    info.append(ticket);
  }

  modal.append(info);

  if (show.gallery?.images?.length) {
    modal.append(createShowGallery(show));
  }

  wrapper.append(modal);
  modalParent.append(wrapper);
  return modalParent;
}

function createShowGallery(show) {
  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'modal_gallery_all';

  const gallery = document.createElement('div');
  gallery.className = 'modal_gallery';

  const swiper = document.createElement('div');
  swiper.className = 'swiper modal_swiper';
  swiper.id = show.gallery.swiperId;

  const swiperWrapper = document.createElement('div');
  swiperWrapper.className = 'swiper-wrapper';

  show.gallery.images.forEach((imgData) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide modal_swiper_slide';

    const card = document.createElement('a');
    card.className = 'modal_gallery_cards';
    card.setAttribute('aria-label', imgData.alt);

    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.className = `modal_card_image${imgData.topAligned ? ' modal_card_image--top' : ''}`;

    card.append(img);
    slide.append(card);
    swiperWrapper.append(slide);
  });

  swiper.append(swiperWrapper);
  gallery.append(swiper);
  galleryWrapper.append(gallery);

  const nav = document.createElement('div');
  nav.className = 'modal_gallery_nav';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'modal_gallery_arrows btn-reset modal_gallery__btn--left';
  prevBtn.id = show.gallery.prevEl;
  prevBtn.setAttribute('aria-label', 'Slide left');
  prevBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M26.25 14C26.25 13.7679 26.1578 13.5454 25.9937 13.3813C25.8296 13.2172 25.6071 13.125 25.375 13.125H4.73725L10.2445 7.61951C10.3259 7.53815 10.3904 7.44157 10.4344 7.33528C10.4784 7.22898 10.5011 7.11506 10.5011 7.00001C10.5011 6.88495 10.4784 6.77103 10.4344 6.66474C10.3904 6.55844 10.3259 6.46186 10.2445 6.38051C10.1631 6.29915 10.0666 6.23462 9.96027 6.19059C9.85398 6.14656 9.74005 6.1239 9.625 6.1239C9.50995 6.1239 9.39602 6.14656 9.28973 6.19059C9.18343 6.23462 9.08685 6.29915 9.0055 6.38051L2.0055 13.3805C1.92401 13.4618 1.85936 13.5583 1.81525 13.6646C1.77114 13.771 1.74844 13.8849 1.74844 14C1.74844 14.1151 1.77114 14.2291 1.81525 14.3354C1.85936 14.4417 1.92401 14.5382 2.0055 14.6195L9.0055 21.6195C9.08685 21.7009 9.18343 21.7654 9.28973 21.8094C9.39602 21.8535 9.50995 21.8761 9.625 21.8761C9.74005 21.8761 9.85398 21.8535 9.96027 21.8094C10.0666 21.7654 10.1631 21.7009 10.2445 21.6195C10.3259 21.5382 10.3904 21.4416 10.4344 21.3353C10.4784 21.229 10.5011 21.1151 10.5011 21C10.5011 20.885 10.4784 20.771 10.4344 20.6647C10.3904 20.5584 10.3259 20.4619 10.2445 20.3805L4.73725 14.875H25.375C25.6071 14.875 25.8296 14.7828 25.9937 14.6187C26.1578 14.4546 26.25 14.2321 26.25 14Z" />
    </svg>
  `;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'modal_gallery_arrows btn-reset modal_gallery__btn--right';
  nextBtn.id = show.gallery.nextEl;
  nextBtn.setAttribute('aria-label', 'Slide right');
  nextBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M1.75001 14C1.75001 13.7679 1.84219 13.5454 2.00629 13.3813C2.17038 13.2172 2.39294 13.125 2.62501 13.125H23.2628L17.7555 7.61951C17.6742 7.53815 17.6096 7.44157 17.5656 7.33528C17.5216 7.22898 17.4989 7.11506 17.4989 7.00001C17.4989 6.88495 17.5216 6.77103 17.5656 6.66474C17.6096 6.55844 17.6742 6.46186 17.7555 6.38051C17.8369 6.29915 17.9334 6.23462 18.0397 6.19059C18.146 6.14656 18.26 6.1239 18.375 6.1239C18.4901 6.1239 18.604 6.14656 18.7103 6.19059C18.8166 6.23462 18.9132 6.29915 18.9945 6.38051L25.9945 13.3805C26.076 13.4618 26.1406 13.5583 26.1848 13.6646C26.2289 13.771 26.2516 13.8849 26.2516 14C26.2516 14.1151 26.2289 14.2291 26.1848 14.3354C26.1406 14.4417 26.076 14.5382 25.9945 14.6195L18.9945 21.6195C18.9132 21.7009 18.8166 21.7654 18.7103 21.8094C18.604 21.8535 18.4901 21.8761 18.375 21.8761C18.26 21.8761 18.146 21.8535 18.0397 21.8094C17.9334 21.7654 17.8369 21.7009 17.7555 21.6195C17.6742 21.5382 17.6096 21.4416 17.5656 21.3353C17.5216 21.229 17.4989 21.1151 17.4989 21C17.4989 20.885 17.5216 20.771 17.5656 20.6647C17.6096 20.5584 17.6742 20.4619 17.7555 20.3805L23.2628 14.875H2.62501C2.39294 14.875 2.17038 14.7828 2.00629 14.6187C1.84219 14.4546 1.75001 14.2321 1.75001 14Z" />
    </svg>
  `;

  nav.append(prevBtn, nextBtn);
  galleryWrapper.append(nav);

  return galleryWrapper;
}

function renderAboutUs() {
  const desktopContainer = document.getElementById('about_us_desktop');
  const mobileWrapper = document.getElementById('about_us_swiper_wrapper');

  if (desktopContainer) {
    desktopContainer.innerHTML = '';

    aboutUsData.forEach(({ image, firstName, lastName, role }) => {
      const cardWrapper = document.createElement('div');
      cardWrapper.append(createAboutUsCard({ image, firstName, lastName, role }));
      desktopContainer.append(cardWrapper);
    });
  }

  if (mobileWrapper) {
    mobileWrapper.innerHTML = '';

    aboutUsData.forEach(({ image, firstName, lastName, role }) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.append(createAboutUsCard({ image, firstName, lastName, role }));
      mobileWrapper.append(slide);
    });
  }
}

function createAboutUsCard({ image, firstName, lastName, role }) {
  const fullName = `${firstName} ${lastName}`;

  const card = document.createElement('a');
  card.className = 'about_us_cards';
  card.setAttribute('aria-label', fullName);

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'about_us_img';

  const img = document.createElement('img');
  img.src = image;
  img.alt = fullName;
  img.className = 'image-circle';

  const title = document.createElement('h2');
  title.innerHTML = `${firstName}<br>${lastName}`;

  const roleEl = document.createElement('p');
  roleEl.textContent = role;

  imgWrapper.append(img);
  card.append(imgWrapper, title, roleEl);

  return card;
}

function initSwipers() {
  if (typeof Swiper === 'undefined') {
    return;
  }

  const swiperConfigs = [
    {
      selector: '#first_swiper',
      options: {
        loop: true,
        freeMode: true,
        slidesPerView: 1,
        navigation: {
          prevEl: '#first_swiper_prev',
          nextEl: '#first_swiper_next',
        },
        breakpoints: {
          600: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1120: { slidesPerView: 3 },
        },
      },
    },
    {
      selector: '#about_us_swiper',
      options: {
        loop: true,
        freeMode: true,
        slidesPerView: 1,
        navigation: {
          prevEl: '#about_us_swiper_prev',
          nextEl: '#about_us_swiper_next',
        },
      },
    },
    {
      selector: '#fourth_swiper',
      options: {
        loop: true,
        freeMode: true,
        slidesPerView: 1,
        navigation: {
          prevEl: '#fourth_swiper_prev',
          nextEl: '#fourth_swiper_next',
        },
        breakpoints: {
          600: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1230: { slidesPerView: 3 },
        },
      },
    },
    ...showsData
      .filter((show) => show.gallery?.images?.length)
      .map((show) => ({
        selector: `#${show.gallery.swiperId}`,
        options: {
          loop: true,
          freeMode: true,
          slidesPerView: 1,
          navigation: {
            prevEl: `#${show.gallery.prevEl}`,
            nextEl: `#${show.gallery.nextEl}`,
          },
        },
      })),
  ];

  swiperConfigs.forEach(({ selector, options }) => {
    if (document.querySelector(selector)) {
      new Swiper(selector, options);
    }
  });
}

function initModals() {
  const locker = createScrollLocker();
  const modalControllers = Array.from(document.querySelectorAll('.modal-parent'))
    .map((modalParent) => setupModal(modalParent, locker))
    .filter(Boolean);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalControllers.forEach(({ close }) => close());
    }
  });
}

function setupModal(modalParent, locker) {
  const modalContent = modalParent?.querySelector('.modal');
  const triggers = Array.from(
    document.querySelectorAll(`[data-modal-target="${modalParent.id}"]`),
  );

  if (!modalContent || triggers.length === 0) return null;

  let isOpen = false;

  const open = () => {
    if (isOpen) return;
    modalParent.classList.add('modal-parent--open');
    locker.lock();
    isOpen = true;
  };

  const close = () => {
    if (!isOpen) return;
    modalParent.classList.remove('modal-parent--open');
    locker.unlock();
    isOpen = false;
  };

  triggers.forEach((trigger) => trigger.addEventListener('click', open));
  modalContent.addEventListener('click', (event) => event.stopPropagation());
  modalParent.addEventListener('click', (event) => {
    if (!modalContent.contains(event.target)) {
      close();
    }
  });

  return { close };
}

function createScrollLocker() {
  let scrollPosition = 0;
  let locked = false;

  return {
    lock() {
      if (locked) return;
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
      locked = true;
    },
    unlock() {
      if (!locked) return;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
      locked = false;
    },
  };
}

function initContactMediaLinks() {
  const originalParent = document.querySelector('.contacts_table .media_links');
  const mediaLinks = document.getElementById('media_links_1');
  const targetContainer = document.querySelector('.media_links_2');
  let isMobilePlacement = false;

  if (!originalParent || !mediaLinks || !targetContainer) {
    return;
  }

  const syncPlacement = () => {
    const shouldMove = window.innerWidth <= 767;

    if (shouldMove && !isMobilePlacement) {
      targetContainer.appendChild(mediaLinks);
      isMobilePlacement = true;
    } else if (!shouldMove && isMobilePlacement) {
      originalParent.appendChild(mediaLinks);
      isMobilePlacement = false;
    }
  };

  window.addEventListener('resize', syncPlacement);
  syncPlacement();
}

function initViewportSizeVars() {
  const root = document.documentElement;
  const updateVars = () => {
    root.style.setProperty('--app-height', `${window.innerHeight}px`);
    root.style.setProperty('--app-width', `${window.innerWidth}px`);
  };

  window.addEventListener('resize', updateVars);
  updateVars();
}
