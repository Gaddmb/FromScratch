const form = document.getElementById("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");

// Variable qui stockera le nombre total de secondes
let totalSecond;
let interval;

const countDown = () => {
  // Calcul des minutes : on divise le nombre total de secondes par 60 et on prend la partie entière
  const minutes = Math.floor(totalSecond / 60);

  // Calcul des secondes restantes : on utilise l'opérateur modulo pour obtenir le reste de la division par 60
  const seconds = totalSecond % 60;

  // Si les secondes sont inférieures à 10, on les affiche avec un "0" devant pour avoir un format "00"

  const sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSecond > 0) {
    totalSecond--;
  } else {
    countdownDisplay.textContent = "C'est terminé";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // si l'utilisateur a envoyé un chiffre
  // isNan method pour savoir si c'est un chiffre
  if (isNaN(choice.value)) {
    alert("Entrez un chiffre avant");
  } else {
    // Si c'est bien un nombre, on convertit cette valeur (minutes) en secondes
    totalSecond = choice.value * 60; // Par exemple, si l'utilisateur entre 5, cela devient 5 * 60 = 300 secondes

    // On vide le champ de saisie après traitement
    choice.value = ""; // Cela réinitialise le champ pour qu'il soit prêt à une nouvelle entrée
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
