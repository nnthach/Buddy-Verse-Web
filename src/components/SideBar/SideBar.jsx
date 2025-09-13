import { useContext } from 'react';
import styles from './SideBar.module.scss';
import { SideBarContext } from '~/context/SidebarContext';

function SideBar() {
  const { setIsOpen, aboutRefSidebar, goalsRefSidebar, membershipRefSidebar } = useContext(SideBarContext);
  const scrollTo = (ref) => {
    console.log('ref', ref);
    setIsOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.wrap}>
      <p className={styles.close} onClick={() => setIsOpen(false)}>
        &times;
      </p>
      <ul>
        <li onClick={() => scrollTo(aboutRefSidebar)}>About Us</li>
        <li onClick={() => scrollTo(goalsRefSidebar)}>Our Goals</li>
        <li onClick={() => scrollTo(membershipRefSidebar)}>Membership</li>
        <div className={styles.line} />
        <li>Sign In</li>
        <li>Get Start</li>
      </ul>
    </div>
  );
}

export default SideBar;
