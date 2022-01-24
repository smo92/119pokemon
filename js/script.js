//IIFE
let pokemonRepository = (function(){

  let pokemonList = [
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

        pokemonList.push(newPokemon);  
      }
    }
  }
  //adding a findPokenmon function to search by name
  function searchPokemon(searchName){
    let findPokemon = pokemonList.filter (pokemon => pokemon.name === searchName);
      return findPokemon
  }
  //Function to show all pokemon on the list
  function getAll(){
    return pokemonList;
  }
  return{
    add: add,
    getAll: getAll,
    searchPokemon: searchPokemon
  };

})();

console.log(pokemonRepository.searchPokemon('Squirtle'));

pokemonRepository.add({name:'Pikachu', height: '0.4', types: 'Fire'});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    document.write('<p>' + pokemon.name + ' is ' +    pokemon.height + ' tall, and is ' +             pokemon.types + ' type!' + '</p>');

  });
