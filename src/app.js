import i18next from 'i18next';
import ru from './locales/ru-RU.js';
import validator from './utils/validator.js';

const addedURLs = [];
const input = document.getElementById('url-input');
const form = document.querySelector('.rss-form.text-body');

const app = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const validURL = validator(input.value, addedURLs);

    if (typeof validURL === 'string') {
      addedURLs.push(input.value);
      input.classList.remove('is-invalid');
      input.value = '';
    } else {
      input.classList.add('is-invalid');
    }
  });

  input.focus();
};

const i18nextInstance = i18next.createInstance();
i18nextInstance.init({
  lng: 'ru',
  debug: true,
  resources: {
    ru,
  },
});

export default app;
