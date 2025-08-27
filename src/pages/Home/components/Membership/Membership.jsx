import styles from './Membership.module.scss';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

function Membership() {
  const membershipPlansData = [
    {
      info: {
        name: 'BASIC',
        price: '29,999',
        rule: 'Per member, per month',
        description: 'For all individuals and starters who want to start with domaining.',
      },
      benefits: [
        { label: 'Access to All Features', available: true },
        { label: '1k lookups / per month', available: true },
        { label: 'No API Credits', available: false },
        { label: '10 Monitoring Quota', available: true },
        { label: '60 minutes Monitoring interval', available: true },
        { label: '20% discount on backorders', available: true },
        { label: 'Domain Name Appraisal', available: true, tag: 'Coming Soon' },
      ],
    },
    {
      info: {
        tag: 'Popular',
        name: 'PREMIUM',
        price: '49,999',
        rule: 'Per member, per month',
        description: 'For professional domain names investors with a big portfolio.',
      },
      benefits: [
        { label: 'Access to All Features', available: true },
        { label: '1k lookups / per month', available: true },
        { label: '30k API Credits / month', available: true },
        { label: '10 Monitoring Quota', available: true },
        { label: '60 minutes Monitoring interval', available: true },
        { label: '20% discount on backorders', available: true },
        { label: 'Domain Name Appraisal', available: true, tag: 'Coming Soon' },
        { label: 'IP Monitoring', available: true, tag: 'Coming Soon' },
        { label: 'Backlink Monitoring', available: true, tag: 'Coming Soon' },
      ],
    },
    {
      info: {
        name: 'ADVANCED',
        price: '499,999',
        rule: 'Per member, per year',
        description: 'For professional domain names investors with a big portfolio.',
      },
      benefits: [
        { label: 'Access to All Features', available: true },
        { label: '1k lookups / per month', available: true },
        { label: '30k API Credits / month', available: true },
        { label: '10 Monitoring Quota', available: true },
        { label: '60 minutes Monitoring interval', available: true },
        { label: '20% discount on backorders', available: true },
        { label: 'Domain Name Appraisal', available: true, tag: 'Coming Soon' },
        { label: 'IP Monitoring', available: true, tag: 'Coming Soon' },
        { label: 'Backlink Monitoring', available: true, tag: 'Coming Soon' },
      ],
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h5>Membership</h5>
        <p className={styles.tagline}>Unlock a better experience</p>

        <div className={styles.content}>
          {membershipPlansData.map((item, index) => (
            <div
              key={index}
              className={`${styles['membership-card']} ${item.info.name == 'BASIC' ? styles.basic : styles.premium}`}
            >
              <div className={styles['membership-content']}>
                {/*Header */}
                <div className={styles['header']}>
                  {item.info.tag && <p className={styles['tag']}>Popular</p>}
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
                        <IoIosCheckmarkCircle fontSize={24} color={item.info.name == 'BASIC' ? 'black' : '#F1F3E7'} />
                      ) : (
                        <IoIosCloseCircle fontSize={24} color="red" />
                      )}{' '}
                      {label.label}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className={styles.actions}>
                  <button className={styles['trial-btn']}>Start free 14-days trial</button>
                  <p className={styles.note}>No credit card required</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Membership;
