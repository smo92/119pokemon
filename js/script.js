//IIFE
let pokemonRepository = (function(){
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
