import styles from './Banner.module.scss';
import bannerHome from '~/assets/images/bannerhome.webp';
import mascotLogo from '~/assets/images/robotmascot.webp';
function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['img-wrap']}>
        <img src={bannerHome} alt="banner-home" />
      </div>
      <div className={styles.overlay} />

      <div className={styles['download-wrap']}>
        {/*Logo app */}
        <div className={styles['logo-app']}>
          <img src={mascotLogo} />
        </div>
        <h5>Buddy Verse</h5>
        <p>Feel deeper, live truer</p>
        {/*Download method */}

        <div className={styles['logo-download']}></div>
      </div>
    </div>
  );
}

export default Banner;
