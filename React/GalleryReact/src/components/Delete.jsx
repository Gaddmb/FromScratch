import axios from "axios";
import { API_URL } from "../config/config";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePicture } from "../feature/pictures.slice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // DELETE : je supprime une ressource via son ID → pas besoin d'envoyer un corps, l'ID est suffisant dans l'URL
    axios.delete(`${API_URL}/pictures/${id}`).then(() => {
      // Après avoir réussi la suppression sur le serveur Je déclenche (dispatch) l'action 'deletePicture' de Redux pour mettre à jour l'état local de mon application.
      dispatch(deletePicture(id));
    });
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
