class ResultItem extends HTMLElement {
      constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
      }
      set list(list) {
            this._list = list;
            this.render();
      }
      render() {
            this._shadowRoot.innerHTML = `
                  <style>
                        * {
                              margin: 0;
                              padding: 0;
                              box-sizing: border-box;
                        }
                        :host {
                              display: block;
                              margin-bottom: 18px;
                              box-shadow: 0 4px 8px 0 rgba(52, 73, 94, 0.2);
                              border-radius: 10px;
                              overflow: hidden;
                              color: #fff;
                              background-image: linear-gradient(-90deg, #5c97bf, #3a539b);
                        }
                        
                        .item {
                              padding: 24px;
                              font-family: monospace;
                        }
                        
                        .item h3 {
                              font-weight: lighter;
                              font-size: 20px;
                              text-transform: uppercase;
                        }
                        
                        .item hr{
                              margin: 10px 0;
                        }

                        .item p {
                              margin-top: 10px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              display: -webkit-box;
                              -webkit-box-orient: vertical;
                              -webkit-line-clamp: 10; /* number of lines to show */
                        }
                  </style>
                  
                  <div class="item"> 
                        <h3>${this._list.place}</h3>
                        <hr>
                        <p>magnitude : ${this._list.mag}</p>
                        <p>time : ${new Date(this._list.time)}</p>
                        <p>update : ${new Date(this._list.updated)}</p>
                        <p>${this.tsunamiDetection(this._list.tsunami)}</p>
                  </div>
                `;

      }

      tsunamiDetection(tsunami) {
            if (tsunami === 1) {
                  let status = `
                        <p><i>This earthquake has tsunami potential<i></p>
                  `;
                  return status;
            } else {
                  let status = `
                        <p><i>This earthquake doesn't have tsunami potential<i></p>
                  `;
                  return status;
            };
      }
}
customElements.define('result-item', ResultItem)