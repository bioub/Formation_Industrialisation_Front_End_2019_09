import './index.scss';

// import { Clock } from './clock.js';

// /** @type {HTMLDivElement} */
// const divElt = document.querySelector('.horloge');
// const clock = new Clock(divElt);
// clock.start();

document.addEventListener('click', () => {
  import('./clock').then(({ Clock }) => {
    /** @type {HTMLDivElement} */
    const divElt = document.querySelector('.horloge');
    const clock = new Clock(divElt);
    clock.start();
  });
});
