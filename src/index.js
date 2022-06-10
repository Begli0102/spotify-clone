import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SpotifyProvider from "./context/SpotifyContext";
import SpotifyReducer, { initialState } from "./context/SpotifyReducer";

ReactDOM.render(
  <React.StrictMode>
    <SpotifyProvider
      initialState={initialState}
      SpotifyReducer={SpotifyReducer}
    >
      <App />
    </SpotifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
