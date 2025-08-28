const counterDisplay = document.querySelector("h3");

let counter = 0;

// je mets toute la logique dans ma function
const bubbleMaker = () => {
  // je me crée une span qui n'est pas dans le html grace a la fonction createElement
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");

  // je dis le body tu as un enfant qui est bubble
  document.body.appendChild(bubble);

  // ( manipulation de DATA ) j'appelle la method random de l'objet de javaScript MATCH  ( Math commence avec une majuscule car c'est un objet )
  // ici j'aurais un chiffre entre 100 et 300 puis la stock

  const size = Math.random() * 200 + 100 + "px";

  // j'inject du style a ma bulle la hauteur et largeur

  bubble.style.height = size;
  bubble.style.width = size;

  //ensuite je souhaite lui données un top et une left

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //** En JS ne peux pas injecter quelque chose dans un Keyframe */
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    // je veux passé ma valeur donc je fais ci dessous
    counter++;
    counterDisplay.textContent = counter;

    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// au lieu de mettre une function fléche j'appelle directement ma function
setInterval(bubbleMaker, 3000);

// je dis que si jamais Math.random et superieur a 0.5 alors tu renvoie 1
// ( je fais une teneur)
// c"est comme si je faisais un if pour ensuite si c'est ca tu renvoie 1 sinon -1
