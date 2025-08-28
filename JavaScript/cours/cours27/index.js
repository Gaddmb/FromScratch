/*
 * Résumé sur la POO et l'utilisation de `this` en JavaScript :
 *
 * Quand utiliser la POO :
 * 1. Modéliser des entités du monde réel (ex : Utilisateur, Produit,e-commerce, jeuxVideo, application de Gestion de contenus, applications Financières ).
 * 2. Structurer et réutiliser le code (éviter la duplication).
 * 3. Créer des relations hiérarchiques (ex : Animal ➔ Chien, Chat).
 * 4. Maintenir et agrandir des applications complexes (meilleure organisation).
 *
 * Quand utiliser `this` :
 * 1. Accéder aux propriétés d'instance (ex : this.nom).
 * 2. Définir des méthodes qui agissent sur l'instance (ex : afficherDetails).
 * 3. Construire des objets avec des comportements et des états (ex : état de vie d'un personnage).
 *
 * Rappel :
 * - Utiliser des fonctions classiques pour les méthodes d'instance afin que `this` fasse référence à l'instance.
 * - Utiliser des fonctions fléchées lorsque `this` n'est pas nécessaire ou pour capturer le contexte lexical.
 */

//************************* Rappels des Objets en JS *******************/

const obj = {
  pseudo: " from Koumo",
  ville: "Paris",
  admin: false,

  // dans un objet "THIS" fait reference a un obj comme si j'avais fait obj.pseudo
  //direBonjour est une methode de obj
  direBonjour: function () {
    console.log("bonjour koumo" + this.pseudo);
  },
};

//1er /2e method pour ajouter
obj.age = 24;
obj["admin"] = true;

//supprimer
delete obj.ville;

//parcourir un objet
for (const key in obj) {
  //   console.log(key + " : " + obj[key]);
}

console.log(obj.direBonjour());

//************************* Les méthodes des objets *******************/
//obtenir les clés d'un objet

const key = Object.keys(obj);
console.log(key);

//obtenir les valeurs d'un objet
const values = Object.values(obj);
console.log(values);

// le Object avec un "O" c'est un object native de JS
const nestedArray = Object.entries(obj);
// Crée un tableau de paires [clé, valeur] pour chaque propriété de l'objet.
console.log(nestedArray);

//fusionner 2 objet
const obj2 = {
  taille: "1m77",
  poids: "75,",
};

const fusion = Object.assign({}, obj, obj2);
// const fusion = { ...obj, ...obj2 };
console.log(fusion);

// empecher les modification
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 avenue du code ";

console.log(newObj);

//************* Les différents constructeurs d'objets *******************/

// ne pas faire une function flecher en faisant de la POO car cela la fleche perd son contexte de scop
//function constructeur (c'est un objet)
//cette funcction va stocker des valeurs
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  //getCity est une methde de User
  this.getCity = function () {
    // ca revient a dire user2.pseudo + " habite à " + user2.ville
    console.log(this.pseudo + " habite à " + this.ville);
  };
}
//je crée un nouvelle utilisateur
const user1 = new User("Koumo", "Paris");
console.log(user1.getCity());

//--------------------------------------------------------
// Class ( JS MODERNE )

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis" + this.pseudo);
  };
}
const user2 = new Utilisateur("sarah", "Madrid");
// Un prototype en JavaScript permet de partager des méthodes et des propriétés entre différentes instances d'objets, facilitant ainsi l'héritage et la gestion des méthodes.
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite a " + this.ville);
};
console.log(user2);

// je souhaite passer mes method
// meilleur performance  que ligne 112
Object.assign(Utilisateur.prototype, {
  method() {},
  method2() {},
});

//************ QUAND UTILISER UNE FUNCTION CLASSIQUE OU UNE FUNCTION FLECHEE **/

// Règle Générale

// Fonction fléchée : Utilise-la si tu n’as pas besoin de this, ou si tu veux hériter du this du contexte lexical environnant (comme dans un callback ou une fonction de transformation).

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Fonction classique : Utilise-la quand tu as besoin de définir this dans le contexte d’une instance d’objet, par exemple dans une méthode d’une classe ou d’un constructeur.

// Définition de la classe Animal
class Animal {
  // Le constructeur initialise les propriétés de l'objet
  constructor(nom, type) {
    this.nom = nom; // Propriété : nom de l'animal
    this.type = type; // Propriété : type d'animal (ex : chien, chat)
  }

  // Méthode pour faire parler l'animal
  parler() {
    console.log(`${this.nom} fait un bruit !`);
  }
}

// Création d'une instance (un objet) de la classe Animal
const monAnimal = new Animal("Rex", "Chien");

// Utilisation de la méthode parler pour l'instance monAnimal
monAnimal.parler(); // Affiche : Rex fait un bruit !

// Résumé :
/*
 * Une classe en JavaScript est un modèle qui définit des objets.
 * Elle contient des propriétés (données) et des méthodes (actions).
 *
 * Le constructeur initialise les propriétés lors de la création de l'objet.
 * Les méthodes définissent ce que l'objet peut faire.
 *
 * Dans cet exemple, la classe Animal modélise un animal avec un nom
 * et un type, et elle peut faire un bruit grâce à la méthode parler().
 */

//********************* FIN DE LA PARENTHESE *********************************/

//************* L'heritage *******************/

//il va heriter de la functionnalite Animal2

class Animal2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  SaySomething(text) {
    console.log(this.name + "dit : " + text);
  }
}

class Dog extends Animal2 {
  run() {
    console.log("le chien court ! ");
  }
}
// il herite de Animal2 + dog
const rex = new Dog("Rex", 9);
console.log(rex);
