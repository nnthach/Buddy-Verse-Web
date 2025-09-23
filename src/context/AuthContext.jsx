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
    if (storedUserId) {
      setUserId(storedUserId);
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
    photoUrls: [
      'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    ],
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
