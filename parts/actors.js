export const actorsData = [
  { image: 'media/Actors/PLeshchenko.webp', firstName: 'Павел', lastName: 'Лещенко' },
  { image: 'media/Actors/ALobova.webp', firstName: 'Александа', lastName: 'Лобова' },
  { image: 'media/Actors/STsulaya.webp', firstName: 'Софи', lastName: 'Цулая' },
  { image: 'media/Actors/KTrachevsky.webp', firstName: 'Константин', lastName: 'Трачевский' },
  { image: 'media/Actors/EDesyatnikova.webp', firstName: 'Екатерина', lastName: 'Десятникова' },
  { image: 'media/Actors/ARozhdestvenskaya.webp', firstName: 'Алёна', lastName: 'Рождественская' },
  { image: 'media/Actors/YPolyakov.webp', firstName: 'Ярослав', lastName: 'Поляков' },
  { image: 'media/Actors/IMalkin.webp', firstName: 'Иван', lastName: 'Малкин' },
  { image: 'media/Actors/DShelegova.webp', firstName: 'Дарья', lastName: 'Шелегова' },
  { image: 'media/Actors/AStepanova.webp', firstName: 'Анна', lastName: 'Степанова' },
  { image: 'media/Actors/GLosev.webp', firstName: 'Григорий', lastName: 'Лосев' },
  { image: 'media/Actors/IVelikaya.webp', firstName: 'Ирина', lastName: 'Великая' },
  { image: 'media/Actors/SChakvetadze.webp', firstName: 'Сандро', lastName: 'Чакветадзе' },
  { image: 'media/Actors/IIvanov.webp', firstName: 'Илья', lastName: 'Иванов' },
  { image: 'media/Actors/AIzotov.webp', firstName: 'Артём', lastName: 'Изотов' },
  { image: 'media/Actors/NSultanova.webp', firstName: 'Нина', lastName: 'Султанова' },
  { image: 'media/Actors/MChurmasov.webp', firstName: 'Максим', lastName: 'Чурмасов' },
  { image: 'media/Actors/NVasilieva.webp', firstName: 'Наталия', lastName: 'Васильева' },
];

export function renderActorsGallery() {
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
    img.className = 'actor_card_image image-square theatre_part_images';

    const title = document.createElement('h2');
    title.innerHTML = `${firstName}<br>${lastName}`;

    card.append(img, title);
    slide.append(card);
    wrapper.append(slide);
  });
}
