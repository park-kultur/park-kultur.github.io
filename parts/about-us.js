export const aboutUsData = [
  { image: 'media/We/AGolikova.webp', firstName: 'Александра', lastName: 'Голикова', role: 'Режиссёр' },
  { image: 'media/We/MLobova.webp', firstName: 'Мария', lastName: 'Лобова', role: 'Помощник режиссёра' },
  { image: 'media/We/MMiglau.webp', firstName: 'Мария', lastName: 'Миглау', role: 'Операционный директор' },
  { image: 'media/We/Temp.webp', firstName: 'Екатерина', lastName: 'Шишкова', role: 'Исполнительный продюсер' },
  { image: 'media/We/Temp.webp', firstName: 'Арина', lastName: 'Смирнова', role: 'Линейный продюсер' },
  { image: 'media/We/DSinitsyn.webp', firstName: 'Дмитрий', lastName: 'Синицын', role: 'Продюсер' },
  { image: 'media/We/FGolikov.webp', firstName: 'Фёдор', lastName: 'Голиков', role: 'Сценограф' },
  { image: 'media/We/VMaslova.webp', firstName: 'Виктория', lastName: 'Маслова', role: 'Художник' },
  { image: 'media/We/IShein.webp', firstName: 'Ян', lastName: 'Шеин', role: 'Технический директор' },
  { image: 'media/We/DChevalier.webp', firstName: 'Даниил', lastName: 'Шевалье', role: 'Креативный директор' },
  { image: 'media/We/NSultanova.webp', firstName: 'Нина', lastName: 'Султанова', role: 'Директор по маркетингу' },
  { image: 'media/We/Temp.webp', firstName: 'Полина', lastName: 'Белосорочко', role: 'Руководитель отдела SMM и PR' },
  { image: 'media/We/Azmailova.webp', firstName: 'Арина', lastName: 'Измайлова', role: 'Драматург' },
  { image: 'media/We/MFedotova.webp', firstName: 'Мари', lastName: 'Федотова', role: 'Фотограф' },
  { image: 'media/We/KLitovkin.webp', firstName: 'Кирилл', lastName: 'Литовкин', role: 'Фотограф' },
];

export function renderAboutUs() {
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
