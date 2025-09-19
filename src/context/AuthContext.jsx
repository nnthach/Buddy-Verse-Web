import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  isOpen: false,
});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [modalType, setModalType] = useState('');

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        userInfo,
        setUserInfo,
        modalType,
        setModalType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
