import './ResultItem.js';

class ResultList extends HTMLElement {
      constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
      }

      set lists(lists) {
            this._lists = lists;
            this.render();
      }

      render() {
            this._shadowRoot.innerHTML = `
                  <style>
                        result-item{
                              margin-top: 50px;
                        }
                  </style>
            `;

            this._lists.forEach(list => {
                  const resultItem = document.createElement('result-item');
                  resultItem.list = list.properties;
                  this._shadowRoot.appendChild(resultItem);
            })
      }

      renderErr(message) {
            this._shadowRoot.innerHTML = "";
            this._shadowRoot.innerHTML += `
                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                  <div class="alert alert-danger" role="alert">
                        ${message}
                  </div>     
                  `;
      }
}

customElements.define('result-list', ResultList);