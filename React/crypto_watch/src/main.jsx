import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

// REDUX
// le store toujours le placer le plus haut possible dans l'arborescence donc main.jsx
// le reducer c'est l'element qui peut interagir avec le store
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

const store = configureStore({
  // il va incrémenter le store
  reducer: rootReducer,
  // "Allume moi devTools"
  devTools: true,
});

createRoot(document.getElementById("root")).render(
  //  pour rendre le store accessible à toute l’application React.
  <Provider store={store}>
    <App />;
  </Provider>
);
