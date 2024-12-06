import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formEl = event.target;
  const delay = formEl.delay.value;
  const state = formEl.state.value;

  const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  };

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        theme: 'dark',
        backgroundColor: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        theme: 'dark',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    });
});
