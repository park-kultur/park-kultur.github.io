export const contactsData = [
  {
    heading: 'Администрация и PR',
    name: 'Мария Миглау',
    description: 'Ответит на ваши вопросы о билетах, сотрудничестве и приёме на работу.',
    email: 'info@parkkultur.space',
  },
  {
    heading: 'Социальные сети',
    name: 'Даниил Шевалье',
    description: 'Есть креативные идеи для наших социальных сетей, вам сюда!',
    email: 'promo@parkkultur.space',
  },
];

export const socialLinks = [
  { href: 'https://vk.com/park.kultur', type: 'vk', label: 'VK' },
  { href: 'https://www.instagram.com/park.kultur', type: 'instagram', label: 'Instagram' },
  { href: 'https://t.me/parkkultur', type: 'telegram', label: 'Telegram' },
  { href: 'https://www.youtube.com/@park.kultur', type: 'youtube', label: 'YouTube' },
  { href: 'https://www.tiktok.com/@park_kultur?_t=ZM-90K61YR20VM&_r=1', type: 'tiktok', label: 'TikTok' },
];

export function renderContacts() {
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

export function initContactMediaLinks() {
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
