/* eslint-disable no-unused-vars */
import { Link, useParams } from 'react-router-dom';
import styles from './Auth.module.scss';
import InputCustom from '~/components/InputCustom/InputCustom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useContext, useState } from 'react';
import AuthModal from '~/pages/Auth/AuthModal/AuthModal';
import { AuthContext } from '~/context/AuthContext';
import { loginAPI, registerAPI } from '~/services/authService';
import RegisterComponent from '~/pages/Auth/RegisterComponent/RegisterComponent';
import LoginComponent from '~/pages/Auth/LoginComponent/LoginComponent';

function Auth() {
  const { type } = useParams();

  const { modalType } = useContext(AuthContext);


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
                Do not have an account? <Link to={'/auth/register'}>Register</Link>
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
