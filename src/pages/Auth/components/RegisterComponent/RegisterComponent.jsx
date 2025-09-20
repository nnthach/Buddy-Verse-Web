/* eslint-disable no-unused-vars */
import InputCustom from '~/components/InputCustom/InputCustom';
import { useContext, useState } from 'react';
import { registerAPI } from '~/services/authService';
import { handleInputChange } from '~/utils/helpers';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '~/context/AuthContext';

function RegisterComponent() {
  const navigate = useNavigate();
  const selectGenderData = [
    { id: 1, title: 'Male', value: 'male' },
    { id: 2, title: 'Female', value: 'female' },
  ];
  const [registerFormStep, setRegisterFormStep] = useState(1);
  const { initialRegisterForm, submitRegisterForm, setSubmitRegisterForm } = useContext(AuthContext);

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

    if (registerFormStep == 1) {
      if (validateStep1()) return;
      setRegisterFormStep(2);
      return;
    }

    if (validateStep2()) {
      return;
    }

    try {
      console.log('register data', submitRegisterForm);
      const res = await registerAPI(submitRegisterForm);

      console.log('res register', res);

      setSubmitRegisterForm(initialRegisterForm);
      toast.success('Register Successfully');

      navigate('/auth/login');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {registerFormStep == 1 ? (
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

      <button type="submit">{registerFormStep == 1 ? 'Continue' : 'Submit'} </button>
    </form>
  );
}

export default RegisterComponent;
