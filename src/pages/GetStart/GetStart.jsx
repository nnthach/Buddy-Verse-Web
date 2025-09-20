import { useContext, useEffect, useState } from 'react';
import styles from './GetStart.module.scss';
import { getInterestListAPI } from '~/services/interestService';
import { AuthContext } from '~/context/AuthContext';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function GetStart() {
  const [interestList, setInterestList] = useState([]);

  const navigate = useNavigate();
  const { submitRegisterForm, setSubmitRegisterForm } = useContext(AuthContext);

  useEffect(() => {
    const handleGetInterestList = async () => {
      try {
        const res = await getInterestListAPI();
        console.log('res interest list', res);
        setInterestList(res.data);
      } catch (error) {
        console.log('get interest list err', error);
      }
    };

    handleGetInterestList();
  }, []);

  const handleAddInterestList = (item) => {
    console.log('item', item);

    setSubmitRegisterForm((prev) => {
      const isSelected = prev.interestIds.includes(item);

      return {
        ...prev,
        interestIds: isSelected ? prev.interestIds.filter((id) => id !== item) : [...prev.interestIds, item],
      };
    });
  };

  const handleSubmit = () => {
    if (submitRegisterForm.interestIds.length == 0) {
      toast.warn('You must choose at least one!');
      return;
    }
    navigate('/auth/register');
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>What are you interest in?</h1>
        <p className={styles['sub-heading']}>for better matches</p>

        {/*interest list */}
        <div className={styles['interest-list']}>
          {interestList.map((item) => (
            <span
              key={item.interestId}
              className={`${styles['interest-item']} ${
                submitRegisterForm.interestIds.includes(item.interestId) ? styles.active : ''
              }`}
              onClick={() => handleAddInterestList(item.interestId)}
            >
              {item.name}
            </span>
          ))}
        </div>

        <button onClick={() => handleSubmit()}>Continue</button>
        <p>
          <Link to={'/auth/login'}>Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default GetStart;
