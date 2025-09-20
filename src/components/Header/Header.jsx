import { Link, Links } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import SideBar from '~/components/SideBar/SideBar';
import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from '~/context/SidebarContext';
import { AuthContext } from '~/context/AuthContext';

function Header({ aboutRef, goalsRef, membershipRef }) {
  const { setIsOpen } = useContext(SideBarContext);
  const [isScroll, setIsScroll] = useState(false);

  const { userInfo } = useContext(AuthContext);

  const scrollTo = (ref) => {
    console.log('ref', ref);
    setIsOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className={`${styles.wrap} ${isScroll && styles.scroll}`}>
      <div className={styles.container}>
        {/*Logo */}
        <div className={styles.logo}>buddyverse.</div>
        {/*Navbar */}
        <div className={styles.navbar}>
          <ul>
            <li onClick={() => scrollTo(aboutRef)}>About Us</li>
            <li onClick={() => scrollTo(goalsRef)}>Our Goals</li>
            <li onClick={() => scrollTo(membershipRef)}>Membership</li>
          </ul>
          {/*Responsive */}
          <FaBars onClick={() => setIsOpen(true)} className={styles['bar-icon']} />
        </div>
        {/*Auth */}
        <div className={styles.auth}>
          <Link to="auth/login">Sign In</Link>
          <Link className={styles['get-start']}>Get Start</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
