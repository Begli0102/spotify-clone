import { PlaylistAdd } from "@material-ui/icons";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { SpotifyContext } from "../context/SpotifyContext";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Body = () => {
  const [{ token, user, selectedPlaylist, selectedPlaylistId }, dispatch] =
    useContext(SpotifyContext);
  console.log(selectedPlaylist);
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

      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number
        }))
      };
      dispatch({ type: "SET_PLAYLIST", selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  const msToMinutesAndSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  

  return (
    <Container>
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <img src={selectedPlaylist.image} alt="selected playlist" />

            <div className="details">
              <span className="type">Playlist</span>
              <h1 className="title">{selectedPlaylist.name}</h1>
              <p className="description">{selectedPlaylist.description}</p>
              <div className="userAndsongs">
                <p className="user1">
                  {user?.name}{" "}
                  <FiberManualRecordIcon style={{ fontSize: "8px" }} />
                </p>
                <p>{selectedPlaylist.tracks.length} songs</p>
                {/* <p>{msToMinutesAndSeconds(selectedPlaylist.duration)}</p> */}
              </div>
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
          <div className="tracks">
            {selectedPlaylist.tracks.map(
              (
                {
                  id,
                  name,
                  artists,
                  image,
                  duration,
                  album,
                  context_uri,
                  track_number
                },
                index
              ) => (
                <div className="track_info">
                  <span style={{ marginLeft: "20px" }}>{index + 1}</span>
                  <div className="imageAndName">
                    <img src={image} />
                    <div className="albumAndArtist">
                      <span style={{ color: "#fff" }}>{name}</span>
                      <span>
                        {artists.length > 1 ? artists.join(", ") : artists}
                      </span>
                    </div>
                  </div>
                  <div className="album">
                    <span>{album}</span>
                  </div>
                  <div className="duration">
                    <span>{msToMinutesAndSeconds(duration)}</span>
                  </div>
                </div>
              )
            )}
          </div>
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
    width: 100%;
  }
  img {
    height: 14.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
  .details {
    margin-left: 20px;
    color: #e0dede;
  }

  .title {
    font-size: 5.7rem;
    text-shadow: 1px 0px, 3.5px 0px, 1px 0px;
    color: white;
    margin: 0px;
    padding: 0;
  }
  .type {
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .userAndsongs {
    width: 200px;
    display: flex;
    align-items: center;
    color: white;
    gap: 4px;
    font-weight: 550;
    letter-spacing: 0.8px;
    margin-top: 10px;
    font-size: 14px;
    cursor: default;
  }
  .header-row {
    display: grid;
    width: 96%;
    margin-top: 50px;
    margin-left: 20px;
    grid-template-columns: 0.3fr 3fr 2fr 0.3fr;
    border-bottom: 0.1px solid grey;
    position: sticky;
    font-size: 14px;
    overflow: auto;
  }

  .track_info {
    align-items: center;
    width: 96%;
    height: auto;

    padding: 5px;
    font-size: 14px;
    color: lightgrey;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 0.3fr 3fr 2fr 0.3fr;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .imageAndName {
      display: flex;
      align-items: center;
      margin-left: 18px;
      img {
        width: 40px;
        height: 40px;
      }
      .albumAndArtist {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        margin-left: 10px;
        margin-top: 0;
      }
    }
    .album {
      margin-left: 18px;
    }
    .duration {
      margin-right: -12px;
    }
  }
`;
