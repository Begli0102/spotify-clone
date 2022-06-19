import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";
import { SpotifyContext } from "../context/SpotifyContext";

const Footer = () => {
  const [{ token, currentlyPlaying }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        }
      );
      console.log(response.data);

      // if (response.data !== "") {
      const currentlyPlaying = {
        id: response.data.item.id,
        name: response.data.item.name,
        artists: response.data.item.artists.map((artist) => artist.name),
        image: response.data.item.album.images[2].url
      };
      dispatch({ type: "SET_PLAYING", currentlyPlaying });
      // }
    };

    getCurrentTrack();
  }, [token, dispatch]);

  return (
    <Container>
      {currentlyPlaying && (
        <div className="left">
          <img src={currentlyPlaying.image} alt="image" />
          <div className="wrapper">
            <h4 className="songName">{currentlyPlaying.name}</h4>
            <p className="songAuthor">{currentlyPlaying.artists.join(", ")}</p>
          </div>
          {/* <FavoriteBorderTwoToneIcon style={{ marginLeft: "0 auto" }} /> */}
        </div>
      )}
      <div className="center">
        <ShuffleIcon type="hover" style={{ fontSize: "24px" }} />
        <SkipPreviousIcon style={{ fontSize: "24px" }} />
        <PlayCircleOutlineIcon style={{ fontSize: "40px" }} />
        <SkipNextIcon style={{ fontSize: "24px" }} />
        <RepeatIcon style={{ fontSize: "24px" }} />
      </div>
      <div className="right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon style={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <VolumeDownIcon style={{ fontSize: "24px" }} />
          </Grid>
          <Grid item xs>
            <Slider
              style={{ color: "white", fontWeight: "900" }}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 98%;
  height: 65px;
  padding: 20px;
  // grid-row: 2/3;
  // grid-column: 1/3;
  background-color: #282828;
  color: white;
  position: fixed;
  bottom: 0;
  border-top: 0.5px solid grey;
  .left {
    // flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: left;
    color: lightgrey;
    margin-right: 30px;
  }

  img {
    width: 60px;
    height: 60px;
    // object-fit: contain;
    margin-right: 20px;
  }

  .wrapper {
    margin-left: 0px;
  }

  .songName {
    font-size: 14px;
    color: white;
    font-weight: 100;
  }

  .songAuthor {
    font-size: 12px;
    font-weight: 100;
  }

  .center {
    width: 100%;
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    color: lightgrey;
    margin: 0 auto;
    padding: 10px;
    transition: 200ms ease-in-out;
    &:hover {
      color: white;
    }
  }
  .right {
    width: 100%;
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgrey;
    padding: 10px;
    max-width: 300px;
  }
`;
