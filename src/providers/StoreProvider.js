import React, { createContext, useReducer, useContext } from "react";

import reducer from '../reducers';

export const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, reducer({}, { type: '__INIT__'}));
  const value = { store, dispatch };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
