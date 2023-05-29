import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [activeContant, setActiveContant] = useState(false);

  return (
    <ModalContext.Provider value={{ activeContant, setActiveContant }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
