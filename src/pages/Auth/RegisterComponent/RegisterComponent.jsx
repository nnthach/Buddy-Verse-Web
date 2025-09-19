/* eslint-disable no-unused-vars */
import styles from '../Auth.module.scss';
import InputCustom from '~/components/InputCustom/InputCustom';
import { useState } from 'react';
import { registerAPI } from '~/services/authService';
import { handleInputChange } from '~/utils/helpers';

function RegisterComponent() {
  const selectGenderData = [
    { id: 1, title: 'Male', value: 'male' },
    { id: 2, title: 'Female', value: 'female' },
  ];
  const [registerStep, setRegisterStep] = useState(1);
  const initialForm = {
    password: '',
    confirmPassword: '',
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
  };
  const [submitRegisterForm, setSubmitRegisterForm] = useState(initialForm);

  const [formError, setFormError] = useState(null);

  const handleChange = handleInputChange(setSubmitRegisterForm, setFormError);

  const validateStep1 = () => {
    const errors = {};
    let isError = false;

    if (!submitRegisterForm.firstname.trim()) {
      errors.firstname = 'Firstname is required';
      isError = true;
    }

    if (!submitRegisterForm.lastname.trim()) {
      errors.lastname = 'Lastname is required';
      isError = true;
    }

    if (!submitRegisterForm.dob.trim()) {
      errors.dob = 'Date of birth is required';
      isError = true;
    }

    if (!submitRegisterForm.gender.trim()) {
      errors.gender = 'Gender is required';
      isError = true;
    }

    setFormError(errors);
    return isError;
  };

  const validateStep2 = () => {
    const errors = {};
    let isError = false;

    if (!submitRegisterForm.email.trim()) {
      errors.email = 'Email is required';
      isError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(submitRegisterForm.email)) {
        errors.email = 'Invalid email format';
        isError = true;
      }
    }

    if (!submitRegisterForm.username.trim()) {
      errors.username = 'Username is required';
      isError = true;
    } else if (submitRegisterForm.username.length < 6) {
      errors.username = 'Username must be at least 6 characters';
      isError = true;
    }

    if (!submitRegisterForm.password.trim()) {
      errors.password = 'Password is required';
      isError = true;
    } else if (submitRegisterForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isError = true;
    }

    if (!submitRegisterForm.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
      isError = true;
    } else if (submitRegisterForm.confirmPassword !== submitRegisterForm.password) {
      errors.confirmPassword = 'Passwords do not match';
      isError = true;
    }

    setFormError(errors);
    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('alo alo');

    if (registerStep == 1) {
      if (validateStep1()) return;
      setRegisterStep(2);
      return;
    }

    if (validateStep2()) {
      return;
    }

    try {
      console.log('register data', submitRegisterForm);
      const res = await registerAPI(submitRegisterForm);

      console.log('res register', res);

      setSubmitRegisterForm(initialForm);
    } catch (error) {
      console.log('register err', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {registerStep == 1 ? (
        <>
          <InputCustom
            label={'First Name'}
            type={'text'}
            name={'firstname'}
            onChange={handleChange}
            value={submitRegisterForm.firstname}
            error={formError?.firstname}
          />
          <InputCustom
            label={'Last Name'}
            type={'text'}
            name={'lastname'}
            onChange={handleChange}
            value={submitRegisterForm.lastname}
            error={formError?.lastname}
          />
          <InputCustom
            label={'Date of Birth'}
            type={'date'}
            name={'dob'}
            onChange={handleChange}
            value={submitRegisterForm.dob}
            error={formError?.dob}
          />
          <InputCustom
            label={'Gender'}
            type={'select'}
            name={'gender'}
            onChange={handleChange}
            value={submitRegisterForm.gender}
            selectData={selectGenderData}
            selectDefault="Select Gender"
            error={formError?.gender}
          />
        </>
      ) : (
        <>
          <InputCustom
            label={'Username'}
            type={'text'}
            name={'username'}
            onChange={handleChange}
            value={submitRegisterForm.username}
            error={formError?.username}
          />

          <InputCustom
            label={'Email'}
            type={'email'}
            name={'email'}
            onChange={handleChange}
            value={submitRegisterForm.email}
            error={formError?.email}
          />
          <InputCustom
            label={'Password'}
            type={'password'}
            name={'password'}
            onChange={handleChange}
            value={submitRegisterForm.password}
            error={formError?.password}
          />

          <InputCustom
            label={'Confirm Password'}
            type={'password'}
            name={'confirmPassword'}
            onChange={handleChange}
            value={submitRegisterForm.confirmPassword}
            error={formError?.confirmPassword}
          />
        </>
      )}

      <button type="submit">{registerStep == 1 ? 'Continue' : 'Submit'} </button>
    </form>
  );
}

export default RegisterComponent;
