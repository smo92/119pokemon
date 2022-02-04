let pokemonRepository = (function () {
  let pokemonRepo = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 
//Function to add pokemon to list
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon && 'detailsUrl' in pokemon
    ) {
      pokemonRepo.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

//Function to show all pokemon on the list
  function getAll(){
    return pokemonRepo;
  }


  function addListItem(pokemon){
   pokemonRepository.loadDetails(pokemon).then(function() {
     let $row = $(".row");
     let $card = $('<div class= "card" style= "width:30%"></div>');
     let $img = $('<img class="card-img-top" alt="Card image" style="width:20%" />');
    
    $image.attr=("src", pokemon.imageUrlFront);
      let $cardBody = $('<div class= "card-boy"></div>')
      let $cardTitle = $('<h4> class="card-title"> + pokemon.name + </h4>');
      let $seeProfile = $('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>');
     
     //creating a card for each pokemon
     $row.append($card);
     //apending image to card
     $card.append($image);
     //appending content of cardBody
     $card.append($cardBody);
     //defining content in cardBody
     $cardBody.append($cardTitle);
     //adding a button to show more details
     $cardBody.append($seeProfile);

     //adding addEventListener (.on) to seeProfile btn is click it will
     // trigger showDetails function
     $seeProfile.on('click', function(event){
       showDetails(pokemon);
     });
   });
  } 

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

  function loadList() {
    return $.ajax(apiUrl).then(function(json){
      json.results.forEach(function(item){
        let pokemon= {
          name = item.name,
          detailsUrl = item.url,
        };
        add(pokemon);
        console.log(pokemon);
      });
    })
    .catch(function(e){
      console.error(e);
    });
  }
  //Defining the content in the showDetails function which will be triggered
  // when the seeProfile btn is click
  function loadDetails(item) {
    let url= pokemon.detailsUrl;
    return $.ajax(url).then(function(details){
      pokemon.imageUrlFront = details.sprites.front_default;
      pokemon.imageUrlBack = details.sprites.back_default;
      pokemon.height = details.height;
      //loops to show each type and abilities
      item.types[];
      details.types.forEach(function(i){
        item.types.push(i.type.name);
      //for (let i = 0; i< details.types.length; i++) {
      //pokemon.types.push(details.types[i].type.name);
      });

      pokemon.abilities[];
      details.abilities.forEach(function(i){
        details.abilities.push(i.abilities.name);
      }

      pokemon.weight= details.weight;
    })
      .catch(function(e){
        console.error(e);
      });
  } 
  //function to show modal with poke details
  function showModal(pokemon){
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
    //clear existing content
    modalTitle.empty();
    modalBody.empty();
    //creating element for name in modal content
    let nameElement = $('<h1>' + pokemone.name + '</h1>');
    //creating img for modal content
    let imgageElementFront = $('<img class = "modal-img" style = "width:50%">');
    imgageElementFront.attr("src", pokemon.imageUrlFront);
    //creating height element for modal content
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    //creating weight element for modal content
    let weigthElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
    //creating abilities element for modal content
    let abilitiesElement = $('<p>' + 'Abilities: ' + pokemon.abilities + '</p>');

    modalTitle.append(nameElement);
    modalBody.append(imgageElementFront);
    modalBody.append(heightElement);
    modalBody.append(weigthElement);
    modalBody.append(abilitiesElement);

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
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});