import { PlaylistAdd } from "@material-ui/icons";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { SpotifyContext } from "../context/SpotifyContext";

// const BodyInfo = styled.div`
//   display: flex;
// `;
// const Image = styled.img`
//   height: 200px;
//   object-fit: contain;
// `;
// const Wrapper = styled.div`
//   margin-left: 12px;
// `;
// const Playlist = styled.h2``;
// const DiscoverWekly = styled.h3``;

const Body = () => {
  const [{ token, selectedPlaylist, selectedPlaylistId, user }, dispatch] =
    useContext(SpotifyContext);

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        }
      );
      const selectedPlaylist = response.data;
      const tracks = selectedPlaylist.tracks.items;
      console.log(tracks, "Tracks");
      console.log(selectedPlaylist, "initial");
      dispatch({ type: "SET_PLAYLIST", selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch]);

  return (
    <Container>
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <img src={selectedPlaylist.images[1].url} alt="selected playlist" />

            <div className="details">
              <span className="type">Playlist</span>
              <h1 className="title">{selectedPlaylist.name}</h1>
              <p className="description">{selectedPlaylist.description}</p>
            </div>
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AccessTimeIcon />
                </span>
              </div>
            </div>
          </div>
          {/* <hr style={{height:'0.01px solid grey',backgroundColor:'grey'}}></hr> */}
        </>
      )}
    </Container>
  );
};

export default Body;
const Container = styled.div`
  padding: 20px;
  color: white;
  .playlist {
    display: flex;
    margin-left: 20px;
    align-items: center;
  }
  img {
    height: 15rem;
  }
  .details {
    margin-left: 30px;
    color: #e0dede;
  }
  .title {
    font-size: 4rem;
    margin: 20px 20px 20px 0;
    font-weight: 900;
  }

  .header-row {
    display: grid;
    width: 96%;
    margin-top: 50px;
    margin-left: 20px;
    grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
    border-bottom: 0.1px solid grey;
  }
`;
