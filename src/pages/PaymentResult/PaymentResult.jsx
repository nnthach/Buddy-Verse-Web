import { Link, useParams } from 'react-router-dom';
import styles from './PaymentResult.module.scss';

function PaymentResult() {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'success':
        return (
          <div className={`${styles.result} ${styles.success}`}>
            <h2>Thanh toán thành công 🎉</h2>
            <p>Cảm ơn bạn đã hoàn tất giao dịch. Gói đăng ký của bạn đã được kích hoạt.</p>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
        );
      case 'fail':
        return (
          <div className={`${styles.result} ${styles.fail}`}>
            <h2>Thanh toán thất bại ❌</h2>
            <p>Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.</p>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
        );
      default:
        return (
          <div className={styles.result}>
            <h2>Không xác định kết quả thanh toán</h2>
            <p>Vui lòng quay lại trang chủ.</p>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
        );
    }
  };

  return <div className={styles['payment-result']}>{renderContent()}</div>;
}

export default PaymentResult;
