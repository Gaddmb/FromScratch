// pictures.slice.js
import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures", // J'ai nommé mon slice "pictures". C'est un identifiant unique.
  initialState: {
    pictures: null, // Mon état initial pour les images est 'null'. Je m'attends à y stocker un tableau d'images.
  },
  // Ici, je définis la logique de mes reducers.
  reducers: {
    // C'est ici que je mets les fonctions qui vont modifier mon état, comme ajouter, éditer ou chercher des éléments.
    // 'setPicturesData' est la fonction que j'utilise pour mettre à jour les données des images.
    // Elle prend deux paramètres : 'state' (l'état actuel de ce slice) et '{ payload }' (les données que je passe à l'action).
    setPicturesData: (state, { payload }) => {
      // Quand j'écris 'state.pictures', je fais référence à la propriété 'pictures' de mon 'initialState'.
      state.pictures = payload; // Je mets à jour 'state.pictures' avec les données reçues dans le 'payload'.
    },
    addPicture: (state, { payload }) => {
      // Cette fonction permet d'ajouter une nouvelle image à l'état 'pictures'.
      state.pictures.push(payload); // J'utilise 'push' pour ajouter l'image à la fin du tableau 'pictures'.
    },

    editPicture: (state, { payload }) => {
      // 'editPicture' est ma fonction pour modifier une image existante.
      // Elle parcourt toutes les images, et si l'ID d'une image correspond à l'ID du 'payload',
      // elle met à jour cette image avec les nouvelles informations (ici, l'artiste).
      // Sinon, elle laisse l'image telle quelle.
      state.pictures = state.pictures.map((pic) => {
        // Ici, je parcours chaque image dans 'state.pictures'.
        // Si l'ID de l'image correspond à celui du 'payload', je la mets à jour.
        if (pic.id === payload.id[1]) {
          return { ...pic, artist: payload[0] };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, { payload }) => {
      // j'oublie pas en faisaint => sur une ligne c'est comme un return
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
    // En résumé, quand je vais "dispatcher" l'action 'setPicturesData',
    // le 'payload' (les données) que je lui passe sera utilisé pour mettre à jour 'state.pictures'.
  },
});

// Remarque : J'ai l'action et le reducer dans le même fichier, ce qui est une bonne pratique avec Redux Toolkit.
// J'exporte mon action creator 'setPicturesData' pour pouvoir la "dispatcher" (déclencher) dans mes composants.
export const { setPicturesData, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;
// J'exporte le reducer principal de ce slice pour pouvoir l'importer dans mon Store,
// afin que Redux sache comment mettre à jour l'état quand une action est "dispatchee" pour ce slice.
export default picturesSlice.reducer;
