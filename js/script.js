//IIFE
let pokemonRepository = (function () {
  let pokemonRepo = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 
//Function to add pokemon to list
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonRepo.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  //adding a findPokenmon function to search by name
  function searchPokemon(searchName){
    let findPokemon = pokemonRepo.filter (pokemon => pokemon.name === searchName);
      return findPokemon;
  }
  //Function to show all pokemon on the list
  function getAll(){
    return pokemonRepo;
  }
  //function to add a button for each pokemon that when clicked on
  // will show the details about that pokemon
  function addListItem(pokemon){
    //call to pokemon-list in html
    let pokemonList = document.querySelector(".pokemon-list");
    //creating a list item in pokemon-list
    let listpokemon = document.createElement("li");
    //creating a button for each list item
    let button = document.createElement("button");
    //making text of button show pokemons name
    button.innerText = pokemon.name;
    //adding a class to button to call style from css
    button.classList.add("button-class");
    //adding buttons to pokemon-list
    listpokemon.appendChild(button);
    //adding ?????
    pokemonList.appendChild(listpokemon);
    //when button is clicked it will prompt showDetails function
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
   } 

    function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, 'Height:' + pokemon.height, pokemon.imageUrl);
    });
  } 
  //function to show modal with poke details
  function showModal(title,text,img_src){
    let modalContainer = document.querySelector('#modal-container');
    //clear old content
    modalContainer.innerText = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    //adding new content to modal
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    //hide modal when closeButton clicked
    closeButtonElement.addEventListener('click', hideModal);

    let modalTitle = document.createElement('h1');
    modalTitle.innerText = title;

    let modalContent = document.createElement('p');
    modalContent.innerText = text;

    let modalImg = document.createElement('img');
    modalImg.classList.add('modal-img');
    modalImg.src = img_src;

    modal.appendChild(closeButtonElement);
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);
    modal.appendChild(modalImg);
    modalContainer.appendChild(modal);
    //
    modalContainer.classList.add('is-visible');
    //close modal when user clicks outside of window
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer){
        hideModal();
      }
    });  
  }

  //function to hid modal until it is selected
  function hideModal(){
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
      hideModal();
    }
  });
 
  // the returns for each function in the IIFE
  return{
    add: add,
    getAll: getAll,
    searchPokemon: searchPokemon,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});