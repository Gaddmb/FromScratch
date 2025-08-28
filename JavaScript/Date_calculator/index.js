//************** convert today date to input format *********/
const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date");
const nightPrice = document.getElementById("nightPrice");

// convertie la date en format normal exmple ( 2024-09-17)
const today = new Date().toISOString().split("T")[0];
// je donne ensuite la valeur de today a startDate mmon input
startDate.value = today;
//je bloque les dates précedent
startDate.min = today;

//*** tomorrow date calc */
let tomorrow = new Date();
// je prend new Date() et fait un getDate + 1 qui permet d'acceder au jour suivant
tomorrow.setDate(tomorrow.getDate() + 1);
// convertie la date en format normal exmple ( 2024-09-17)
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
endDate.value = tomorrowFormat;
endDate.min = tomorrowFormat;

// even pour changer la date de debut lorsqu'elle passe superieur a la date de fin

startDate.addEventListener("change", () => {
  //recuperer d'abord la date du jour
  let day = new Date(startDate.value);
  if (endDate.value < startDate.value) {
    day.setDate(day.getDate() + 1);
    endDate.value = day.toISOString().split("T")[0];
  }
});

// la date de demain ne peut pas etre inferieur a la date d'aujourd'hui

endDate.addEventListener("change", () => {
  let day = new Date(endDate);
  if (endDate.value < startDate.value) {
    day.setDate(day.getDate() - 1);
    startDate.value = day.toISOString().split("T")[0];
  }
});

//****************************  Calc date *******************/

// Fonction qui calcule la différence de jours entre startDate et endDate, puis le total
const bookingCalc = () => {
  // Récupère la différence en millisecondes entre les deux dates
  let diffTime = Math.abs(new Date(endDate.value) - new Date(startDate.value));

  // Convertit la différence de millisecondes en jours
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calcule le total en multipliant le nombre de jours par le prix par nuit
  total.textContent = diffDays * nightPrice.textContent;
};

// Appelle le calcul à chaque changement de date (début ou fin)
startDate.addEventListener("change", bookingCalc);
endDate.addEventListener("change", bookingCalc);

// Lance le calcul initial dès le chargement de la page
bookingCalc();
