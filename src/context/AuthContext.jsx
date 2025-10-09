/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';
import { getUserByIdAPI } from '~/services/userService';

export const AuthContext = createContext({
  isOpen: false,
});

// Nhà cung cấp ngữ cảnh xác thực
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [modalType, setModalType] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    console.log('storeuserId', storedUserId);
    if (storedUserId) {
      setUserId(storedUserId);
      handleGetUserById(storedUserId);
    }
  }, []);

  // Biểu mẫu đăng ký ban đầu
  const initialRegisterForm = {
    password: '',
    confirmPassword: '',
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
    photoUrls: [],
    interestIds: [],
  };
  const [submitRegisterForm, setSubmitRegisterForm] = useState(initialRegisterForm);

  const handleGetUserById = async (id) => {
    try {
      const res = await getUserByIdAPI(id);
      console.log('get user by id res', res.data);
      setUserInfo(res.data);
    } catch (error) {
      console.log('get user by id err', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

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
        handleGetUserById,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
