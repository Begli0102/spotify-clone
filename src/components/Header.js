import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import { SpotifyContext } from "../context/SpotifyContext";

const Container = styled.div`
  display: flex;
  justify-content: right;
  margin: 20px 20px 20px 20px;

  .right {
    display: flex;
    align-items: center;
    background-color: black;
    border-radius: 99px;
    width: 120px;
    padding: 2px;
    cursor: pointer;
  }

  p {
    margin-left: 10px;
    font-size: 14px;
    color: white;
  }
`;

const Header = () => {
  const [{ token, user }, dispatch] = useContext(SpotifyContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      });
      const user = response.data;

      dispatch({ type: "SET_USER", user });
    };
    getUser();
  }, [dispatch, token]);

  return (
    <Container>
      <div className="right">
        <Avatar
          src={user?.images[0].url}
          alt={user?.display_name}
          style={{ height: "30px", width: "30px", objectFit: "contain" }}
        />
        <p>{user?.display_name}</p>
      </div>
    </Container>
  );
};

export default Header;
