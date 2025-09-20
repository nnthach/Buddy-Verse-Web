/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Auth.module.scss';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import AuthModal from '~/pages/Auth/components/AuthModal/AuthModal';
import { AuthContext } from '~/context/AuthContext';
import RegisterComponent from '~/pages/Auth/components/RegisterComponent/RegisterComponent';
import LoginComponent from '~/pages/Auth/components/LoginComponent/LoginComponent';

function Auth() {
  const { type } = useParams();

  const navigate = useNavigate();

  const { modalType, submitRegisterForm } = useContext(AuthContext);

  useEffect(() => {
    if (type == 'register' && submitRegisterForm.interestIds.length === 0) {
      navigate('/get-start');
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />

      {modalType == '' ? (
        <div className={styles.content}>
          <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>

          {type == 'login' ? <LoginComponent /> : <RegisterComponent />}

          <div className={styles.other}>
            <div className={styles.line} />
            <span>OR</span>
            <div className={styles.line} />
          </div>
          <div className={styles['login-method']}>
            <div className={styles.list}>
              <FaGoogle color="red" size={24} />
              <FaFacebook color="blue" size={24} />
              <FaTwitter color="#1DA1F2" size={24} />
            </div>
          </div>
          <p className={styles['footer-text']}>
            {type === 'login' ? (
              <>
                Do not have an account? <Link to={'/get-start'}>Get Start</Link>
              </>
            ) : (
              <>
                Already have an account? <Link to={'/auth/login'}>Login</Link>
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
