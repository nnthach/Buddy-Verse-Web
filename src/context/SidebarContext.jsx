import { createContext, useRef, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SideBarContext = createContext({
  isOpen: false,
});

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const aboutRefSidebar = useRef(null);
  const goalsRefSidebar = useRef(null);
  const membershipRefSidebar = useRef(null);

  return (
    <SideBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        aboutRefSidebar,
        goalsRefSidebar,
        membershipRefSidebar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
