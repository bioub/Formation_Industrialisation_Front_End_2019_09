export class Clock {
  /**
   * @param {HTMLElement} host
   */
  constructor(host) {
    this.host = host;
  }
  _render() {
    this.host.innerText = new Date().toLocaleTimeString();
  }
  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
