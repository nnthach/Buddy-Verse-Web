import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './Users.module.scss';
import { useState } from 'react';
import Pagination from '~/components/Pagination/Pagination';

function Users() {
  const userSummaryData = [
    {
      title: 'Tổng số người dùng',
      number: '4650',
      percent: 15.6,
    },
    {
      title: 'Người dùng hoạt động',
      number: '4000',
      percent: 15.6,
    },
    {
      title: 'Người dùng cao cấp',
      number: '2600',
      percent: 15.6,
    },
    {
      title: 'Người dùng mới trong tháng',
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
      membership: 'CAO CẤP',
      createdAt: '24/04/2025',
    },
    {
      id: 2,
      username: 'johndoe',
      email: 'john.doe@example.com',
      phone: '0905123456',
      membership: 'CƠ BẢN',
      createdAt: '01/05/2025',
    },
    {
      id: 3,
      username: 'janesmith',
      email: 'jane.smith@example.com',
      phone: '0912123456',
      membership: 'CAO CẤP',
      createdAt: '02/05/2025',
    },
    {
      id: 4,
      username: 'anhvu',
      email: 'anh.vu@example.com',
      phone: '0987654321',
      membership: 'CƠ BẢN',
      createdAt: '03/05/2025',
    },
    {
      id: 5,
      username: 'linhnguyen',
      email: 'linh.nguyen@example.com',
      phone: '0909988776',
      membership: 'CAO CẤP',
      createdAt: '04/05/2025',
    },
    {
      id: 6,
      username: 'hoangle',
      email: 'hoang.le@example.com',
      phone: '0911222333',
      membership: 'CƠ BẢN',
      createdAt: '05/05/2025',
    },
    {
      id: 7,
      username: 'phamtuan',
      email: 'pham.tuan@example.com',
      phone: '0933444555',
      membership: 'CAO CẤP',
      createdAt: '06/05/2025',
    },
    {
      id: 8,
      username: 'huyenpham',
      email: 'huyen.pham@example.com',
      phone: '0977665544',
      membership: 'CƠ BẢN',
      createdAt: '07/05/2025',
    },
    {
      id: 9,
      username: 'trungkien',
      email: 'trung.kien@example.com',
      phone: '0955332211',
      membership: 'CAO CẤP',
      createdAt: '08/05/2025',
    },
    {
      id: 10,
      username: 'minhhoang',
      email: 'minh.hoang@example.com',
      phone: '0966778899',
      membership: 'CƠ BẢN',
      createdAt: '09/05/2025',
    },
    {
      id: 11,
      username: 'tientran',
      email: 'tien.tran@example.com',
      phone: '0944112233',
      membership: 'CAO CẤP',
      createdAt: '10/05/2025',
    },
    {
      id: 12,
      username: 'quangvu',
      email: 'quang.vu@example.com',
      phone: '0933774466',
      membership: 'CƠ BẢN',
      createdAt: '11/05/2025',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = userListData.slice(indexOfFirstProduct, indexOfLastProduct);

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

      {/*Bảng*/}
      <div className={styles['content-wrap']}>
        <div className={styles['content-header']}>
          <h2>Bảng người dùng</h2>
        </div>
        <div className={styles['table-wrap']}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Gói thành viên</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {currentProduct.map((user) => (
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

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={userListData.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
