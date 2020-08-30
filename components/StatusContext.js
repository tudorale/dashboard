import React, { createContext, useState } from "react";

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);
  return (
    <StatusContext.Provider value={{ admin, setAdmin }}>
      {children}
    </StatusContext.Provider>
  );
};
