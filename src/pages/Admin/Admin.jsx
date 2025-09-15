import Body from '~/pages/Admin/components/Body/Body';
import styles from './Admin.module.scss';

import Sidebar from '~/pages/Admin/components/Sidebar/Sidebar';
import { useState } from 'react';

function Admin() {
  const [content, setContent] = useState('overview');
  return (
    <div className={styles.wrap}>
      <Sidebar setContent={setContent} content={content} />
      <Body content={content} />
    </div>
  );
}

export default Admin;
