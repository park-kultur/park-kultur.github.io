import { initNavigation } from './partials/header.js';
import { renderAboutUs } from './partials/about-us.js';
import { renderActorsGallery } from './partials/actors.js';
import { renderAfisha } from './partials/affiche.js';
import { renderShows, getShowSwiperConfigs } from './partials/theatre.js';
import { renderContacts, initContactMediaLinks } from './partials/footer.js';

async function loadPartials() {
  const includeTargets = Array.from(document.querySelectorAll('[data-include]'));

  for (const target of includeTargets) {
    const url = target.getAttribute('data-include');

    if (!url) continue;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to load partial "${url}" (${response.status})`);
      }

      const html = await response.text();
      target.outerHTML = html;
    } catch (error) {
      console.error(`Could not load partial ${url}`, error);
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartials();
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
    ...getShowSwiperConfigs(),
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

function initViewportSizeVars() {
  const root = document.documentElement;
  const updateVars = () => {
    root.style.setProperty('--app-height', `${window.innerHeight}px`);
    root.style.setProperty('--app-width', `${window.innerWidth}px`);
  };

  window.addEventListener('resize', updateVars);
  updateVars();
}
