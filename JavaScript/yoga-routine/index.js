const main = document.querySelector("main");

// Tableau de base contenant les exercices, chaque exercice étant un objet avec une image et un temps minimal
const basicArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];
let exerciceArray = [];

// Fonction qui s'exécute immédiatement pour récupérer les exercices stockés
(() => {
  // Vérifie si des exercices sont déjà enregistrés dans le localStorage
  if (localStorage.exercices) {
    // Si des exercices existent, on les récupère et on les assigne à exerciceArray
    exerciceArray = JSON.parse(localStorage.exercices);
  } else {
    // Si aucun exercice n'est trouvé, on initialise exerciceArray avec un tableau de base
    exerciceArray = basicArray;
  }
})();

// Classe pour gérer un exercice et son chronomètre
class Exercice {
  constructor() {
    // Initialise l'index et le temps (minutes et secondes) de l'exercice courant
    this.index = 0;
    this.minutes = exerciceArray[this.index].min;
    this.seconds = 0;
  }

  // Met à jour le compte à rebours de l'exercice
  updateCountdown() {
    // Formate les secondes pour avoir un chiffre de deux chiffres
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    // Utilise setTimeout pour créer un compte à rebours
    setTimeout(() => {
      // Si le compte à rebours atteint zéro, passe à l'exercice suivant
      if (this.minutes === 0 && this.seconds === "00") {
        this.index++;
        this.ring(); // Joue une sonnerie
        if (this.index < exerciceArray.length) {
          this.minutes = exerciceArray[this.index].min; // Définit les minutes pour le nouvel exercice
          this.seconds = 0;
          this.updateCountdown(); // Redémarre le compte à rebours
        } else {
          return page.finish(); // Fin des exercices
        }
      } else if (this.seconds === "00") {
        // Si les secondes atteignent zéro, décrémente les minutes
        this.minutes--;
        this.seconds = 59;
        this.updateCountdown(); // Redémarre le compte à rebours
      } else {
        this.seconds--; // Décrémente les secondes
        this.updateCountdown(); // Redémarre le compte à rebours
      }
    }, 1000);

    // Met à jour l'interface utilisateur avec le temps restant et l'image de l'exercice courant
    return (main.innerHTML = `
      <div class="exercice-container">
        <p>${this.minutes}:${this.seconds}</p>
        <img src="./img/${exerciceArray[this.index].pic}.png" />
        <div>${this.index + 1}/${exerciceArray.length}</div>
      </div>`);
  }

  // Joue un son lorsque l'exercice se termine
  ring() {
    const audio = new Audio();
    audio.src = "ring.mp3";
    audio.play();
  }
}

const utils = {
  // Met à jour le contenu de la page
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },

  // Gère les événements des minutes pour chaque input
  handleEventMinutes: function () {
    const inputs = document.querySelectorAll('input[type="number"]');
    for (const input of inputs) {
      input.addEventListener("input", (e) => {
        // Met à jour le temps minimal d'un exercice basé sur l'input de l'utilisateur
        for (const exo of exerciceArray) {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value); // Convertit la valeur en entier
            this.store(); // Stocke les changements
          }
        }
      });
    }
  },

  // Gère les événements de flèches pour déplacer les exercices
  handleEventArrow: function () {
    const arrows = document.querySelectorAll(".arrow");
    for (const arrow of arrows) {
      arrow.addEventListener("click", (e) => {
        let position = 0; // Position pour suivre la position actuelle dans le tableau
        for (const exo of exerciceArray) {
          if (exo.pic == e.target.dataset.pic && position !== 0) {
            // Échange les exercices dans le tableau
            [exerciceArray[position], exerciceArray[position - 1]] = [
              exerciceArray[position - 1],
              exerciceArray[position],
            ];
            page.lobby(); // Rafraîchit la page avec le nouvel ordre
            this.store(); // Stocke les changements
          } else {
            position++; // Incrémente la position si l'élément actuel ne correspond pas
          }
        }
      });
    }
  },

  // Gère la suppression des exercices
  deleteItem: function () {
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    for (const btn of deleteBtns) {
      btn.addEventListener("click", (e) => {
        let newArr = []; // Nouveau tableau pour stocker les exercices non supprimés
        for (const exo of exerciceArray) {
          // Filtre les exercices
          if (exo.pic != e.target.dataset.pic) {
            newArr.push(exo); // Ajoute les exercices qui ne doivent pas être supprimés
          }
        }
        exerciceArray = newArr; // Met à jour le tableau d'exercices
        page.lobby(); // Rafraîchit la page
        this.store(); // Stocke les changements
      });
    }
  },

  // Redémarre la liste des exercices
  reboot: function () {
    exerciceArray = basicArray; // Réinitialise les exercices
    page.lobby(); // Rafraîchit la page
    this.store(); // Stocke les changements
  },

  // Stocke les exercices dans le localStorage
  store: function () {
    localStorage.exercices = JSON.stringify(exerciceArray); // Convertit le tableau en chaîne JSON
  },
};
// Objet pour gérer le contenu de la page
const page = {
  // Affiche les paramètres de la page
  lobby: function () {
    // Crée une liste d'exercices avec des éléments HTML
    let mapArray = exerciceArray
      .map(
        (exo) =>
          `
        <li>
          <div class="card-header">
            <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
            <span>min</span>
          </div>
          <img src="./img/${exo.pic}.png" />
          <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
          <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
        </li>
      `
      )
      .join("");

    // Met à jour le contenu de la page avec la liste des exercices
    utils.pageContent(
      "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );

    // Établit les événements pour les minutes, flèches et suppression
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.deleteItem();
    reboot.addEventListener("click", () => utils.reboot());
    // je ne change pas de page litterallement je gere la vue
    start.addEventListener("click", () => this.routine());
  },

  // Démarre la routine d'exercices
  routine: function () {
    const exercice = new Exercice(); // Crée une nouvelle instance de l'exercice
    utils.pageContent("Routine", exercice.updateCountdown(), null); // Affiche la routine
  },

  // Affiche la page de fin lorsque tous les exercices sont terminés
  finish: function () {
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'>Réinintialiser <i class='fas fa-times-circle'></i></button>"
    );
    start.addEventListener("click", () => this.routine()); // Établit l'événement pour recommencer
    reboot.addEventListener("click", () => utils.reboot()); // Établit l'événement pour réinitialiser
  },
};

// Démarre le programme en affichant la page de paramètres
page.lobby();
