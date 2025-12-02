export const aboutUsData = [
  { image: 'media/We/AGolikova.webp', firstName: 'Александра', lastName: 'Голикова', role: 'Режиссёр' },
  { image: 'media/We/MLobova.webp', firstName: 'Мария', lastName: 'Лобова', role: 'Помощник режиссёра' },
  { image: 'media/We/MMiglau.webp', firstName: 'Мария', lastName: 'Миглау', role: 'Генеральный директор' },
  { image: 'media/We/Temp.webp', firstName: 'Екатерина', lastName: 'Шишкова', role: 'Исполнительный продюсер' },
  { image: 'media/We/DSinitsyn.webp', firstName: 'Дмитрий', lastName: 'Синицын', role: 'Линейный продюсер' },
  { image: 'media/We/IShein.webp', firstName: 'Ян', lastName: 'Шеин', role: 'Технический директор' },
  { image: 'media/We/DChevalier.webp', firstName: 'Даниил', lastName: 'Шевалье', role: 'Креативный директор' },
  { image: 'media/We/KZimina.webp', firstName: 'Ксения', lastName: 'Зимина', role: 'Директор по маркетингу' },
  { image: 'media/We/Azmailova.webp', firstName: 'Арина', lastName: 'Измайлова', role: 'Драматург' },
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
