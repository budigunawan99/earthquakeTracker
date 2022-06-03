import logoIcon from '../../assets/logo.png';
import "../components/SearchMag.js";
import "../components/ResultList.js";
import DataEq from "../data/data-eq.js";

const main = () => {
      document.getElementById('logoIcon').src = logoIcon;

      $(".navbar a").on('click', function (event) {
            if (this.hash !== "") {
                  event.preventDefault();

                  let hash = this.hash;

                  $('html, body').animate({
                        scrollTop: $(hash).offset().top
                  }, 900, function () {
                        window.location.hash = hash;
                  });
            }
      });

      const searchComponent = document.querySelector("search-mag");
      const resultListComponent = document.querySelector("result-list");

      const onSearchButtonClicked = async () => {
            try {
                  const result = await DataEq.searchBy(searchComponent.value);
                  successResult(result)
            } catch (msg) {
                  rejectedResult(msg);
            }
      };

      const successResult = results => {
            resultListComponent.lists = results;
      };

      const rejectedResult = message => {
            console.log(message)
            resultListComponent.renderErr(message);
      };

      searchComponent.clickEvent = onSearchButtonClicked;


}

export default main;