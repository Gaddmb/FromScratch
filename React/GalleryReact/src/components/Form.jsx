import axios from "axios";
import { API_URL } from "../config/config";
// J’utilise useRef au lieu de useState pour éviter les re-renders, récupérer les valeurs du formulaire à la soumission, et améliorer les performances.
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPicture } from "../feature/pictures.slice";

const Form = ({ getPictures }) => {
  const inputArt = useRef(null);
  const inputYear = useRef(null);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // auqnd j'envoie le formulaire je crée un objet data avec ses valeurs
    const data = {
      artist: inputArt.current.value,
      year: inputYear.current.value,
      // je simule une photo aléatoire pour l'exemple
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
    };
    // POST : j'envoie une nouvelle ressource → l'objet data est placé dans le corps de la requête
    // rappel data est transformer en JSON automatiquement par axios
    axios
      .post(`${API_URL}/pictures`, data)
      .then(() => {
        dispatch(addPicture(data));
        // une fois la requête terminée, je vide les champs du formulaire
        formRef.current.reset();
      })
      .then(() => {
        getPictures();
      });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        {/* je relis chaque element du formulaire à une référence (useRef) pour éviter les re-renders */}
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
