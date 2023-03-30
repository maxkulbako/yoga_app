import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext();
function ModalProvider({ children }) {
  const [isActive, setActive] = useState(false);

  return (
    <ModalContext.Provider value={{ isActive, setActive }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
