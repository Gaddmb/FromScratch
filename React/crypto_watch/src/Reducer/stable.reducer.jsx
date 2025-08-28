const initialeState = { showStable: true };
import { SET_STABLE_STATE } from "../action/stable.action";

// elle comporte 2 paramètres :
// set action.
export default function stableReducer(state = initialeState, action) {
  // le switch c'est le type d'action qu'on va recevoir
  switch (action.type) {
    // si il recoit une action de type SET_STABLE_STATE
    case SET_STABLE_STATE:
      // tu me retourne un objet avec la nouvelle valeur de showStable
      return {
        showStable: action.payload,
      };
    default:
      // si l'action n'est pas reconnue, on retourne l'état actuel
      return state;
  }
}

// POINT IMPORT
// Les reducers servent à gérer et modifier l’état (state) de mon application dans Redux.

// sont rôle :
// Ils reçoivent les actions envoyées (dispatchées) depuis tes composants.
// Selon le type d’action, ils décident comment mettre à jour l’état.
// Ils retournent le nouvel état (ou l’état inchangé si l’action ne les concerne pas).
