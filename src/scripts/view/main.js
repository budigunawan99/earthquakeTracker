
const main = () => {
      const searchElement = document.querySelector("search-mag");
      searchElement.clickEvent = function() {
            console.log(searchElement.value);
      }
}

export default main;