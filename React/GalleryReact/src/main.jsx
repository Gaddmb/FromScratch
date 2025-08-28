import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* rappelle store sert a rendre le store accessible a tous les composants */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
