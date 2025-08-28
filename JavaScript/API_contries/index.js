const countriesContainer = document.querySelector(".countries-container");
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const btnSort = document.querySelectorAll(".btnSort");

//* 1 - Tester le lien de l'API dans le navigateur
// (https://restcountries.com/v3.1/all)

//* 3 - Passer les données à une variable
let countriesData = [];
//----------
let sortMethod = "alpha";

//* 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
  countriesDisplay();
}

//* 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
//* 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//*  6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    // avant de maper filtre les donnéespour trouver ce qui a etait taper
    //renvoie tous les pays "qui est taper dans l'input"
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    //slice() est une méthode pratique pour copier et extraire des portions de tableaux ou de chaînes de caractères, sans altérer la source d'origine. (je lui crée un event)
    .slice(0, inputRange.value)
    .map(
      (country) => `
    <div class="card">
    <img src=${country.flags.svg} alt="drapeau ${
        country.translations.fra.common
      }">
    <h2>${country.translations.fra.common}</h2>
    <h4>${country.capital}</h4>
    <p>population : ${country.population.toLocaleString()}</p>
    </div>
    `
    )
    .join("");
}

// Utilise l'événement 'load' pour garantir que la fonction fetchCountries s'exécute seulement après que la page soit complètement chargée, assurant ainsi que tous les éléments du DOM sont disponibles.
window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);

// grace a cette event j'ai la valeur en temsp reel
inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

//*  7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});
