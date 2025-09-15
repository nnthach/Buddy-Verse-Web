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
            <p>New Users</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>256</p>
            <span>+15.6%</span>
          </div>
        </div>
        <div className={styles['summary-box']}>
          <div className={styles.top}>
            <p>Premium Users</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>256</p>
            <span>+15.6%</span>
          </div>
        </div>
      </div>

      {/*Chart */}
      <div className={styles['chart-wrap']}>
        <UserGrowthChart heading={'User Grow Chart'} subHeading={'Monthly'} />
        <RevenueChart heading={'Revenue'} subHeading={'Daily'} />
      </div>

      <div className={styles['chart-wrap']}>
        <UserDistributionChart heading={'User Distribution'} subHeading={'Monthly'} />
      </div>
    </div>
  );
}

export default Overview;
