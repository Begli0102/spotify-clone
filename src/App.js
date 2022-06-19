import React, { useContext, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Login from "./components/Login";
import Player from "./components/Player";
import { SpotifyContext } from "./context/SpotifyContext";
// import SpotifyWebApi from "spotify-web-api-js";
// import { getTokenFromResponse } from "./spotify";

// const spotify = new SpotifyWebApi(); //creates instance of spotify inside of our app which allows to interact react app with spotify itself

const Container = styled.div``;

function App() {
  const [{ token }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type:"SET_TOKEN", token });
      }
    }
    document.title = "Spotify";
    
  }, [token, dispatch]);

  return <Container>{token ? <Player /> : <Login />}</Container>;
}

export default App;
