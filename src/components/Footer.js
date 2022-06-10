import React from "react";
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: 65px;
  padding: 20px;
  grid-row: 2/3;
  grid-column: 1/3;
  background-color: #282828;
  color: white;
  position: fixed;
  bottom: 0;
  border: .5px solid grey;
`;

const Left = styled.p`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: left;
  color: lightgrey;
  padding: 10px;
  margin-right: 50px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  // object-fit: contain;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  margin-left: 0px;
`;
const SongName = styled.h4`
  font-size: 14px;
  color: white;
  font-weight: 100;
`;
const SongAuthor = styled.p`
  font-size: 12px;
  font-weight: 100;
`;
const Center = styled.p`
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 350px;
  color: lightgrey;
  padding: 10px;
  ${(props) =>
    props.animated &&
    css`
      &:hover {
        color: white;
        
      }
    `}
`;
const Right = styled.p`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: lightgrey;
  max-width: 300px;
  padding: 10px;
  margin-left: 130px;
  margin-top:10px;
`;

const Footer = ({ spotify }) => {
  return (
    <Container>
      <Left>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Justin_Timberlake_by_Gage_Skidmore_2.jpg/330px-Justin_Timberlake_by_Gage_Skidmore_2.jpg"
          }
          alt=""
        />
        <Wrapper>
          <SongName>{"hjhlkhl"}</SongName>
          <SongAuthor>{"Justin Timberlake"}</SongAuthor>
        </Wrapper>
        {/* <FavoriteBorderTwoToneIcon style={{ marginLeft: "0 auto" }} /> */}
      </Left>
      <Center animated>
        <ShuffleIcon
          type="hover"
          style={{ fontSize: "24px" }}
        />
        <SkipPreviousIcon style={{ fontSize: "24px"}} />
        <PlayCircleOutlineIcon
          style={{ fontSize: "40px" }}
        />
        <SkipNextIcon style={{ fontSize: "24px" }} />
        <RepeatIcon style={{ fontSize: "24px"}} />
      </Center>
      <Right>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon style={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <VolumeDownIcon style={{ fontSize: "24px"}} />
          </Grid>
          <Grid item xs>
            <Slider style={{ color: "white", fontWeight: "900" }} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </Right>
    </Container>
  );
};

export default Footer;
