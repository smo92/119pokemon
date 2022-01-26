//IIFE
let pokemonRepository = (function(){

  let pokemonRepo = [
  {name:'Charmander', height:0.6, types: ['Fire']},
  {name:'Squirtle', height:0.4, types:['water']},
  {name:'Balbasour', height:0.7, types:['Grass,Posion']},
  {name: 'Golbat', height:1.6, types: ['Flying','Posion']},
  {name:'Alakazam', height:1.5, types:['physic']},
];
  let pokemonTypes = ['Fire','Water','Grass','Posion','Flying','Physic'
];
 
//Function to add pokemon to list
  function add(newPokemon){
    //validating it is an object
        if(typeof newPokemon === 'object' && !Array.isArray(newPokemon)){
         //validating that it use object keys expected
        if (Object.keys(newPokemon)[0] === 'name' &&
            Object.keys(newPokemon)[1] ==='height' && 
            Object.keys(newPokemon)[2] === 'types'){

        pokemonRepo.push(newPokemon);  
      }
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
   // function that will give the details of the pokemon to console log 
    function showDetails(pokemon){
      console.log(pokemon);
  }
  // the returns for each function in the IIFE
  return{
    add: add,
    getAll: getAll,
    searchPokemon: searchPokemon,
    addListItem: addListItem
  };
})();

//calling searchPokemon function to console
console.log(pokemonRepository.searchPokemon('Squirtle'));

//calling add function to add new pokemon to pokeRepo
pokemonRepository.add({name:'Pikachu', height: '0.4', types: 'Fire'});

//calling getAll function to show all pokemon in the list 
console.log(pokemonRepository.getAll());

//calling the function addListItem to generate buttons for each
// pokemon on the list, that shows additonal details. As well as
//pushing them to the HTML page
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);

  });
    
