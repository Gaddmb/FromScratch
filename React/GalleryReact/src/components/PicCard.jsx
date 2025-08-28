import { useRef, useState } from "react";
import axios from "axios";
import Delete from "./Delete";
import { API_URL } from "../config/config";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editPicture } from "../feature/pictures.slice";

const PicCard = ({ pic }) => {
  const [edit, setEdit] = useState(false);
  const artistInput = useRef();
  const disptach = useDispatch();

  const handleEdit = () => {
    setEdit(false); // Je masque le formulaire d'édition après validation

    const data = {
      artist: artistInput.current.value,
      year: pic.year,
      photo: pic.photo,
    };

    // PUT : Je mets à jour la ressource (l'image) sur le serveur.
    // J'envoie une requête PUT à l'URL de l'image spécifique (grâce à son ID)
    // et je lui passe les données mises à jour (principalement l'artiste ici) dans le corps de la requête.
    axios.put(`${API_URL}/pictures/${pic.id}`, data).then(() => {
      // Après avoir réussi la mise à jour sur le serveur (quand la promesse 'then()' est résolue) :
      // Je déclenche (dispatch) l'action 'editPicture' de Redux pour mettre à jour l'état local de mon application.
      // Le 'payload' de cette action est un tableau :
      // - Le premier élément ([0]) est le nouvel artiste (data.artist).
      // - Le deuxième élément ([1]) est l'ID de l'image (pic.id), ce qui permettra au reducer de trouver l'image à modifier.
      disptach(editPicture([data.artist, pic.id]));
    });
  };

  return (
    <div className="pic-card">
      <img src={pic.photo} alt={"photo de " + pic.artist} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <input
                defaultValue={pic.artist}
                ref={artistInput}
                autoFocus
              ></input>
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <h4>
              {artistInput.current ? artistInput.current.value : pic.artist}
            </h4>
          )}
          <p>{pic.year}</p>
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={pic.id} />
        </div>
      </div>
    </div>
  );
};

export default PicCard;
