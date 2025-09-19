import InputCustom from '~/components/InputCustom/InputCustom';
import styles from './AuthModal.module.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '~/context/AuthContext';
import { handleInputChange } from '~/utils/helpers';

function AuthModal() {
  const { modalType, setModalType } = useContext(AuthContext);

  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: '',
    otpCode: '',
    password: '',
    confirmPassword: '',
  });

  const [activeAccountForm, setActiveAccountForm] = useState({ activeOtp: '' });

  const [stepForgetPassword, setStepForgetPassword] = useState(1);

  const handleChange = handleInputChange(setForgotPasswordForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    // forgot step 1
    if (stepForgetPassword == 1 && modalType == 'forgot-password') {
      if (!forgotPasswordForm.email) return;

      const formData = {
        email: forgotPasswordForm.email,
      };

      console.log('form data email', formData);
      setStepForgetPassword(2);

      // forgot step 2
    } else if (stepForgetPassword == 2 && modalType == 'forgot-password') {
      const formData = {
        otpCode: forgotPasswordForm?.otpCode,
        password: forgotPasswordForm?.password,
      };

      console.log('form data change pw', formData);

      // active account
    } else if (modalType == 'active-account') {
      console.log('active account form', activeAccountForm);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-header']}>
        {modalType == 'forgot-password' ? (
          <>
            <p className={stepForgetPassword === 1 && styles.active}>Receive OTP</p>
            <p className={stepForgetPassword === 2 && styles.active}>Change Password</p>
          </>
        ) : (
          <p className={styles.activeAccount}>Active Account</p>
        )}
      </div>

      <div className={styles['modal-content']}>
        <form onSubmit={handleSubmit}>
          {modalType == 'active-account' ? (
            <InputCustom
              label={'OTP Code'}
              type={'text'}
              name={'activeOtp'}
              onChange={handleInputChange(setActiveAccountForm)}
              value={activeAccountForm.otpCode}
            />
          ) : stepForgetPassword === 1 && modalType == 'forgot-password' ? (
            <InputCustom
              label={'Email'}
              type={'email'}
              name={'email'}
              onChange={handleChange}
              value={forgotPasswordForm.email}
            />
          ) : (
            <>
              <InputCustom
                label={'OTP Code'}
                type={'text'}
                name={'otpCode'}
                onChange={handleChange}
                value={forgotPasswordForm.otpCode}
              />
              <InputCustom
                label={'Password'}
                type={'password'}
                name={'password'}
                onChange={handleChange}
                value={forgotPasswordForm.password}
              />
              <InputCustom
                label={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                onChange={handleChange}
                value={forgotPasswordForm.confirmPassword}
              />
            </>
          )}

          <button type="submit">Submit</button>
        </form>

        {stepForgetPassword === 1 ? (
          <p onClick={() => setModalType('')}>Cancel</p>
        ) : (
          <p onClick={() => setStepForgetPassword(1)}>Change Email</p>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
