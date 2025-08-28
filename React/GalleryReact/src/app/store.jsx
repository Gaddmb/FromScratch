// store.js
import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice";

// Mon rôle est de configurer le Store Redux, qui est le "cerveau" central de mon application.
// Il sait comment mettre à jour mon état quand je "dispatch" une action.
const store = configureStore({
  // Ici, je définis l'objet qui contient tous mes reducers.
  reducer: {
    // Je lie mon reducer 'picturesReducer' à la clé 'pictures'.
    // Cela signifie que toute action liée au slice "pictures" sera gérée par ce reducer.
    pictures: picturesReducer,
  },
});

export default store;

//! À retenir pour plus tard :
// J'exporte ce reducer pour que le Store sache comment gérer les changements d'état liés à ce slice.
// Sans ce reducer référencé dans le Store, Redux ne saurait pas comment réagir à mes actions pour cette partie de l'état.
