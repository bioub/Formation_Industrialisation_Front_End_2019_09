import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { bind } from 'lodash-es';
import config from './config.json5';
import './clock.scss';

export class Clock {
  /**
   * @param {HTMLElement} host
   */
  constructor(host) {
    this.host = host;
  }
  _render() {
    this.host.innerText = format(new Date(), config.format, { locale: fr });
  }
  start() {
    this._render();
    setInterval(bind(this._render, this), 1000);
  }
}
