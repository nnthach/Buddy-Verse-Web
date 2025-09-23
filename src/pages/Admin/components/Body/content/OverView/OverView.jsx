import UserGrowthChart from '~/components/Charts/LineChart';
import styles from './OverView.module.scss';
import { FaArrowTrendUp } from 'react-icons/fa6';
import RevenueChart from '~/components/Charts/BarChart';
import UserDistributionChart from '~/components/Charts/PieChart';

function Overview() {
  return (
    <div className={styles.wrap}>
      <div className={styles.summary}>
        <div className={styles['summary-box']}>
          <div className={styles.top}>
            <p>Người dùng mới</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>256</p>
            <span>+15.6%</span>
          </div>
        </div>
        <div className={styles['summary-box']}>
          <div className={styles.top}>
            <p>Người dùng cao cấp</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>256</p>
            <span>+15.6%</span>
          </div>
        </div>
      </div>

      {/*Biểu đồ*/}
      <div className={styles['chart-wrap']}>
        <UserGrowthChart heading={'Biểu đồ tăng trưởng người dùng'} subHeading={'Hàng tháng'} />
        <RevenueChart heading={'Doanh thu'} subHeading={'Hàng ngày'} />
      </div>

      <div className={styles['chart-wrap']}>
        <UserDistributionChart heading={'Phân bố người dùng'} subHeading={'Hàng tháng'} />
      </div>
    </div>
  );
}

export default Overview;
