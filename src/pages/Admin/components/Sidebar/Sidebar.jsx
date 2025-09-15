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
          <li className={content == 'overview' && styles.active} onClick={() => setContent('overview')}>
            <LuLayoutDashboard size={20} /> Overview
          </li>
          <li className={content == 'users' && styles.active} onClick={() => setContent('users')}>
            <LuUsers size={20} />
            Users
          </li>
          <li className={content == 'transactions' && styles.active} onClick={() => setContent('transactions')}>
            <MdOutlineAttachMoney size={20} /> Transactions
          </li>
          <li className={content == 'feedbacks' && styles.active} onClick={() => setContent('feedbacks')}>
            <IoChatboxOutline size={20} /> Feedbacks
          </li>
          <li className={content == 'reports' && styles.active} onClick={() => setContent('reports')}>
            <MdOutlineErrorOutline size={22} /> Reports
          </li>
          <li className={content == 'setting' && styles.active} onClick={() => setContent('setting')}>
            <LuSettings size={22} /> Setting
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
