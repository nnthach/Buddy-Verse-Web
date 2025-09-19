import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './Users.module.scss';

function Users() {
  const userSummaryData = [
    {
      title: 'Total Users',
      number: '4650',
      percent: 15.6,
    },
    {
      title: 'Active Users',
      number: '4000',
      percent: 15.6,
    },
    {
      title: 'Premium Users',
      number: '2600',
      percent: 15.6,
    },
    {
      title: 'New This Month',
      number: '256',
      percent: 15.6,
    },
  ];

  const userListData = [
    {
      id: 1,
      username: 'nnthach',
      email: 'thach@gmail.com',
      phone: '0903532335',
      membership: 'PREMIUM',
      createdAt: '24/04/2025',
    },
    {
      id: 2,
      username: 'johndoe',
      email: 'john.doe@example.com',
      phone: '0905123456',
      membership: 'BASIC',
      createdAt: '01/05/2025',
    },
    {
      id: 3,
      username: 'janesmith',
      email: 'jane.smith@example.com',
      phone: '0912123456',
      membership: 'PREMIUM',
      createdAt: '02/05/2025',
    },
    {
      id: 4,
      username: 'anhvu',
      email: 'anh.vu@example.com',
      phone: '0987654321',
      membership: 'BASIC',
      createdAt: '03/05/2025',
    },
    {
      id: 5,
      username: 'linhnguyen',
      email: 'linh.nguyen@example.com',
      phone: '0909988776',
      membership: 'PREMIUM',
      createdAt: '04/05/2025',
    },
    {
      id: 6,
      username: 'hoangle',
      email: 'hoang.le@example.com',
      phone: '0911222333',
      membership: 'BASIC',
      createdAt: '05/05/2025',
    },
    {
      id: 7,
      username: 'phamtuan',
      email: 'pham.tuan@example.com',
      phone: '0933444555',
      membership: 'PREMIUM',
      createdAt: '06/05/2025',
    },
    {
      id: 8,
      username: 'huyenpham',
      email: 'huyen.pham@example.com',
      phone: '0977665544',
      membership: 'BASIC',
      createdAt: '07/05/2025',
    },
    {
      id: 9,
      username: 'trungkien',
      email: 'trung.kien@example.com',
      phone: '0955332211',
      membership: 'PREMIUM',
      createdAt: '08/05/2025',
    },
    {
      id: 10,
      username: 'minhhoang',
      email: 'minh.hoang@example.com',
      phone: '0966778899',
      membership: 'BASIC',
      createdAt: '09/05/2025',
    },
    {
      id: 11,
      username: 'tientran',
      email: 'tien.tran@example.com',
      phone: '0944112233',
      membership: 'PREMIUM',
      createdAt: '10/05/2025',
    },
    {
      id: 12,
      username: 'quangvu',
      email: 'quang.vu@example.com',
      phone: '0933774466',
      membership: 'BASIC',
      createdAt: '11/05/2025',
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles['top-summary']}>
        {userSummaryData.map((item, index) => (
          <div key={index} className={styles['summary-box']}>
            <div className={styles.top}>
              <p>{item.title}</p>
              <FaArrowTrendUp />
            </div>
            <div className={styles.bottom}>
              <p>{item.number}</p>
              <span>+{item.percent}</span>
            </div>
          </div>
        ))}
      </div>

      {/*Tabel */}
      <div className={styles['content-wrap']}>
        <div className={styles['content-header']}>
          <h2>Users Table</h2>
        </div>
        <div className={styles['table-wrap']}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>membership</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {userListData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td style={{ fontWeight: 'bold' }}>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span>{user.membership}</span>
                  </td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
