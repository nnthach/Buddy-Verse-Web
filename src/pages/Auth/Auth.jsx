/* eslint-disable no-unused-vars */
import { Link, useParams } from 'react-router-dom';
import styles from './Auth.module.scss';
import InputCustom from '~/components/InputCustom/InputCustom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

function Auth() {
  const { type } = useParams();
  const [submitDataForm, setSubmitDataForm] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type == 'login') {
      const loginData = {
        username: submitDataForm.username,
        password: submitDataForm.password,
      };
      console.log('login data', loginData);
    } else {
      console.log('register data', submitDataForm);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
        <form onSubmit={handleSubmit}>
          {type === 'register' && (
            <InputCustom
              label={'Email'}
              type={'email'}
              name={'email'}
              onChange={(e) => handleChange(e)}
              value={submitDataForm.email}
            />
          )}

          <InputCustom
            label={'Username'}
            type={'text'}
            name={'username'}
            onChange={(e) => handleChange(e)}
            value={submitDataForm.username}
          />
          <InputCustom
            label={'Password'}
            type={'password'}
            name={'password'}
            onChange={(e) => handleChange(e)}
            value={submitDataForm.password}
          />

          {type === 'login' && <p className={styles.forget}>Forget password</p>}

          <button type="submit">Submit</button>
        </form>
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
    </div>
  );
}

export default Auth;
