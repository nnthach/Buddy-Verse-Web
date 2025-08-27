import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SideBarContext = createContext({
  isOpen: false,
});

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
