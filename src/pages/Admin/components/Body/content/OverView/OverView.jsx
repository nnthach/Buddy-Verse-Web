import UserGrowthChart from '~/components/Charts/LineChart';
import styles from './OverView.module.scss';
import { FaArrowTrendUp } from 'react-icons/fa6';
import RevenueChart from '~/components/Charts/BarChart';
import UserDistributionChart from '~/components/Charts/PieChart';

function Overview() {
  const orders = [
    // ==== 15 giao dịch đọc được từ ảnh ====
    {
      email: 'user19@gmail.com',
      fullname: 'User 19',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 13:33:09',
      orderId: '1763275989',
    },
    {
      email: 'user20@gmail.com',
      fullname: 'User 20',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 12:11:44',
      orderId: '1763271104',
    },
    {
      email: 'user21@gmail.com',
      fullname: 'User 21',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 11:45:32',
      orderId: '1763269532',
    },
    {
      email: 'user09@gmail.com',
      fullname: 'User 09',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 19:33:14',
      orderId: '1763296394',
    },
    {
      email: 'user10@gmail.com',
      fullname: 'User 10',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 17:26:47',
      orderId: '1763288806',
    },
    {
      email: 'user11@gmail.com',
      fullname: 'User 11',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 17:16:55',
      orderId: '1763288214',
    },
    {
      email: 'user12@gmail.com',
      fullname: 'User 12',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 16:54:12',
      orderId: '1763286853',
    },
    {
      email: 'user13@gmail.com',
      fullname: 'User 13',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 16:22:31',
      orderId: '1763284951',
    },
    {
      email: 'user14@gmail.com',
      fullname: 'User 14',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 15:52:39',
      orderId: '1763283159',
    },
    {
      email: 'user15@gmail.com',
      fullname: 'User 15',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 14:56:00',
      orderId: '1763279759',
    },

    {
      email: 'user18@gmail.com',
      fullname: 'User 18',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 09:55:21',
      orderId: '1763712921',
    },

    {
      email: 'user06@gmail.com',
      fullname: 'User 06',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:42:24',
      orderId: '1763732544',
    },
    {
      email: 'user07@gmail.com',
      fullname: 'User 07',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:39:46',
      orderId: '1763732386',
    },
    {
      email: 'user08@gmail.com',
      fullname: 'User 08',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 17:10:14',
      orderId: '1763719814',
    },

    {
      email: 'user05@gmail.com',
      fullname: 'User 05',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:58:47',
      orderId: '1763733526',
    },
    {
      email: 'user04@gmail.com',
      fullname: 'User 04',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '22-11-2025 15:21:25',
      orderId: '1763799684',
    },
    {
      email: 'user17@gmail.com',
      fullname: 'User 17',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '22-11-2025 10:42:55',
      orderId: '1763784175',
    },
    {
      email: 'user16@gmail.com',
      fullname: 'User 16',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '24-11-2025 11:15:44',
      orderId: '1763957744',
    },

    {
      email: 'user03@gmail.com',
      fullname: 'User 03',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '24-11-2025 15:30:02',
      orderId: '1763973002',
    },

    {
      email: 'user01@gmail.com',
      fullname: 'User 01',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '28-11-2025 19:26:13',
      orderId: '1764332773',
    },
    {
      email: 'user02@gmail.com',
      fullname: 'User 02',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '28-11-2025 19:15:03',
      orderId: '1764332103',
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.summary}>
        <div className={styles['summary-box']}>
          <div className={styles.top}>
            <p>Người dùng</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>25</p>
            {/* <span>+15.6%</span> */}
          </div>
        </div>
        <div className={styles['summary-box']}>
          <div className={styles.top}>
            <p>Người dùng cao cấp</p>
            <FaArrowTrendUp />
          </div>
          <div className={styles.bottom}>
            <p>21</p>
            {/* <span>+15.6%</span> */}
          </div>
        </div>
      </div>

      {/*Biểu đồ*/}
      <div className={styles['chart-wrap']}>
        <UserGrowthChart heading={'Biểu đồ người dùng'} subHeading={'Hàng tháng'} />
        <RevenueChart heading={'Doanh thu'} subHeading={'Hàng ngày'} orders={orders} />
      </div>

      <div className={styles['chart-wrap']}>
        <UserDistributionChart heading={'Phân bố người dùng'} subHeading={'Hàng tháng'} />
      </div>
    </div>
  );
}

export default Overview;
