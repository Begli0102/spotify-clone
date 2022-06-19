export const initialState = {
  user: null,
  playlists: [],
  selectedPlaylistId: "4jVvhTA6Xf56C1uBR48HVF",
  selectedPlaylist: null,
  currentlyPlaying: null
};

const SpotifyReducer = (state, action) => {
  //  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user // action.payload
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token // action.payload
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId
      };
    case "SET_PLAYING":
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying
      };

    default:
      return state;
  }
};

export default SpotifyReducer;
