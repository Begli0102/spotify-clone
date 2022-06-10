import React, { createContext, useReducer } from "react";

export const SpotifyContext = createContext();

const SpotifyProvider = ({ children, SpotifyReducer, initialState }) => {
  return (
    <SpotifyContext.Provider value={useReducer(SpotifyReducer, initialState)}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
