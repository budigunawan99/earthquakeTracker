class SearchMag extends HTMLElement {
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
            return this._shadowRoot.querySelector('#criteria').value;
      }

      render() {
            this._shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
            <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
            <style>
                  .kontainer{
                        display: flex;
                        flex-direction: row;
                  }

                  .form-group{
                        flex-basis: 55%;
                  }

                  .button{
                        flex-basis: 45%;
                        margin: 24px 20px 20px 20px;
                  }
                  @media screen and (max-width: 700px) {
                        .kontainer{                          
                              flex-direction: column;
                        }
                        .button{
                              margin-top: 10px;
                              margin-left: 0;
                        }
                  }
            </style>
                  <form>
                        <div class="kontainer">                        
                              <div class="form-group">
                                    <label for="criteria">Criteria</label>
                                    <select class="form-control" id="criteria">
                                          <option value="" selected>Select Magnitude</option>
                                          <option value="title"><= 2</option>
                                    </select>
                              </div>
                              <div class="button">
                                    <button id="searchButtonElement" type="submit" class="btn btn-primary">Search</button>
                              </div>        
                        </div>
                      
                  </form>
            `;

            this._shadowRoot.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
      }
}

customElements.define('search-mag', SearchMag);