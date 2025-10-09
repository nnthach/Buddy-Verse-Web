import { forwardRef } from 'react';
import styles from './Membership.module.scss';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';
import useFetchList from '~/hooks/useFetchList';
import { getSubscriptionPlanListAPI } from '~/services/subscriptionPlanService';

const Membership = forwardRef((props, ref) => {
  const { data: subscriptionPlanList } = useFetchList(getSubscriptionPlanListAPI);

  console.log('subcription plan', subscriptionPlanList);
  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.container}>
        <h5>Thành viên</h5>
        <p className={styles.tagline}>Mở khóa trải nghiệm tốt hơn</p>

        <div className={styles.content}>
          {subscriptionPlanList.map((item, index) => (
            <div
              key={index}
              className={`${styles['membership-card']} ${item?.name == 'Gói cơ bản' ? styles.basic : styles.premium}`}
            >
              <div className={styles['membership-content']}>
                {/*Header */}
                <div className={styles['header']}>
                  {item.name == 'Gói cao cấp' && <p className={styles['tag']}>Phổ biến</p>}
                  <h2 className={`${styles['name']}`}>{item?.name}</h2>
                  <p className={styles['description']}>{item?.description}</p>
                </div>
                {/*Price */}
                <div className={styles['price']}>
                  <h3 className={styles['value']}>{item?.price} đ</h3>
                  <p className={styles['rule']}>
                    {item?.name == 'Gói theo năm' ? 'Mỗi thành viên mỗi năm' : 'Mỗi thành viên mỗi tháng'}
                  </p>
                </div>
                {/*Benefit */}
                <ul className={styles.benefits}>
                  {item?.planFeatures?.map((label, index) => (
                    <li key={index} className={`${styles.benefit} ${styles.available}`}>
                      {label?.isEnabled ? (
                        <IoIosCheckmarkCircle fontSize={24} color={item.name == 'Gói cơ bản' ? 'black' : '#F1F3E7'} />
                      ) : (
                        <IoIosCloseCircle fontSize={24} color="red" />
                      )}{' '}
                      {label?.feature.name}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className={styles.actions}>
                  <button className={styles['trial-btn']}>Đăng ký ngay</button>
                  <p className={styles.note}>Không yêu cầu thẻ tín dụng</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Membership;
