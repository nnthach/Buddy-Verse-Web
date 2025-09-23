/* eslint-disable no-unused-vars */
import styles from '../../Auth.module.scss';
import InputCustom from '~/components/InputCustom/InputCustom';
import { useContext, useState } from 'react';
import { loginAPI } from '~/services/authService';
import { AuthContext } from '~/context/AuthContext';
import { handleInputChange, validationInput } from '~/utils/helpers';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(AuthContext);
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
      errors.email = 'Email là bắt buộc';
      isError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(submitLoginForm.email)) {
        errors.email = 'Định dạng email không hợp lệ';
        isError = true;
      }
    }

    if (!submitLoginForm.password.trim()) {
      errors.password = 'Mật khẩu là bắt buộc';
      isError = true;
    } else if (submitLoginForm.password.length < 6) {
      errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
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
      const res = await loginAPI(submitLoginForm);

      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('userId', res.data.accountId);

      setUserId(res.data.accountId);

      setSubmitLoginForm({
        password: '',
        email: '',
      });
      toast.success('Đăng nhập thành công');

      navigate('/');
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
        label={'Mật khẩu'}
        type={'password'}
        name={'password'}
        onChange={handleChange}
        value={submitLoginForm.password}
        error={formError?.password}
      />

      <p onClick={() => setModalType('forgot-password')} className={styles.forget}>
        Quên mật khẩu
      </p>

      <button type="submit">Gửi</button>
    </form>
  );
}

export default LoginComponent;
