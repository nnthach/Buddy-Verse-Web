import styles from './Banner.module.scss';
import bannerHome from '~/assets/images/bannerHome.png';
// import mascotLogo from '~/assets/images/robotmascot.webp';
import appstoreImg from '~/assets/images/download_appstore.webp';
import chplayImg from '~/assets/images/download_chplay.webp';
import appLogo from '~/assets/images/applogo.png';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['img-wrap']}>
        <img src={bannerHome} alt="banner-home" />
      </div>
      <div className={styles.overlay} />

      <div className={styles['download-wrap']}>
        {/*Logo ứng dụng */}
        <div className={styles['logo-app']}>
          {/* <img src={mascotLogo} /> */}
          <img src={appLogo} />
        </div>
        <h5>Buddy Verse</h5>
        <p>Cảm nhận sâu sắc hơn, sống chân thật hơn</p>
        {/*Phương thức tải xuống */}

        <div className={styles['logo-download']}>
          <img src={appstoreImg} />
          <img src={chplayImg} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
