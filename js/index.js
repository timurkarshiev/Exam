let elList = document.querySelector(".pokemons__list");

for (let pokemon of pokemons) {
  // CREATE
  let pokemonsItem = document.createElement("li");
  let pokemonsImg = document.createElement("img");
  let pokemonsItemTexts = document.createElement("div");
  let pokemonsHeartIcon = document.createElement("img");
  let pokemonsName = document.createElement("p");
  let pokemonsType = document.createElement("p");
  let pokemonsBottomTexts = document.createElement("div");
  let pokemonsWeight = document.createElement("p");
  let pokemonsHeight = document.createElement("p");

  // SET ATTRIBUTE
  pokemonsItem.setAttribute(
    "class",
    "pokemons__item d-flex flex-column align-content-center"
  );
  pokemonsImg.setAttribute("class", "item-photo mx-auto");
  pokemonsImg.setAttribute("src", pokemon.img);
  pokemonsImg.setAttribute("alt", "pokemon photo");
  pokemonsItemTexts.setAttribute("class", "item-body position-relative");
  pokemonsHeartIcon.setAttribute("class", "item-heart position-absolute");
  pokemonsHeartIcon.setAttribute("src", "./img/heart.svg");
  pokemonsHeartIcon.setAttribute("alt", "heart-icon");
  pokemonsHeartIcon.setAttribute("width", "30");
  pokemonsHeartIcon.setAttribute("height", "30");
  pokemonsName.setAttribute("class", "item-name");
  pokemonsType.setAttribute("class", "item-type");
  pokemonsBottomTexts.setAttribute("class", "item-bottom d-flex");
  pokemonsWeight.setAttribute("class", "item-weight");
  pokemonsHeight.setAttribute("class", "item-height");

  // TEXTCONTENT
  pokemonsName.textContent = pokemon.name;
  pokemonsType.textContent = pokemon.type;
  pokemonsWeight.textContent = pokemon.weight;
  pokemonsHeight.textContent = pokemon.height;

  // APPEND
  elList.appendChild(pokemonsItem);
  pokemonsItem.appendChild(pokemonsImg);
  pokemonsItem.appendChild(pokemonsItemTexts);
  pokemonsItemTexts.appendChild(pokemonsHeartIcon);
  pokemonsItemTexts.appendChild(pokemonsName);
  pokemonsItemTexts.appendChild(pokemonsType);
  pokemonsItemTexts.appendChild(pokemonsBottomTexts);
  pokemonsBottomTexts.appendChild(pokemonsWeight);
  pokemonsBottomTexts.appendChild(pokemonsHeight);
}
