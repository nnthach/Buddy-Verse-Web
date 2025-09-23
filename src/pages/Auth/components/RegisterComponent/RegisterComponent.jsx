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
    { id: 1, title: 'Nam', value: 'male' },
    { id: 2, title: 'Nữ', value: 'female' },
  ];
  const [registerFormStep, setRegisterFormStep] = useState(1);
  const { initialRegisterForm, submitRegisterForm, setSubmitRegisterForm } = useContext(AuthContext);

  const [formError, setFormError] = useState(null);

  const handleChange = handleInputChange(setSubmitRegisterForm, setFormError);

  const validateStep1 = () => {
    const errors = {};
    let isError = false;

    if (!submitRegisterForm.firstname.trim()) {
      errors.firstname = 'Tên là bắt buộc';
      isError = true;
    }

    if (!submitRegisterForm.lastname.trim()) {
      errors.lastname = 'Họ là bắt buộc';
      isError = true;
    }

    if (!submitRegisterForm.dob.trim()) {
      errors.dob = 'Ngày sinh là bắt buộc';
      isError = true;
    }

    if (!submitRegisterForm.gender.trim()) {
      errors.gender = 'Giới tính là bắt buộc';
      isError = true;
    }

    setFormError(errors);
    return isError;
  };

  const validateStep2 = () => {
    const errors = {};
    let isError = false;

    if (!submitRegisterForm.email.trim()) {
      errors.email = 'Email là bắt buộc';
      isError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(submitRegisterForm.email)) {
        errors.email = 'Định dạng email không hợp lệ';
        isError = true;
      }
    }

    if (!submitRegisterForm.username.trim()) {
      errors.username = 'Tên người dùng là bắt buộc';
      isError = true;
    } else if (submitRegisterForm.username.length < 6) {
      errors.username = 'Tên người dùng phải có ít nhất 6 ký tự';
      isError = true;
    }

    if (!submitRegisterForm.password.trim()) {
      errors.password = 'Mật khẩu là bắt buộc';
      isError = true;
    } else if (submitRegisterForm.password.length < 6) {
      errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      isError = true;
    }

    if (!submitRegisterForm.confirmPassword.trim()) {
      errors.confirmPassword = 'Xác nhận mật khẩu là bắt buộc';
      isError = true;
    } else if (submitRegisterForm.confirmPassword !== submitRegisterForm.password) {
      errors.confirmPassword = 'Mật khẩu không khớp';
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
      toast.success('Đăng ký thành công');

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
            label={'Tên'}
            type={'text'}
            name={'firstname'}
            onChange={handleChange}
            value={submitRegisterForm.firstname}
            error={formError?.firstname}
          />
          <InputCustom
            label={'Họ'}
            type={'text'}
            name={'lastname'}
            onChange={handleChange}
            value={submitRegisterForm.lastname}
            error={formError?.lastname}
          />
          <InputCustom
            label={'Ngày sinh'}
            type={'date'}
            name={'dob'}
            onChange={handleChange}
            value={submitRegisterForm.dob}
            error={formError?.dob}
          />
          <InputCustom
            label={'Giới tính'}
            type={'select'}
            name={'gender'}
            onChange={handleChange}
            value={submitRegisterForm.gender}
            selectData={selectGenderData}
            selectDefault="Chọn giới tính"
            error={formError?.gender}
          />
        </>
      ) : (
        <>
          <InputCustom
            label={'Tên người dùng'}
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
            label={'Mật khẩu'}
            type={'password'}
            name={'password'}
            onChange={handleChange}
            value={submitRegisterForm.password}
            error={formError?.password}
          />

          <InputCustom
            label={'Xác nhận mật khẩu'}
            type={'password'}
            name={'confirmPassword'}
            onChange={handleChange}
            value={submitRegisterForm.confirmPassword}
            error={formError?.confirmPassword}
          />
        </>
      )}

      <button type="submit">{registerFormStep == 1 ? 'Tiếp tục' : 'Gửi'}</button>
    </form>
  );
}

export default RegisterComponent;
