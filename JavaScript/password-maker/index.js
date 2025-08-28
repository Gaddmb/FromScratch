// en JS pas besoin de déclarer sont ID elle est deja connue (je l'ai fait exceptionnellement)
const generateButton = document.getElementById("generateButton");
//  stocker dans un tableau toutes les données possible
const dataLowercase = "azertyuiopqsdfghhjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumberss = "0123456789";
const dataSymbols = "$&é(){}ù%*µ,?!§:;ç^#_-\"'";
// je recupere la value dans mon rangeValue
const rangeValue = document.getElementById("password-length");
// je fais apparaitre mon passWord
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

// une function lorsque quand j'appuie sur le bouton ca me génère un mot de passe
const generatePassword = () => {
  // un tableau que je vais incrémmenter qui ont etait cocher
  let data = [];
  //je me stock ces données
  let password = "";

  //   si lowercase et checké alors on ajoute les données dans mon tableau car il a etait checké
  // grace a l'operateur décomposition(...) je décompose et ajoute chaque élément des tableaux sélectionnés dans 'data'
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumberss);
  if (symbols.checked) data.push(...dataSymbols);
  // en gros si ya rien qui a etait cocher
  if (data.length === 0) {
    alert("veuillez cocher");
    return;
  }
  // pour resumer on va mettre dans un tableau toutes les lettres qui on etait cocher derriers on va jouer une boucle for cet boucle va s'enumerer jusqu'a que i fasse la valeur de rangeValue et ca ira pas plus loin grace a data.length
  for (toto = 0; toto < rangeValue.value; toto++) {
    // Ajoute les caractères des catégories sélectionnées à `data`
    // Math.random() génère un nombre décimal aléatoire entre 0 et 1
    // Multiplier par data.length donne un nombre décimal entre 0 et data.length (non inclus)
    // Math.floor() arrondit ce nombre vers le bas pour obtenir un index entier valide
    // Affiche un caractère aléatoire de `data` à cet index
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }
  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié";
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

// j'ai mit dans mon even ma function generatePassword
generateButton.addEventListener("click", generatePassword);

// je ne peux pas mettre un textContent ou innerHTML dans un input
