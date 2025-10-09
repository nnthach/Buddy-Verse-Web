/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Auth.module.scss';
import { useContext, useEffect, useState } from 'react';
import AuthModal from '~/pages/Auth/components/AuthModal/AuthModal';
import { AuthContext } from '~/context/AuthContext';
import RegisterComponent from '~/pages/Auth/components/RegisterComponent/RegisterComponent';
import LoginComponent from '~/pages/Auth/components/LoginComponent/LoginComponent';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { loginGoogleAPI } from '~/services/authService';
import { toast } from 'react-toastify';

function Auth() {
  const { type } = useParams();

  const navigate = useNavigate();

  const { modalType, submitRegisterForm, handleGetUserById } = useContext(AuthContext);

  useEffect(() => {
    if (type == 'register' && submitRegisterForm.interestIds.length === 0) {
      navigate('/get-start');
    }
  }, []);

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log('test btn login gg', credentialResponse);

    try {
      const res = await loginGoogleAPI({
        idToken: credentialResponse.credential,
      });
      console.log('call login gg api res', res);

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('userId', res.data.accountId);

      await handleGetUserById(res.data.accountId);

      toast.success('Đăng nhập thành công');

      navigate('/');
    } catch (error) {
      console.log('login gg api err', error);
    }
  };

  const handleGoogleError = (error) => {
    console.log('Login Google Failed', error);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />

      {modalType == '' ? (
        <div className={styles.content}>
          <div className={styles['auth-heading']}>
            <h1>{type === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h1>
          </div>

          {type == 'login' ? <LoginComponent /> : <RegisterComponent />}

          <div className={styles.other}>
            <div className={styles.line} />
            <span>HOẶC</span>
            <div className={styles.line} />
          </div>
          <div className={styles['login-method']}>
            <div className={styles.list}>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap />
            </div>
          </div>
          <p className={styles['footer-text']}>
            {type === 'login' ? (
              <>
                Chưa có tài khoản? <Link to={'/get-start'}>Bắt đầu</Link>
              </>
            ) : (
              <>
                Đã có tài khoản? <Link to={'/auth/login'}>Đăng nhập</Link>
              </>
            )}
          </p>
        </div>
      ) : (
        <AuthModal />
      )}
    </div>
  );
}

export default Auth;
