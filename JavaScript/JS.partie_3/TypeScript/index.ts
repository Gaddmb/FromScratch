//------------------- Variables
let num1 = 24; // num1 est une variable de type number, initialisée à 24
let num2: string; // num2 est déclarée comme une chaîne de caractères (string), mais pas encore initialisée
let numOrString: number | string; // numOrString peut être soit un number soit une string

num2 = '48'; // Ici, on assigne une valeur de type string à num2

//-------------------- tableaux

let array = ["chien", "chat", "poisson"]; // array est un tableau de strings
// On ne peut pas assigner false à array[0] car tous les éléments doivent être des strings
// array[0] = false; // Cela générerait une erreur de type
let tableau1: string[] = []; // tableau1 est un tableau vide qui ne peut contenir que des strings
let tableau: (number | boolean)[] = []; // tableau peut contenir soit des numbers, soit des boolean

//-------------------- objet 
// Ici, on définit une interface 'player' qui décrit la structure d'un joueur
interface player {
    id: number; // id est un nombre
    name: string; // name est une chaîne de caractères
    jersey?: number; // jersey est un nombre (le numéro du maillot)
  }
  
  // On crée une instance de player appelée zidane
  let zidane: player = {
    id: 0, // L'identifiant de zidane
    name: "zidane", // Le nom du joueur
    jersey: 10 // Le numéro de maillot de zidane
  };
  
  //--------------------------- classes

  class Singer {
    id:number;
    name:string;
    alive?: boolean

    constructor(id: number, name: string , alive?: boolean) {
    this.id = id
    this.name = name
    this.alive =alive
    }
  }

  const prince = new Singer(0 , "prince")
  console.log(prince);
  

  //------------------------------- function 

  const satMyName = (name? :string) => {
    console.log(`bonjour ${name}`);
  };
  
  
  const ageDuCapitaine = (age:number | string, size?:number):void =>{
    if(size){
        console.log(`la taille du capitaine est de ${size}cm et il est agé de : ${age}`);
    } else {
        console.log(`le capitaine est agé de : ${age} ans`);
        
    }
  }

  ageDuCapitaine(16)

  //Enum & tuple 

  enum Role {ADMIN,PRENIUM,BASIC}

  interface User {
    name: string;
    attributes: [number,string];
    role: Role
  }

  const user1:User = {
    name: "Gaddiel",
    attributes: [45, 'author'],
    role: Role.ADMIN
  }

 if(user1.role === Role.ADMIN){
  console.log("connexion spéciale");
  
 }