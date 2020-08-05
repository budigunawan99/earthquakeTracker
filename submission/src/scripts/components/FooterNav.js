class FooterNav extends HTMLElement {
      constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
            this.render();
      }

      render() {
            this._shadowRoot.innerHTML =
                  `      
                  <style>
                        footer {
                              padding: 28px 20px 20px 20px;
                              color: white;
                              background-color: #34495e;
                              text-align: center;
                              font-weight: 500;
                              font-family: sans-serif;
                        } 
                  </style>
                  <footer>
                        <p>Earthquake Tracker &#169; 2020, Budi Gunawan</p>
                  </footer>
            `;
      }
}

customElements.define('footer-nav', FooterNav);