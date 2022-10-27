import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = "World";
  }

  // Render the UI as a function of component state
  render() {
    return html`<h1>Hello, ${this.name}!</h1>`;
  }
}

export class SimpleClock extends LitElement {
  static properties = {
    _now: { state: true },
    _timerInterval: { state: true },
  };

  constructor() {
    super();
    this._now = new Date();
    this._timerInterval = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._timerInterval = setInterval(() => (this._now = new Date()), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timerInterval);
  }

  render() {
    return html`<div>Agora: ${this._now.toLocaleString()}</div>`;
  }
}

customElements.define("simple-clock", SimpleClock);
customElements.define("simple-greeting", SimpleGreeting);
