class EqMap extends HTMLElement {
      constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
            this.render();
      }

      set clickEvent(event) {
            this._clickEvent = event;
            this.render();
      }

      get value() {

      }

      render() {
            this._shadowRoot.innerHTML = `
           
            `;


      }
}

customElements.define('eq-map', EqMap);