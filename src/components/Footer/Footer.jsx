import styles from './Footer.module.scss';
import appstoreImg from '~/assets/images/download_appstore.webp';
import chplayImg from '~/assets/images/download_chplay.webp';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className={styles.wrap}>
      {/*Top */}
      <div className={styles.top}>
        {/*Logo */}
        <div className={styles.logo}>buddyverse</div>
        <div className={styles['download-header']}>
          <p>Download Now</p>
          <div className={styles['img-download-wrap']}>
            <img src={appstoreImg} />
            <img src={chplayImg} />
          </div>
        </div>
        <p className={styles.para}>
          To anyone who feels alone: If you’re looking for real connections, someone to talk to, or simply new friends
          to share life with, Buddy Verse is the place for you. With thousands of meaningful conversations already
          started, Buddy Verse helps you discover your next genuine connection. The truth is, making friends today isn’t
          the same as it used to be — most people now begin their connections online. With Buddy Verse, a social
          platform designed to bring people closer, you’ll always find someone ready to listen, share, and connect.
          <br />
          <br />
          Whether you’re looking for support, friendship, or just someone who truly understands, Buddy Verse has a place
          for you. Just moved to a new city? Want to meet peers who share your interests? Or simply need a safe space to
          talk? Buddy Verse is here to help. Buddy Verse isn’t just another social app — it’s a diverse community where
          people from all walks of life can build authentic relationships, create memories, and share experiences that
          truly matter.
        </p>
      </div>
      <div className={styles.line} />
      {/*Bottom */}
      <div className={styles.bottom}>
        <div className={styles['footer-col']}>
          <h5>Legal</h5>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
        <div className={styles['footer-col']}>
          <h5>Support</h5>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>FAQs</p>
        </div>
        <div className={styles['footer-col']}>
          <h5>Contact</h5>
          <div className={styles['footer-col-icon']}>
            <FaFacebook fontSize={30} /> <FaInstagram fontSize={30} /> <FaTiktok fontSize={30} />
          </div>
        </div>
      </div>

      <div className={styles.line} />

      {/*Sub bottom */}
      <p>© 2025 Buddy Verse. All rights reserved.</p>
    </div>
  );
}

export default Footer;
