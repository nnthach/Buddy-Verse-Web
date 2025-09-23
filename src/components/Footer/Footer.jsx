import styles from './Footer.module.scss';
import appstoreImg from '~/assets/images/download_appstore.webp';
import chplayImg from '~/assets/images/download_chplay.webp';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

// Component chân trang
function Footer() {
  return (
    <div className={styles.wrap}>
      {/* Phần trên */}
      <div className={styles.top}>
        {/* Logo */}
        <div className={styles.logo}>buddyverse</div>
        <div className={styles['download-header']}>
          <p>Tải xuống ngay</p>
          <div className={styles['img-download-wrap']}>
            <img src={appstoreImg} alt="Tải từ App Store" />
            <img src={chplayImg} alt="Tải từ CH Play" />
          </div>
        </div>
        <p className={styles.para}>
          Dành cho bất kỳ ai cảm thấy cô đơn: Nếu bạn đang tìm kiếm những kết nối thực sự, một người để trò chuyện, hoặc
          chỉ đơn giản là những người bạn mới để chia sẻ cuộc sống, Buddy Verse là nơi dành cho bạn. Với hàng ngàn cuộc
          trò chuyện ý nghĩa đã được bắt đầu, Buddy Verse giúp bạn khám phá những mối quan hệ chân thành tiếp theo. Sự
          thật là, việc kết bạn ngày nay không còn như trước đây — hầu hết mọi người hiện nay bắt đầu các mối quan hệ
          của họ qua mạng. Với Buddy Verse, một nền tảng xã hội được thiết kế để đưa mọi người đến gần nhau hơn, bạn sẽ
          luôn tìm thấy ai đó sẵn sàng lắng nghe, chia sẻ và kết nối.
          <br />
          <br />
          Dù bạn đang tìm kiếm sự hỗ trợ, tình bạn, hay chỉ cần một người thực sự hiểu bạn, Buddy Verse luôn có chỗ cho
          bạn. Vừa chuyển đến một thành phố mới? Muốn gặp những người cùng sở thích? Hay chỉ cần một không gian an toàn
          để trò chuyện? Buddy Verse luôn sẵn sàng hỗ trợ. Buddy Verse không chỉ là một ứng dụng xã hội thông thường —
          đó là một cộng đồng đa dạng nơi mọi người từ mọi tầng lớp có thể xây dựng các mối quan hệ chân thực, tạo ra
          những kỷ niệm và chia sẻ những trải nghiệm thực sự ý nghĩa.
        </p>
      </div>
      <div className={styles.line} />

      {/* Phần dưới */}
      <div className={styles.bottom}>
        <div className={styles['footer-col']}>
          <h5>Pháp lý</h5>
          <p>Chính sách bảo mật</p>
          <p>Điều khoản dịch vụ</p>
          <p>Chính sách cookie</p>
        </div>
        <div className={styles['footer-col']}>
          <h5>Hỗ trợ</h5>
          <p>Trung tâm trợ giúp</p>
          <p>Liên hệ với chúng tôi</p>
          <p>Câu hỏi thường gặp</p>
        </div>
        <div className={styles['footer-col']}>
          <h5>Liên hệ</h5>
          <div className={styles['footer-col-icon']}>
            <FaFacebook fontSize={30} /> <FaInstagram fontSize={30} /> <FaTiktok fontSize={30} />
          </div>
        </div>
      </div>

      <div className={styles.line} />

      {/* Phần phụ dưới cùng */}
      <p>© 2025 Buddy Verse. Bản quyền thuộc về Buddy Verse.</p>
    </div>
  );
}

export default Footer;
