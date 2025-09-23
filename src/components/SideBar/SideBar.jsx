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
        <li onClick={() => scrollTo(aboutRefSidebar)}>Về Chúng Tôi</li>
        <li onClick={() => scrollTo(goalsRefSidebar)}>Mục Tiêu Của Chúng Tôi</li>
        <li onClick={() => scrollTo(membershipRefSidebar)}>Thành Viên</li>
        <div className={styles.line} />
        <li>
          <Link to={'/auth/login'} onClick={() => setIsOpen(false)}>
            Đăng Nhập
          </Link>
        </li>
        <li>
          <Link to={'/auth/register'} onClick={() => setIsOpen(false)}>
            Bắt Đầu
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
