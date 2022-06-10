export const initialState = {
  user: null,
  playlists: [],
  selectedPlaylistId: "3E5t91OchBvMviCfgknGXs"
};

const SpotifyReducer = (state, action) => {
  // console.log(action);
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

    default:
      return state;
  }
};

export default SpotifyReducer;
