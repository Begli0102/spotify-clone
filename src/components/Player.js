import React, { useEffect, useContext } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";
import { SpotifyContext } from "../context/SpotifyContext";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vw 15vw;

  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(91, 87, 90);
  }
  .body {
    height: 100%;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      max-height: 2rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
`;

const Player = () => {
  const [{ token, user }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      });
      dispatch({ type: "SET_USER", user });
    };
    getUser();
  }, [dispatch, token]);

  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Header />
          <div className="body__content">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
};

export default Player;
