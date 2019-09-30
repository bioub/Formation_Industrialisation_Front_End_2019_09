import { Clock } from './clock.js';

/** @type {HTMLDivElement} */
const divElt = document.querySelector('.horloge');
const clock = new Clock(divElt);
clock.start();
