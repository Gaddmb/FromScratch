const header = document.getElementById("header");
const content = document.getElementById("content");
console.log(header, content);

// Crée une fonction asynchrone pour obtenir la blague
const getJoke = async () => {
  try {
    const res = await fetch("https://api.blablagues.net/?rub=blagues"); // Envoie la requête et attend la réponse
    const data = await res.json(); // Attend que la réponse soit convertie en JSON

    console.log(data); // Affiche l'intégralité des données de l'API dans la console

    const contentJoke = data.data.content; // Stocke le contenu de la blague dans une variable

    // Met à jour l'élément header avec le titre de la blague
    header.textContent = contentJoke.text_head;

    // Met à jour l'élément content avec le texte de la blague si disponible,
    // sinon affiche le texte caché de la blague
    content.textContent = contentJoke.text
      ? contentJoke.text
      : contentJoke.text_hidden;
  } catch (error) {
    console.error("Erreur lors de la récupération de la blague :", error); // Gère les erreurs éventuelles
  }
};

getJoke(); // Appelle la fonction pour récupérer et afficher une blague

// Event click pour changer de blague
document.body.addEventListener("click", getJoke);
