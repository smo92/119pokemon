//IIFE
let pokemonRepository = (function () {
  let pokemonRepo = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 
//Function to add pokemon to list
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
  }
  // the returns for each function in the IIFE
  return{
    add: add,
    getAll: getAll,
    searchPokemon: searchPokemon,
  };
})();


