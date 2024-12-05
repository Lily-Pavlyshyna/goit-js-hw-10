import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDatetimePicker = document.querySelector('#datetime-picker');
const btn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
btn.addEventListener('click', startTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
        theme: 'dark',
        position: 'topRight',
      });
      btn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      btn.disabled = false;
    }
  },
};
flatpickr(inputDatetimePicker, options);

let userSelectedDate = null;
let timeInterval = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimer({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function startTimer() {
  btn.disabled = true;
  inputDatetimePicker.disabled = true;
  timeInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = userSelectedDate - now;
    if (timeDifference <= 0) {
      clearInterval(timeInterval);
      updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      inputDatetimePicker.disabled = false;
      return;
    }
    const leftTime = convertMs(timeDifference);
    updateTimer(leftTime);
  }, 1000);
}
