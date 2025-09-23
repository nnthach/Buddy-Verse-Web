import { forwardRef } from 'react';
import styles from './Membership.module.scss';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

const Membership = forwardRef((props, ref) => {
  const membershipPlansData = [
    {
      info: {
        name: 'CƠ BẢN',
        price: '29,999',
        rule: 'Mỗi thành viên, mỗi tháng',
        description: 'Dành cho tất cả cá nhân và người mới bắt đầu muốn thử với lĩnh vực tên miền.',
      },
      benefits: [
        { label: 'Truy cập tất cả tính năng', available: true },
        { label: '1k lượt tra cứu / mỗi tháng', available: true },
        { label: 'Không có tín dụng API', available: false },
        { label: 'Hạn mức giám sát 10', available: true },
        { label: 'Khoảng thời gian giám sát 60 phút', available: true },
        { label: 'Giảm giá 20% cho đơn đặt trước', available: true },
        { label: 'Định giá tên miền', available: true, tag: 'Sắp ra mắt' },
      ],
    },
    {
      info: {
        tag: 'Phổ biến',
        name: 'CAO CẤP',
        price: '49,999',
        rule: 'Mỗi thành viên, mỗi tháng',
        description: 'Dành cho các nhà đầu tư tên miền chuyên nghiệp với danh mục lớn.',
      },
      benefits: [
        { label: 'Truy cập tất cả tính năng', available: true },
        { label: '1k lượt tra cứu / mỗi tháng', available: true },
        { label: '30k tín dụng API / tháng', available: true },
        { label: 'Hạn mức giám sát 10', available: true },
        { label: 'Khoảng thời gian giám sát 60 phút', available: true },
        { label: 'Giảm giá 20% cho đơn đặt trước', available: true },
        { label: 'Định giá tên miền', available: true, tag: 'Sắp ra mắt' },
        { label: 'Giám sát IP', available: true, tag: 'Sắp ra mắt' },
        { label: 'Giám sát liên kết ngược', available: true, tag: 'Sắp ra mắt' },
      ],
    },
    {
      info: {
        name: 'NÂNG CAO',
        price: '499,999',
        rule: 'Mỗi thành viên, mỗi năm',
        description: 'Dành cho các nhà đầu tư tên miền chuyên nghiệp với danh mục lớn.',
      },
      benefits: [
        { label: 'Truy cập tất cả tính năng', available: true },
        { label: '1k lượt tra cứu / mỗi tháng', available: true },
        { label: '30k tín dụng API / tháng', available: true },
        { label: 'Hạn mức giám sát 10', available: true },
        { label: 'Khoảng thời gian giám sát 60 phút', available: true },
        { label: 'Giảm giá 20% cho đơn đặt trước', available: true },
        { label: 'Định giá tên miền', available: true, tag: 'Sắp ra mắt' },
        { label: 'Giám sát IP', available: true, tag: 'Sắp ra mắt' },
        { label: 'Giám sát liên kết ngược', available: true, tag: 'Sắp ra mắt' },
      ],
    },
  ];
  return (
    <div ref={ref} className={styles.wrap}>
      <div className={styles.container}>
        <h5>Thành viên</h5>
        <p className={styles.tagline}>Mở khóa trải nghiệm tốt hơn</p>

        <div className={styles.content}>
          {membershipPlansData.map((item, index) => (
            <div
              key={index}
              className={`${styles['membership-card']} ${item.info.name == 'CƠ BẢN' ? styles.basic : styles.premium}`}
            >
              <div className={styles['membership-content']}>
                {/*Header */}
                <div className={styles['header']}>
                  {item.info.tag && <p className={styles['tag']}>Phổ biến</p>}
                  <h2 className={`${styles['name']}`}>{item.info.name}</h2>
                  <p className={styles['description']}>{item.info.description}</p>
                </div>
                {/*Price */}
                <div className={styles['price']}>
                  <h3 className={styles['value']}>{item.info.price} đ</h3>
                  <p className={styles['rule']}>{item.info.rule}</p>
                </div>
                {/*Benefit */}
                <ul className={styles.benefits}>
                  {item.benefits.map((label, index) => (
                    <li key={index} className={`${styles.benefit} ${styles.available}`}>
                      {label.available ? (
                        <IoIosCheckmarkCircle fontSize={24} color={item.info.name == 'CƠ BẢN' ? 'black' : '#F1F3E7'} />
                      ) : (
                        <IoIosCloseCircle fontSize={24} color="red" />
                      )}{' '}
                      {label.label}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className={styles.actions}>
                  <button className={styles['trial-btn']}>Bắt đầu dùng thử miễn phí 14 ngày</button>
                  <p className={styles.note}>Không yêu cầu thẻ tín dụng</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Membership;
