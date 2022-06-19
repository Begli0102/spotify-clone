import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { SpotifyContext } from "../context/SpotifyContext";

const Container = styled.div`
  color: grey;
  height: 100%;
  overflow: hidden;
  .ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 200ms ease-in-out;
      &:hover {
        color: white;
        cursor: default;
      }
    }
  }
`;

export const PlayList = () => {
  const [{ token, playlists }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        }
      );
      const playlists = response.data.items;

      dispatch({ type: "SET_PLAYLISTS", playlists });
    };

    getPlaylistData();
  }, [token, dispatch]);
  return (
    <Container>
      <ul className="ul">
        {playlists.map((playlist, id) => (
          <li key={id}>{playlist.name}</li>
        ))}
      </ul>
    </Container>
  );
};
