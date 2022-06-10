import React, { useContext } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { SidebarOption } from "./SidebarOption";
import { SpotifyContext } from "../context/SpotifyContext";
import { PlayList } from "./Playlist";

const Container = styled.div`
  background-color: #040404;
  color: grey;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
  }
  .logo {
    text-align: center;
    margin: 1rem 0;
    img {
      max-inline-size: 80%;
      block-size: auto;
    }
  }
  hr {
    border: 1px solid #282828;
    width: 96%;
    margin: 10px auto;
    background-color: #282828;
  }
  .items {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;

    &:hover {
      color: white;
      cursor: pointer;
    }
    li {
      display: flex;
      gap: 1rem;
      transition: 200ms ease-in-out;
      &:hover {
        color: white;
      }
    }
  }
`;

const Sidebar = () => {
  // const [{ playlists }, dispatch] = useContext(SpotifyContext);

  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="logo"
          />
        </div>
        <ul className="items">
          <li>
            <HomeIcon />
          </li>
          <span>Home</span>
        </ul>
        <ul className="items">
          <li>
            <SearchIcon />
          </li>
          <span>Search</span>
        </ul>
        <ul className="items">
          <li>
            <LibraryMusicIcon />
          </li>
          <span>Your Library</span>
        </ul>
      </div>

      <hr />
      <PlayList />
    </Container>
  );
};

export default Sidebar;
