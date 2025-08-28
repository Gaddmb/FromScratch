// Classe Question : représente une question du quiz avec ses choix et la bonne réponse
class Question {
  constructor(text, choices, answer) {
    // Le texte de la question, ex : "Quelle méthode Javascript permet de filtrer les éléments d'un tableau ?"
    this.text = text;
    // Un tableau qui contient les différentes options de réponse possibles
    this.choices = choices;
    // La bonne réponse parmi les choix disponibles
    this.answer = answer;
  }

  // Méthode pour vérifier si la réponse sélectionnée par l'utilisateur est correcte
  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}

// Un tableau qui contient des instances de la classe Question, chaque question avec ses choix et sa réponse correcte
const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

// Classe Quiz : gère l'état du quiz et son déroulement
class Quiz {
  // Le constructeur prend toutes les questions et initialise le score à 0 et l'index de la question actuelle à 0
  constructor(questions) {
    this.score = 0; // Score de l'utilisateur
    this.questions = questions; // Tableau des questions
    this.currentQuestionIndex = 0; // Index de la question actuelle
  }

  // Méthode pour récupérer la question actuelle à partir de l'index
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // Méthode pour traiter la réponse de l'utilisateur
  guess(answer) {
    // Vérifie si la réponse est correcte et incrémente le score si oui
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    // Passe à la question suivante, même si la réponse est incorrecte
    this.currentQuestionIndex++;
  }

  // Méthode qui vérifie si toutes les questions ont été répondues (fin du quiz)
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// Objet display : responsable de l'affichage des questions, des choix, du score, etc.
const display = {
  // Méthode générique pour afficher du texte dans un élément HTML spécifié par son ID
  ElementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },

  // Affiche le texte de la question actuelle
  question: function () {
    // Utilise getCurrentQuestion pour obtenir la question en cours
    this.ElementShown("question", quiz.getCurrentQuestion().text);
  },

  // Affiche les choix de réponses et gère l'événement lorsqu'un utilisateur clique sur un choix
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    // Fonction qui attache un gestionnaire d'événement à chaque choix
    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess); // Appelle la méthode guess du quiz pour vérifier la réponse
        quizApp(); // Recharge l'application pour afficher la question suivante
      };
    };

    // Boucle pour afficher chaque choix et leur attribuer un gestionnaire d'événement
    for (let i = 0; i < choices.length; i++) {
      this.ElementShown("choice" + i, choices[i]); // Affiche chaque choix dans un élément HTML
      guessHandler("guess" + i, choices[i]); // Attache un événement onclick pour chaque choix
    }
  },

  // Affiche la progression actuelle (ex: Question 1 sur 4)
  progress: function () {
    this.ElementShown(
      "progress",
      `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`
    );
  },

  // Affiche l'écran de fin avec le score final de l'utilisateur
  endQuiz: function () {
    let endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
    `;
    this.ElementShown("quiz", endQuizHTML); // Remplace l'élément avec l'ID "quiz" par le résultat final
  },
};

// Fonction principale qui gère le déroulement du quiz
const quizApp = () => {
  // Vérifie si le quiz est terminé
  if (quiz.hasEnded()) {
    // Si le quiz est terminé, affiche l'écran de fin
    display.endQuiz();
  } else {
    // Sinon, affiche la question, les choix et la progression
    display.question();
    display.choices();
    display.progress();
  }
};

// Crée une nouvelle instance du quiz avec les questions définies plus haut
let quiz = new Quiz(questions);

// Lance l'application de quiz
quizApp();

//------------------------------------------------------------------------

// Imagine a blueprint for a house:

// The blueprint itself is not a house; it’s just a plan for how to build one.
// When you use the blueprint to build an actual house, that house is an instance of the blueprint.
// Similarly:

// A class is a blueprint that defines properties and behaviors.
// An instance is an object created using that blueprint, with actual values for those properties.
