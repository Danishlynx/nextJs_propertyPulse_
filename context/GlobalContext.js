'use client';
import { createContext, useContext, useState } from 'react';

//Create Context
const GlobalContext = createContext();

//Create Provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState();

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
