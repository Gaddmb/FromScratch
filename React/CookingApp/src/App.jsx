import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  // je vais stocker la valeur de l'input dans le state inputSearch pour pouvoir l'utiliser dans la requête axios pour filtrer les recettes
  const [inputSearch, setInputSearch] = useState("");

  // petit rappelle useEffect permet d'exécuter du code après le rendu du composant
  useEffect(() => {
    console.log("test");

    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((response) => {
        setMealsData(response.data.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [inputSearch]);
  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        type="text"
        placeholder="Search for recipes..."
        // je dis a chaque fois il y a un changement dans l'input l'event.target.value sera stocké dans le state inputSearch
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {/* ne pas oublie que chaque enfant dois avoir une clé unique */}
        {/* en faisaint mealsDatta && je dis si mealsData est vrai alors fait le map sinon ne fait rien  */}
        {mealsData &&
          mealsData.slice(0, 12).map((meal) => (
            // rappelle le meal c'est le nom que je donne pour la retrouver dans le composant Card
            <Card key={meal.idMeal} meal={meal} />
          ))}
      </div>
    </div>
  );
};

export default App;
