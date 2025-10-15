import { Link, useLocation } from 'react-router-dom';
import styles from './Cart.module.scss';
import { getSubscriptionPlanByIdAPI } from '~/services/subscriptionPlanService';
import { getPlanFeatureByIdAPI } from '~/services/planFeatureService';
import { useEffect, useState } from 'react';
import { createPaymentAPI } from '~/services/paymentService';

function CartPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const planId = params.get('cartId');

  const userId = localStorage.getItem('userId');

  const [subscriptionplan, setSubscriptionPlan] = useState(null);
  const [planFeature, setPlanFeature] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await createPaymentAPI({
        accountId: userId,
        planId,
        paymentMethod: 'Payos',
      });
      console.log('payment create res', res);

      if (res?.data?.checkoutUrl) {
        window.location.href = res.data.checkoutUrl;
      }
    } catch (error) {
      console.log('payment create err', error);
    }
  };

  const fetchGetSubscriptionPlanDetail = async () => {
    try {
      const res = await getSubscriptionPlanByIdAPI(planId);
      console.log('get subscriptionplan id res', res);
      setSubscriptionPlan(res.data);
    } catch (error) {
      console.log('get subscriptionplan id err', error);
    }
  };

  const fetchGetPlanFeatureDetail = async () => {
    try {
      const res = await getPlanFeatureByIdAPI(planId);
      console.log('get PlanFeature id res', res);
      setPlanFeature(res.data);
    } catch (error) {
      console.log('get PlanFeature id err', error);
    }
  };

  useEffect(() => {
    fetchGetSubscriptionPlanDetail();
    fetchGetPlanFeatureDetail();
  }, []);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.card}>
        <h2 className={styles.title}>Thanh toán gói dịch vụ</h2>

        <div className={styles.info}>
          <p className={styles.name}>{subscriptionplan?.name}</p>
          <p className={styles.duration}>
            Thời gian sử dụng: <span>{subscriptionplan?.durationDays} ngày</span>
          </p>
          <p className={styles.price}>
            Giá: <span>{subscriptionplan?.price.toLocaleString()} ₫</span>
          </p>
        </div>

        {planFeature && (
          <div className={styles.features}>
            <h4>Tính năng bao gồm:</h4>
            <ul>
              {planFeature.map((feature, i) => (
                <li key={i}>{feature?.featureName}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.total}>
          <p>Tổng cộng:</p>
          <h3>{subscriptionplan?.price.toLocaleString()} ₫</h3>
        </div>

        <button onClick={handlePayment} className={styles.payBtn}>
          Thanh toán ngay
        </button>
        <button className={styles['btn-return']}>
          <Link>Quay lại</Link>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
