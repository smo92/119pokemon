let pokemonList=[
  {name:'Charmeleon', height:6, type: 'Fire'},
  {name:'Squirtle', height:4, type:'water'},
  {name:'Balbasour', height:7, type:'grass,posion'}
];

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 6){
    document.write('<p>' + pokemonList[i].name + ' height is ' + pokemonList[i].height + ' wow that big!' + '</p>')
  }else{
    document.write('<p>' + pokemonList[i].name + ' height is ' + pokemonList[i].height + '</p>')
  }
}