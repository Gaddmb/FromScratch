//------------------- Variables
var num1 = 24; // num1 est une variable de type number, initialisée à 24
var num2; // num2 est déclarée comme une chaîne de caractères (string), mais pas encore initialisée
var numOrString; // numOrString peut être soit un number soit une string
num2 = '48'; // Ici, on assigne une valeur de type string à num2
//-------------------- tableaux
var array = ["chien", "chat", "poisson"]; // array est un tableau de strings
// On ne peut pas assigner false à array[0] car tous les éléments doivent être des strings
// array[0] = false; // Cela générerait une erreur de type
var tableau1 = []; // tableau1 est un tableau vide qui ne peut contenir que des strings
var tableau = []; // tableau peut contenir soit des numbers, soit des boolean
// On crée une instance de player appelée zidane
var zidane = {
    id: 0, // L'identifiant de zidane
    name: "zidane", // Le nom du joueur
    jersey: 10 // Le numéro de maillot de zidane
};
//--------------------------- classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, "prince");
console.log(prince);
//------------------------------- function 
var satMyName = function (name) {
    console.log("bonjour ".concat(name));
};
var ageDuCapitaine = function (age, size) {
    if (size) {
        console.log("la taille du capitaine est de ".concat(size, "cm et il est ag\u00E9 de : ").concat(age));
    }
    else {
        console.log("le capitaine est ag\u00E9 de : ".concat(age, " ans"));
    }
};
ageDuCapitaine(16);
//Enum & tuple 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PRENIUM"] = 1] = "PRENIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
var user1 = {
    name: "Gaddiel",
    attributes: [45, 'author'],
    role: Role.ADMIN
};
if (user1.role === Role.ADMIN) {
    console.log("connexion spéciale");
}
