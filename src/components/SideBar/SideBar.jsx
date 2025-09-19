import { useContext } from 'react';
import styles from './SideBar.module.scss';
import { SideBarContext } from '~/context/SidebarContext';
import { Link } from 'react-router-dom';

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
        <li>
          <Link to={'/auth/login'} onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
        </li>
        <li>
          <Link to={'/auth/register'} onClick={() => setIsOpen(false)}>
            Get Start
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
