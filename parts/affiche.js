export const afishaData = [
  {
    day: '13',
    month: 'Октября',
    title: 'Вишнёвый сад (16+)',
    time: 'пн 19:00',
    ticketUrl: 'https://iframeab-pre8338.intickets.ru/seance/63691857',
  },
  {
    day: '14',
    month: 'Октября',
    title: 'Вишнёвый сад (16+)',
    time: 'вт 19:00',
    ticketUrl: 'https://iframeab-pre8338.intickets.ru/seance/63692635',
  },
];

export function renderAfisha() {
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
    titleLink.href = '#theatre_part';
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
