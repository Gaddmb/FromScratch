// App.js
import { useEffect } from "react";
import axios from "axios";
import PicCard from "./components/PicCard";
import Form from "./components/Form";
import { API_URL } from "./config/config";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./feature/pictures.slice";

const App = () => {
  // Je n'ai plus besoin d'un state local pour 'picsData', Redux le gère !
  // 'useDispatch' me permet d'accéder à la fonction 'dispatch' pour déclencher des actions Redux.
  const dispatch = useDispatch();

  // 'useSelector' me permet de "faire appel" aux données qui sont dans mon Store Redux.
  // Je sélectionne spécifiquement la propriété 'pictures' de mon slice 'pictures'.
  const picsData = useSelector((state) => state.pictures.pictures);

  const getPictures = () => {
    // Au montage de mon composant, je fais un appel API pour récupérer les images.
    axios
      .get(`${API_URL}/pictures`)
      // Une fois les données reçues (res.data), je "dispatch" mon action 'setPicturesData'.
      // Cela envoie les données (res.data) à mon Store Redux pour qu'il les stocke.
      // C'est cette action qui va me permettre de mettre à jour mon état dans le Store.
      .then((res) => dispatch(setPicturesData(res.data)));
    // La dépendance '[dispatch]' garantit que cet effet ne s'exécute qu'une seule fois au chargement initial.
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>NFT Gallery</h1>
      <Form getPictures={getPictures} />
      <div className="cards-container">
        {/* Je vérifie si 'picsData' existe (grâce au '?.') et si c'est un tableau,
            je le "map" pour afficher chaque image. */}
        {picsData?.map((pic, index) => (
          // Pour chaque image, je rends un composant 'PicCard' en lui passant les données de l'image.
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
