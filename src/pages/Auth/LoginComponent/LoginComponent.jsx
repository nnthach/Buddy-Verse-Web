/* eslint-disable no-unused-vars */
import styles from '../Auth.module.scss';
import InputCustom from '~/components/InputCustom/InputCustom';
import { useContext, useState } from 'react';
import { loginAPI } from '~/services/authService';
import { AuthContext } from '~/context/AuthContext';
import { handleInputChange, validationInput } from '~/utils/helpers';

function LoginComponent() {
  const { setModalType } = useContext(AuthContext);
  const [submitLoginForm, setSubmitLoginForm] = useState({
    password: '',
    email: '',
  });

  const [formError, setFormError] = useState(null);
  const handleChange = handleInputChange(setSubmitLoginForm, setFormError);

  const validation = () => {
    const errors = {};
    let isError = false;

    if (!submitLoginForm.email.trim()) {
      errors.email = 'Email is required';
      isError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(submitLoginForm.email)) {
        errors.email = 'Invalid email format';
        isError = true;
      }
    }

    if (!submitLoginForm.password.trim()) {
      errors.password = 'Password is required';
      isError = true;
    } else if (submitLoginForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isError = true;
    }

    setFormError(errors);

    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validation()) {
      return;
    }

    try {
      console.log('login data', submitLoginForm);
      const res = await loginAPI(submitLoginForm);

      console.log('res login', res);
    } catch (error) {
      console.log('login err', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputCustom
        label={'Email'}
        type={'email'}
        name={'email'}
        onChange={handleChange}
        value={submitLoginForm.email}
        error={formError?.email}
      />
      <InputCustom
        label={'Password'}
        type={'password'}
        name={'password'}
        onChange={handleChange}
        value={submitLoginForm.password}
        error={formError?.password}
      />

      <p onClick={() => setModalType('forgot-password')} className={styles.forget}>
        Forget password
      </p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginComponent;

// const { errors, isError } = validationInput(submitLoginForm);
// setFormError(errors);
// console.log('login err', errors);
// if (isError) return;
