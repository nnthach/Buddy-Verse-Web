import Overview from '~/pages/Admin/components/Body/content/OverView/OverView';
import styles from './Body.module.scss';

import { IoCopyOutline } from 'react-icons/io5';
import Users from '~/pages/Admin/components/Body/content/Users/Users';
import Transactions from '~/pages/Admin/components/Body/content/Transactions/Transactions';
import Feedbacks from '~/pages/Admin/components/Body/content/Feedbacks/Feedbacks';
import Reports from '~/pages/Admin/components/Body/content/Reports/Reports';
import Setting from '~/pages/Admin/components/Body/content/Setting/Setting';

function Body({ content }) {
  const contentRender = () => {
    switch (content) {
      case 'overview':
        return <Overview />;
      case 'users':
        return <Users />;
      case 'transactions':
        return <Transactions />;
      case 'feedbacks':
        return <Feedbacks />;
      case 'reports':
        return <Reports />;
      case 'setting':
        return <Setting />;
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <p className={styles['header-text-right']}>
          <IoCopyOutline color="black" />
          Dasboard / <span>{content.charAt(0).toUpperCase() + content.slice(1)}</span>
        </p>
      </div>
      <div className={styles.content}>{contentRender()}</div>
    </div>
  );
}

export default Body;
