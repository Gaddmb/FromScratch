const form = document.querySelector("form");
//***** Local storage  */
// crée une function pour stockées

// je lui passe tout le contenu de mon ul
const storeList = () => {
  localStorage.setItem("toto", list.innerHTML);
};

// cette function me permet de recuperer les toto
const getToto = () => {
  // je test si oui ou non il y a quelque chose a l'interieur dans (window.localStorage.toto)
  if (localStorage.getItem("toto")) {
    list.innerHTML = localStorage.getItem("toto");
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
};

getToto();

//******* Add elemnt */
// récuperer la valeur de mon input (toto.value) mais pour recuperer dans une balise c'est textcontent
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  // quand le formulaire et valid je veux faire un stockage
  storeList();
});

//** remove element */
list.addEventListener("click", (e) => {
  // si il n'a pas la class check tu le rajouter sinon tu le supprime
  // contain est une method pour savoir si la class existe
  // est ce qu'il a la class checked
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  // quand je supprimer un element je veux faire un stockage
  storeList();
});
