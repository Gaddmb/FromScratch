const target = document.getElementById("target");

// je fais un array donc a tableau pour les mots que je souhaite faire defiler
let array = ["Developpeur ", "junior", "passioné"];

// je veux crée des lettre en cascade
// le but et que je puis me balader dans l'array du coup je crée mon index pour aller de mot a mot
let wordIndex = 0;
let letterIndex = 0;

// je crée une function pour crée des lettres
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// je fais de la recursivité c'est a dire une function qui s'appelle elle meme si certain condition son remplie
// length me permet a chaque mot d'avoir la longueur

const loop = () => {
  // Si wordIndex devient égal ou supérieur à la longueur de l'array (array.length), cela signifie que tous les mots ont été traités. À ce moment-là :
  // On réinitialise wordIndex à 0 pour recommencer à partir du premier mot dans l'array (wordIndex = 0).
  // On remet letterIndex à 0 pour recommencer à afficher les lettres du premier mot (letterIndex = 0).
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
    }

    // La condition vérifie simplement si l'index de la lettre actuelle est inférieur ou egale à la longueur du mot en cours (array[wordIndex].length). Tant que c'est le cas, tu continues à traiter les lettres une par une en appelant createLetter() puis en avançant avec letterIndex++. Ensuite, tu rappelles la fonction loop() pour relancer le processus.
    else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    }

    // Si letterIndex atteint la fin du mot (ou la dépasse), cela signifie que toutes les lettres ont été affichées. La condition (letterIndex < array[wordIndex].length) ne sera plus vraie, donc l'ajout de lettres s'arrêtera. À ce moment-là, le code dans le else s'exécute. Dans ce bloc :
    //  On passe au mot suivant en augmentant wordIndex (wordIndex++).
    // On remet l'index des lettres à zéro (letterIndex = 0) pour commencer à afficher les lettres du nouveau mot.
    //  On attend 2,8 secondes avant de redémarrer la boucle (loop()), pour donner une pause entre les mots
    else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};

loop();
