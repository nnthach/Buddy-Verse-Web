import styles from './AboutUs.module.scss';
import leafImg from '~/assets/images/leaf.webp';
import chatImg from '~/assets/images/chat.webp';
import safeImg from '~/assets/images/safe.webp';
import connectImg from '~/assets/images/connect.webp';

function AboutUs() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h5>About Buddy Verse</h5>
        <p className={styles['big-text']}>
          BuddyVerse is a new social platform with a mission to connect people through empathy and meaningful
          companionship. In today’s digital world, many individuals feel isolated and struggle to build genuine
          connections.
        </p>

        <div className={styles.content}>
          <div className={styles['content-box']}>
            <img src={connectImg} />
            <p className={styles['content-box-text']}>
              Find compatible friends based on interests, personality, and connection needs.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={chatImg} />
            <p className={styles['content-box-text']}>Chat and share stories freely and comfortably.</p>
          </div>
          <div className={styles['content-box']}>
            <img src={leafImg} />
            <p className={styles['content-box-text']}>
              Build lasting bonds through interactive activities and mutual support.
            </p>
          </div>
          <div className={styles['content-box']}>
            <img src={safeImg} />
            <p className={styles['content-box-text']}>
              Stay safe and secure with smart moderation and reporting systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
