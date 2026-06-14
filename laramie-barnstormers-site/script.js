const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const navigationLinks = navigation.querySelectorAll('a');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const yearElement = document.querySelector('#current-year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      menuButton.focus();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const mode = contactForm.dataset.mode;

    if (mode === 'demo') {
      event.preventDefault();
      formStatus.textContent = 'This preview form is not connected yet. Please email LaramieBarnstormers@gmail.com.';
      formStatus.focus?.();
    }
  });
}
