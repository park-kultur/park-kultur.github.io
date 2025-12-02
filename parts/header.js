export function initNavigation() {
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
