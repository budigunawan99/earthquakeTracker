
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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <style>
                  .kontainer{
                        display: flex;
                        flex-direction: row;
                  }

                  .form-group{
                        flex-basis: 55%;
                  }

                  a.btn{
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
                                          <option value="" disabled selected>Select Magnitude</option>
                                          <option value=5>>= 5</option>
                                          <option value=6>>= 6</option>
                                          <option value=7>>= 7</option>
                                          <option value=8>>= 8</option>
                                          <option value=9>>= 9</option>
                                    </select>
                              </div>
                              <div class="button">
                                    <a id="searchButtonElement" href="javascript:void(0)" class="btn btn-primary">Search</a>
                              </div>        
                        </div>
                      
                  </form>
            `;

            this._shadowRoot.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
      }
}

customElements.define('search-mag', SearchMag);