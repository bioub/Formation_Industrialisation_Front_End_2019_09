import './index.scss';

import { Clock } from './clock';

/** @type {HTMLDivElement} */
const divElt = document.querySelector('.horloge');
const clock = new Clock(divElt);
clock.start();

// document.addEventListener('click', () => {
//   import('./clock').then(({ Clock }) => {
//     /** @type {HTMLDivElement} */
//     const divElt = document.querySelector('.horloge');
//     const clock = new Clock(divElt);
//     clock.start();
//   });
// });

console.log([1, 2, 3].includes(3));
