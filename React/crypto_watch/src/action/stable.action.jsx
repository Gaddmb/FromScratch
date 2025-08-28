// une fonction permet de declancher une action
// l'action est envoyé au store redux qui transmet cela a tous les reducers
export const SET_STABLE_STATE = "SET_STABLE_STATE";

export const setStableState = (boot) => {
  // je retourn une autre fonction qui va prendre en paramètre dispatch
  // j'utilise dispatch pour envoyer l'action ( qui est un objet) au store ( l'action peut communiquer avec la base de données) )
  return (dispatch) => {
    return dispatch({
      // (le type d’action, pour que le reducer sache quoi faire)
      type: SET_STABLE_STATE,
      //   (la nouvelle valeur à mettre dans l’état)
      payload: boot,
    });
  };
};
