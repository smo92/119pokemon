let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function o(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("pokemon is not correct")}function i(t){pokemonRepository.loadDetails(t).then(function(){n(t)})}function n(t){let e=$(".modal-body"),o=$(".modal-title");$(".modal-header");o.empty(),e.empty();let i=$("<h1>"+t.name+"</h1>"),n=$('<img class = "modal-img" style = "width:50%">');n.attr("src",t.imageUrlFront);let a=$("<p>Height: "+t.height+"</p>"),l=$("<p>Weight: "+t.weight+"</p>"),s=$("<p>Abilities: "+t.abilities+"</p>"),r=$("<p>Types: "+t.types+"</p>");o.append(i),e.append(n),e.append(a),e.append(l),e.append(s),e.append(r)}return window.addEventListener("keydown",t=>{let e=document.querySelector("#modal-container");"Escape"===t.key&&e.classList.contains("is-visible")&&document.querySelector("#modal-container").classList.remove("is-visible")}),{add:o,getAll:function(){return t},addListItem:function(t){pokemonRepository.loadDetails(t).then(function(){let e=$(".row"),o=$('<div class= "card" style= "width:30%"></div>'),n=$('<img class="card-img-top" alt="Card image" style="width:20%" />');n.attr("src",t.imageUrlFront);let a=$('<div class= "card-body"></div>'),l=$('<h4 class="card-title">'+t.name+"</h4>"),s=$('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>');e.append(o),o.append(n),o.append(a),a.append(l),a.append(s),s.on("click",function(e){i(t)})})},loadList:function(){return $.ajax(e).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};o(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:function(t){let e=t.detailsUrl;return $.ajax(e).then(function(e){t.imageUrlFront=e.sprites.front_default,t.imageUrlBack=e.sprites.back_default,t.height=e.height,t.weight=e.weight,t.types=[];for(let o=0;o<e.types.length;o++)t.types.push(e.types[o].type.name);t.abilities=[];for(let o=0;o<e.abilities.length;o++)t.abilities.push(e.abilities[o].ability.name)}).catch(function(t){console.error(t)})},showModal:n,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})}),$(document).ready(function(){$("#searchBar").on("keyup",function(){var t=$(this).val().toLowerCase();$(".card").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})});