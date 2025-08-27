import { Link, Links } from 'react-router-dom';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';
import SideBar from '~/components/SideBar/SideBar';
import { useContext } from 'react';
import { SideBarContext } from '~/context/SidebarContext';

function Header() {
  const { setIsOpen } = useContext(SideBarContext);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {/*Logo */}
        <div className={styles.logo}>buddyverse.</div>
        {/*Navbar */}
        <div className={styles.navbar}>
          <ul>
            <li>About Us</li>
            <li>Our Goals</li>
            <li>Membership</li>
            <li>Policy</li>
          </ul>
          {/*Responsive */}
          <FaBars onClick={() => setIsOpen(true)} className={styles['bar-icon']} />
        </div>
        {/*Auth */}
        <div className={styles.auth}>
          <Link>Sign In</Link>
          <Link className={styles['get-start']}>Get Start</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
