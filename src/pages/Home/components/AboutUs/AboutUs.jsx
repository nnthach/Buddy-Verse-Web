import styles from './AboutUs.module.scss';
import leafImg from '~/assets/images/leaf.webp';
import chatImg from '~/assets/images/chat.webp';
import safeImg from '~/assets/images/safe.webp';
import connectImg from '~/assets/images/connect.webp';
import { forwardRef } from 'react';

const AboutUs = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.container}>
        <h5>Về Buddy Verse</h5>
        <p className={styles.tagline}>Khám phá câu chuyện và tầm nhìn đằng sau BuddyVerse.</p>
        <p className={styles['about-text']}>
          BuddyVerse là một nền tảng xã hội mới được thiết kế để gắn kết mọi người thông qua sự đồng cảm, hỗ trợ và tình
          bạn ý nghĩa. Trong thế giới kỹ thuật số nhịp độ nhanh ngày nay, nhiều người cảm thấy cô đơn và bị cô lập dù
          được "kết nối" hơn bao giờ hết. BuddyVerse nhằm thay đổi điều đó bằng cách tạo ra một không gian an toàn và
          chào đón, nơi mọi người có thể hình thành các mối quan hệ chân thực, chia sẻ trải nghiệm và tìm được sự khích
          lệ từ những người thực sự hiểu họ.
          <br />
          <br />
          Không giống như các mạng xã hội truyền thống chủ yếu tập trung vào giải trí hoặc tương tác bề mặt, BuddyVerse
          nhấn mạnh vào sức khỏe tinh thần và giao tiếp chân thành. Sứ mệnh của chúng tôi là trao quyền cho người dùng
          để xây dựng tình bạn bền vững hơn, khám phá các cộng đồng cùng sở thích và cảm thấy được hỗ trợ qua mọi giai
          đoạn của cuộc đời.
          <br />
          <br />
          Dù là qua các cuộc trò chuyện một đối một, hoạt động nhóm hay hành trình phát triển bản thân, BuddyVerse không
          chỉ là một nền tảng—đó là một phong trào hướng tới lòng tốt, sự thuộc về và kết nối con người.
        </p>

        <div className={styles.content}>
          <div className={styles['content-box']}>
            <img src={connectImg} />
            <p className={styles['content-box-text']}>
              Tìm bạn bè phù hợp dựa trên sở thích, tính cách và nhu cầu kết nối.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={chatImg} />
            <p className={styles['content-box-text']}>Trò chuyện và chia sẻ câu chuyện một cách tự do và thoải mái.</p>
          </div>
          <div className={styles['content-box']}>
            <img src={leafImg} />
            <p className={styles['content-box-text']}>
              Xây dựng mối quan hệ bền vững thông qua các hoạt động tương tác và hỗ trợ lẫn nhau.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={safeImg} />
            <p className={styles['content-box-text']}>Giữ an toàn với hệ thống kiểm duyệt và báo cáo thông minh.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutUs;
