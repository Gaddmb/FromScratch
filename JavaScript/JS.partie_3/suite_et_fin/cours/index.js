//********* CANVAS ************************//

function draw() {
  // Récupérer l'élément canvas par son ID
  const canvas = document.getElementById("canvas");
  // Obtenir le contexte 2D pour dessiner
  const ctx = canvas.getContext("2d");

  // Définir la couleur de remplissage
  ctx.fillStyle = "rgb(200,0,0)"; // rouge
  ctx.fillRect(50, 50, 50, 150); // Dessiner un rectangle rempli

  ctx.fillStyle = "rgba(0,100,200,0.5)"; // bleu semi-transparent
  ctx.fillRect(100, 30, 100, 50); // Un autre rectangle

  ctx.fillStyle = "rgba(100,100,200, 0.5)"; // violet semi-transparent
  ctx.fillRect(10, 25, 100, 100); // Rectangle supplémentaire

  ctx.clearRect(35, 25, 40, 40); // Effacer une partie du canvas

  ctx.strokeRect(125, 75, 50, 50); // Dessiner un rectangle vide

  ctx.fillStyle = "rgba(200,100,200, 0.8)"; // violet clair semi-transparent
  ctx.beginPath(); // Commencer un nouveau chemin
  ctx.moveTo(180, 150); // Déplacer le curseur
  ctx.lineTo(100, 75); // Dessiner une ligne
  ctx.lineTo(100, 150); // Dessiner une autre ligne
  ctx.fill(); // Remplir la forme
}
// getContext("2d"): Nécessaire pour dessiner en 2D sur le canvas.
// fillStyle: Définit la couleur de remplissage pour les formes.
// fillRect(x, y, width, height): Dessine un rectangle rempli.
// clearRect(x, y, width, height): Efface une partie du canvas.
// strokeRect(x, y, width, height): Dessine un rectangle vide (contour).
// beginPath(): Commence un nouveau chemin pour dessiner des formes.
// moveTo(x, y) et lineTo(x, y): Définissent le chemin à dessiner.

// Écouter l'événement de chargement de la fenêtre pour dessiner
window.addEventListener("load", draw);

//**************** TRY / CATCH ***************/

try {
  // Essayer d'exécuter un bloc de code
  maFonction();
} catch (err) {
  // Gérer l'erreur si maFonction échoue
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    // Tenter de parser le texte en JSON
    JSON.parse(txt);
    return true; // Retourne vrai si le parsing réussit
  } catch {
    return false; // Retourne faux si une erreur se produit
  }
}

// console.log(isValidJSON()); // Tester la fonction

// Bloc try-catch avec finally
try {
  // Essayer d'exécuter un bloc de code
  // maFonction();
} catch (err) {
  console.log(err); // Gérer l'erreur
} finally {
  // Code à exécuter qu'il y ait eu une erreur ou non
  // console.log("on est arrivé au bout !");
}

// Lancer une exception avec throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !"; // Lance une erreur si ce n'est pas un nombre
  } else {
    console.log("c'est un nombre"); // Affiche si c'est un nombre
  }
  // PLEIN DE CODE
}

try {
  isNumber("2d"); // Tester la fonction avec une chaîne non numérique
} catch (err) {
  // Gérer l'erreur lancée par isNumber
  // console.log("Erreur : " + err);
}

// try : Contient le code que tu veux exécuter. Si une erreur se produit à l'intérieur de ce bloc, l'exécution passe immédiatement au bloc catch.

// catch : Contient le code qui gère l'erreur. Cela te permet de traiter l'erreur, par exemple, en affichant un message d'erreur ou en effectuant une action corrective.

// finally : Contient le code qui s'exécute toujours, que l'erreur se produise ou non. C'est utile pour libérer des ressources, fermer des connexions ou effectuer des tâches de nettoyage.
