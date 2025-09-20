import InputCustom from '~/components/InputCustom/InputCustom';
import styles from './AuthModal.module.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '~/context/AuthContext';
import { handleInputChange } from '~/utils/helpers';
import { forgotPasswordAPI, resetPasswordAPI, verifyOTPAPI } from '~/services/authService';
import { toast } from 'react-toastify';

function AuthModal() {
  const { modalType, setModalType, userId } = useContext(AuthContext);

  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: '',
    otpCode: '',
    password: '',
  });

  const [activeAccountForm, setActiveAccountForm] = useState({ activeOtp: '' });

  const [stepForgetPassword, setStepForgetPassword] = useState(1);

  const handleChange = handleInputChange(setForgotPasswordForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modalType == 'active-account') {
      console.log('active account form', activeAccountForm);
    }

    // forgot step 1
    if (stepForgetPassword == 1 && modalType == 'forgot-password') {
      if (!forgotPasswordForm.email) return;

      const formData = {
        email: forgotPasswordForm.email,
      };

      try {
        console.log('form data email 1', formData);
        const res = await forgotPasswordAPI(formData);

        console.log('fgpw email 1 res', res);

        setStepForgetPassword(2);
      } catch (error) {
        console.log('email fgpw 1 err', error);
        setStepForgetPassword(2);
      }

      // forgot step 2
    } else if (stepForgetPassword == 2 && modalType == 'forgot-password') {
      if (!forgotPasswordForm.otpCode) return;

      const formData = {
        accountId: userId,
        otpCode: forgotPasswordForm?.otpCode,
      };
      try {
        console.log('form data otp 2', formData);
        const res = await verifyOTPAPI(formData);

        console.log('fgpw otp 2 res', res);
        toast.success(res.data.message);

        setStepForgetPassword(3);
      } catch (error) {
        console.log('otp fgpw 2 err', error);
      }
    } else {
      const formData = {
        accountId: userId,
        newPassword: forgotPasswordForm?.password,
      };

      try {
        console.log('form data pw 3', formData);
        const res = await resetPasswordAPI(formData);

        console.log('fgpw pw 3 res', res);
        toast.success(res.data.message);
        setModalType('');
      } catch (error) {
        console.log('pw fgpw 3 err', error);
      }
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles['modal-header']}>
        {modalType == 'forgot-password' ? (
          <>
            <p className={stepForgetPassword === 1 && styles.active}>Receive OTP</p>
            <p className={stepForgetPassword === 2 && styles.active}>Verify OTP</p>
            <p className={stepForgetPassword === 3 && styles.active}>Reset Password</p>
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
          ) : stepForgetPassword === 2 && modalType == 'forgot-password' ? (
            <InputCustom
              label={'OTP Code'}
              type={'text'}
              name={'otpCode'}
              onChange={handleChange}
              value={forgotPasswordForm.otpCode}
            />
          ) : (
            <>
              <InputCustom
                label={'Password'}
                type={'password'}
                name={'password'}
                onChange={handleChange}
                value={forgotPasswordForm.password}
              />
              {/* <InputCustom
                label={'Confirm Password'}
                type={'password'}
                name={'confirmPassword'}
                onChange={handleChange}
                value={forgotPasswordForm.confirmPassword}
              /> */}
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
