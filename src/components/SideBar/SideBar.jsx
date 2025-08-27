import { useContext } from 'react';
import styles from './SideBar.module.scss';
import { SideBarContext } from '~/context/SidebarContext';

function SideBar() {
  const { setIsOpen } = useContext(SideBarContext);
  return (
    <div className={styles.wrap}>
      <p className={styles.close} onClick={() => setIsOpen(false)}>
        &times;
      </p>
      <ul>
        <li>About Us</li>
        <li>Our Goals</li>
        <li>Membership</li>
        <li>Policy</li>
      </ul>
    </div>
  );
}

export default SideBar;
