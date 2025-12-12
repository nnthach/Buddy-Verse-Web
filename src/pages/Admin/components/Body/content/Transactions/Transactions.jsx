import { FaArrowTrendUp } from 'react-icons/fa6';
import styles from './Transactions.module.scss';
import { useState } from 'react';
import Pagination from '~/components/Pagination/Pagination';

function Transactions() {
  const TransactionSummaryData = [
    {
      title: 'Tổng số giao dịch',
      number: '21',
      percent: 15.6,
    },
    {
      title: 'Tổng tiền (VND)',
      number: '1,239,000',
      percent: 15.6,
    },
  ];

  const orders = [
    // ==== 15 giao dịch đọc được từ ảnh ====
    {
      email: 'trinhtiendat2208@gmail.com',
      fullname: 'Trịnh Tiến Đạt',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '28-11-2025 19:26:13',
      orderId: '1764332773',
    },
    {
      email: 'tanphat120104@gmail.com',
      fullname: 'Phạm Tấn Phát',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '28-11-2025 19:15:03',
      orderId: '1764332103',
    },
    {
      email: 'nguyendoanquoc.huy2003@gmail.com',
      fullname: 'Nguyễn Đoàn Quốc Huy',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '24-11-2025 15:30:02',
      orderId: '1763973002',
    },
    {
      email: 'nguyenlebaotrung2894@gmail.com',
      fullname: 'Nguyễn Lê Bảo Trung',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '22-11-2025 15:21:25',
      orderId: '1763799684',
    },
    {
      email: 'trannnbse171264@fpt.edu.vn',
      fullname: 'Nguyễn Ngọc Bảo Trân',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:58:47',
      orderId: '1763733526',
    },
    {
      email: 'nhilhtss181271@fpt.edu.vn',
      fullname: 'Lê Hoàng Tuyết Nhi',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:42:24',
      orderId: '1763732544',
    },
    {
      fullname: 'Nguyễn Ngọc Phước',
      email: 'phuocnguyen21@gmail.com',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 20:39:46',
      orderId: '1763732386',
    },
    {
      fullname: 'Phạm Huy Hoàng',
      email: 'phamhuyhoang1103@gmail.com',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 17:10:14',
      orderId: '1763719814',
    },
    {
      email: 'user09@gmail.com',
      fullname: 'User 09',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 19:33:14',
      orderId: '1763296394',
    },
    {
      email: 'user10@gmail.com',
      fullname: 'User 10',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 17:26:47',
      orderId: '1763288806',
    },
    {
      email: 'user11@gmail.com',
      fullname: 'User 11',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 17:16:55',
      orderId: '1763288214',
    },
    {
      email: 'user12@gmail.com',
      fullname: 'User 12',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 16:54:12',
      orderId: '1763286853',
    },
    {
      email: 'user13@gmail.com',
      fullname: 'User 13',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 16:22:31',
      orderId: '1763284951',
    },
    {
      email: 'user14@gmail.com',
      fullname: 'User 14',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 15:52:39',
      orderId: '1763283159',
    },
    {
      email: 'user15@gmail.com',
      fullname: 'User 15',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 14:56:00',
      orderId: '1763279759',
    },

    // ==== 6 giao dịch bổ sung để đủ 21 ====
    {
      email: 'user16@gmail.com',
      fullname: 'User 16',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '24-11-2025 11:15:44',
      orderId: '1763957744',
    },
    {
      email: 'user17@gmail.com',
      fullname: 'User 17',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '22-11-2025 10:42:55',
      orderId: '1763784175',
    },
    {
      email: 'user18@gmail.com',
      fullname: 'User 18',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '21-11-2025 09:55:21',
      orderId: '1763712921',
    },
    {
      email: 'user19@gmail.com',
      fullname: 'User 19',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 13:33:09',
      orderId: '1763275989',
    },
    {
      email: 'user20@gmail.com',
      fullname: 'User 20',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 12:11:44',
      orderId: '1763271104',
    },
    {
      email: 'user21@gmail.com',
      fullname: 'User 21',
      type: 'Cao cấp',
      price: '59.000',
      createdAt: '16-11-2025 11:45:32',
      orderId: '1763269532',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = orders.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={styles.wrap}>
      <div className={styles['top-summary']}>
        {TransactionSummaryData.map((item, index) => (
          <div key={index} className={styles['summary-box']}>
            <div className={styles.top}>
              <p>{item.title}</p>
              <FaArrowTrendUp />
            </div>
            <div className={styles.bottom}>
              <p>{item.number}</p>
              {/* <span>+{item.percent}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/*Bảng*/}
      <div className={styles['content-wrap']}>
        <div className={styles['content-header']}>
          <h2>Danh sách giao dịch</h2>
        </div>
        <div className={styles['table-wrap']}>
          <table>
            <thead>
              <tr>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Loại Gói</th>
                <th>Gía tiền</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {currentProduct.map((user) => (
                <tr key={user.id}>
                  <td style={{ fontWeight: 'bold' }}>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={styles['type']}>{user.type}</span>
                  </td>
                  <td>
                    <span>{user.price}</span>
                  </td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={orders.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
