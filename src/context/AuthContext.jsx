import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  isOpen: false,
});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [userInfo, setUserInfo] = useState(null);

  const [modalType, setModalType] = useState('');

  const initialRegisterForm = {
    password: '',
    confirmPassword: '',
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    photoUrls: [
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    ],
    interestIds: [],
  };
  const [submitRegisterForm, setSubmitRegisterForm] = useState(initialRegisterForm);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
        userInfo,
        setUserInfo,
        modalType,
        setModalType,
        initialRegisterForm,
        submitRegisterForm,
        setSubmitRegisterForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
