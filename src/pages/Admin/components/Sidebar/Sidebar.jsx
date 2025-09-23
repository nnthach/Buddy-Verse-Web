import styles from './Sidebar.module.scss';

import { LuLayoutDashboard, LuUsers, LuSettings } from 'react-icons/lu';
import { IoChatboxOutline } from 'react-icons/io5';
import { MdOutlineErrorOutline, MdOutlineAttachMoney, MdLogout } from 'react-icons/md';

function Sidebar({ content, setContent }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h3>Buddy Verse</h3>
        <ul>
          <li className={content == 'overview' ? styles.active : undefined} onClick={() => setContent('overview')}>
            <LuLayoutDashboard size={20} /> Tổng quan
          </li>
          <li className={content == 'users' ? styles.active : undefined} onClick={() => setContent('users')}>
            <LuUsers size={20} />
            Người dùng
          </li>
          <li
            className={content == 'transactions' ? styles.active : undefined}
            onClick={() => setContent('transactions')}
          >
            <MdOutlineAttachMoney size={20} /> Giao dịch
          </li>
          <li className={content == 'feedbacks' ? styles.active : undefined} onClick={() => setContent('feedbacks')}>
            <IoChatboxOutline size={20} /> Phản hồi
          </li>
          <li className={content == 'reports' ? styles.active : undefined} onClick={() => setContent('reports')}>
            <MdOutlineErrorOutline size={22} /> Báo cáo
          </li>
          <li className={content == 'setting' ? styles.active : undefined} onClick={() => setContent('setting')}>
            <LuSettings size={22} /> Cài đặt
          </li>
        </ul>
      </div>

      <div className={styles.footer}>
        <div className={styles['img-wrap']}></div>
        <p>admin1</p>
        <MdLogout size={24} color="red" style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  );
}

export default Sidebar;
