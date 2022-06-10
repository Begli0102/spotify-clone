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
    // const hash = getTokenFromResponse();
    // window.location.hash = "";
    // const _token = hash.access_token;
    // if (_token) {
    //   dispatch({
    //     type: "SET_TOKEN",
    //     token: _token
    //   });

    //   spotify.setAccessToken(_token); //gives the token to spotify
    //   spotify.getMe().then((user) => {
    //     dispatch({
    //       type: "SET_USER",
    //       user: user
    //     });
    //     console.log(user);
    //   });

    //   spotify.getUserPlaylists().then((playlists) => {
    //     dispatch({
    //       type: "SET_PLAYLISTS",
    //       playlists: playlists
    //     });
    //   });

    //   spotify.getPlaylist("5G95MLnl4Grtabu7EJDzXP").then((response) =>
    //     dispatch({
    //       type: "SET_DISCOVER_WEEKLY",
    //       discover_weekly: response
    //     })
    //   );
    //  }
  }, [token, dispatch]);

  return <Container>{token ? <Player /> : <Login />}</Container>;
}

export default App;
