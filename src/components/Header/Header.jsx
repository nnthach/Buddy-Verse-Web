import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '~/context/SidebarContext';
import { AuthContext } from '~/context/AuthContext';
import appLogoTextBeige from '~/assets/images/logoTextBeige.png';

// Component thanh điều hướng
function Header({ aboutRef, goalsRef, membershipRef }) {
  const { setIsOpen } = useContext(SideBarContext);
  const [isScroll, setIsScroll] = useState(false);

  const { userInfo } = useContext(AuthContext);

  // Hàm cuộn đến phần tử tham chiếu
  const scrollTo = (ref) => {
    console.log('ref', ref);
    setIsOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      console.log('window y', window);
      console.log('full window', Object.getOwnPropertyNames(window));

      if (window.pageYOffset >= window.innerHeight * 0.8) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Container chính của thanh điều hướng
    <div className={`${styles.wrap} ${isScroll && styles.scroll}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={appLogoTextBeige} />
        </div>
        {/* Thanh điều hướng */}
        <div className={styles.navbar}>
          <ul>
            <li onClick={() => scrollTo(aboutRef)}>Về chúng tôi</li>
            <li onClick={() => scrollTo(goalsRef)}>Mục tiêu của chúng tôi</li>
            <li onClick={() => scrollTo(membershipRef)}>Thành viên</li>
          </ul>
          {/* Responsive */}
          <FaBars onClick={() => setIsOpen(true)} className={styles['bar-icon']} />
        </div>
        {/* Xác thực */}
        <div className={styles.auth}>
          {userInfo ? (
            <p>{userInfo?.username}</p>
          ) : (
            <>
              <Link to="auth/login">Đăng nhập</Link>
              <Link className={styles['get-start']}>Bắt đầu</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
