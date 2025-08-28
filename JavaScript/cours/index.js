// 1xx – Réponses informatives
// 100 Continue : Le serveur a reçu les en-têtes et le client doit continuer à envoyer le corps de la requête.
// 101 Switching Protocols : Le serveur accepte de changer le protocole de communication (ex : de HTTP à WebSocket).

// 2xx – Succès
// 200 OK : La requête a réussi.
// 201 Created : La requête a abouti à la création d'une ressource.
// 202 Accepted : La requête a été acceptée pour traitement, mais le traitement n'est pas encore terminé.
// 204 No Content : La requête a réussi, mais il n'y a pas de contenu à renvoyer.

// 3xx – Redirections
// 301 Moved Permanently : La ressource demandée a été déplacée de façon permanente.
// 302 Found : La ressource demandée se trouve temporairement à une autre adresse.
// 304 Not Modified : La ressource n'a pas été modifiée depuis la dernière requête.

// 4xx – Erreurs côté client
// 400 Bad Request : La requête est mal formée ou invalide.
// 401 Unauthorized : Authentification nécessaire.
// 403 Forbidden : Accès refusé, malgré une authentification valide.
// 404 Not Found : La ressource demandée est introuvable.

// 5xx – Erreurs côté serveur
// 500 Internal Server Error : Le serveur a rencontré une erreur inattendue.
// 502 Bad Gateway : Le serveur a reçu une réponse invalide d'un autre serveur.
// 503 Service Unavailable : Le serveur est temporairement indisponible, souvent en raison de surcharge ou maintenance.

//**** XMLHttpRequest ( methode a l'ancienne) */

//XMLHttpRequest est un objet
// reqListener est l'ecouteur de la requete
function reqListener() {
  //   console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
// en faisant ci-dessous je veux aller chercher mes données ( fichier data.txt ou json etc )
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// **MÉTHODE FETCH theorique **

// "Fetch" signifie "aller chercher".

fetch("https://api.blablagues.net/?rub=blagues")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log("Erreur :", err));

//--------------

fetch("data.txt") // Fait une requête HTTP pour récupérer le fichier "data.txt"
  .then((res) => res.text()) // Une fois que la réponse est reçue, convertit cette réponse en texte
  .then((res) => console.log(res)); // Ensuite, affiche le contenu du fichier "data.txt" dans la console

//--------------
fetch("data.json") // Fait une requête HTTP pour récupérer le fichier "data.json"
  .then((res) => res.json()) // Une fois la réponse reçue, convertit cette réponse en JSON (objet JavaScript)
  .then((res) => console.log(res)); // Ensuite, affiche l'objet JSON dans la console

//**  Les options de requête */

const myHeaders = new Headers();

const init = {
  // le get veut dire apporte moi des données
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

fetch("data.json", init).then((res) => console.log(res));

// *** Méthodes HTTP : POST, PUT, DELETE ***

// 1. Introduction aux méthodes HTTP
// CRUD :
// - Create (POST)
// - Read (GET)
// - Update (PUT)
// - Delete (DELETE)

// 2. Simulation d'un serveur sans back-end
// Nous allons simuler un serveur sans utiliser de base de données comme MongoDB ou MySQL.

// 3. Pré-requis
// - Téléchargez Node.js et npm (Node Package Manager).

// 4. Configuration de votre projet
// - Créez un dossier pour votre projet (ex. : 'les_API').
// - Dans ce dossier, initialisez un gestionnaire de dépendances avec la commande :
//   npm init -y
//   Cela créera un fichier 'package.json' pour gérer vos dépendances.

// 5. Installation de la bibliothèque
// - Installez la bibliothèque 'json-server' pour simuler un serveur :
//   npm install -g json-server

// 6. Création de la base de données
// - Créez un fichier 'db.json', qui servira de base de données.

// 7. Lancement du serveur
// - Pour démarrer le serveur et le faire écouter les changements dans 'db.json', utilisez la commande :
//   json-server --watch db.json
//   Cela permettra à 'json-server' de traiter 'db.json' comme une base de données distante et d'écouter tous les changements.

// 8. Objectif
// - L'objectif principal est de faire un POST, c'est-à-dire d'ajouter un message dans votre base de données et d'incrémenter certaines valeurs.

// method : DELETE http://localhost:3000/posts/2 pour supp le message
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  // ce que j'ai c'est un objet JS qui a tetait transforme en elemetn JSON pour l'envoyer dans ma base de données (db.json)
  body: JSON.stringify({
    pseudo: "koumo",
    age: 25,
  }),
};

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyé")
  );
});

//************* L'asynchrone **************
//promise
// exemple de promese then((res) => res); sera executé si fetch("monLien") sera fait
fetch("monLien").then((res) => res);

//async/await

const fetchData = async () => {
  // attend que le await soit exécuter avant de faire la suite
  await fetch("monLien");
};

fetchData();

//*** Le JSON */
//methode json() => méthode qui s'auto-resout ( pour ca qu'on la mets dans une promess ) en renvoyant le body de la requete

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    //en faisant un JSON.stringify() jetransforme l'objet en chaine de cararctere JSON ligne 120 la method etait utiliser pour envoyer de la data
    //stringify => convertit en JSON
    let settings = JSON.stringify(data);
    //parse => transforme json en objet JS
    console.log(JSON.parse(settings));
  });

//*** web API ( Local Storage / Session Storage ) */

//client storage

//local storage
// Stocke une chaîne dans localStorage et un objet sous forme de JSON.
localStorage.data = "je stock la data";
const obj = {
  name: "Koumo",
  age: 28,
};
localStorage.user = JSON.stringify(obj);

// Utilise JSON.parse pour transformer la chaîne JSON en objet JavaScript.
console.log(JSON.parse(localStorage.user));
//converti mes données quand je la mets et reconvertir en objet JS quand je la sort

//session storage
sessionStorage.dataSettings = "55px";

//cookie
// c'est quelque chose qui est envoyer d'un serveur a un navigateur
// pour ensuite etre stocke par le navigateur
// poru ajouter des cookie ( restera le temps de la session)

document.cookie = "username=Koumo";

// pour qu'il soit plus que le temps de la session ( bonne pratique )

document.cookie = "pseudo=FS;path=/;max-age=45000; secure;samesite";

//********************************************************************** POST / ASYNCHRONE *****************************************************************************/

// Opération longue avec accès à une base de données : Utiliser POST en combinaison avec l'asynchrone est recommandé. Cela permet de traiter la requête sans bloquer le serveur ou l'application pendant que la tâche se termine. Par exemple, si tu traites de gros volumes de données ou si tu fais plusieurs requêtes en série sur la base de données, l’asynchrone aide à mieux gérer le temps d'exécution et améliore la réactivité.

// Petites tâches avec accès à une base de données : Si l’opération est rapide et simple (comme insérer une petite quantité de données), alors utiliser uniquement POST sans l’asynchrone est suffisant. Dans ce cas, l'asynchrone ajouterait une complexité inutile, car la tâche se termine rapidement et ne risque pas de bloquer ton application.
