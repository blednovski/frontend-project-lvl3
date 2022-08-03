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

export default app;
