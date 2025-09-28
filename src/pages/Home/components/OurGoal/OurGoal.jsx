import Slider from 'react-slick';
import styles from './OurGoal.module.scss';

import goal1 from '~/assets/images/goal1.jpg';
import goal2 from '~/assets/images/goal2.jpg';
import goal3 from '~/assets/images/goal3.jpg';
import goal4 from '~/assets/images/goal4.jpg';
import goal5 from '~/assets/images/goal5.jpg';
import goal6 from '~/assets/images/goal6.jpg';
import SliderSimple from '~/components/SliderSimple/SliderSimple';
import { forwardRef, useState } from 'react';

const OurGoal = forwardRef((props, ref) => {
  const [currentImg, setCurrentImg] = useState(0);

  const imgData = [goal1, goal2, goal3, goal4, goal5, goal6];

  const prevSlide = () => {
    setCurrentImg((prev) => (prev === 0 ? imgData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImg((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div ref={ref} className={styles['our-goals']}>
      <div className={styles.container}>
        <h5>Mục tiêu của chúng tôi</h5>
        <p className={styles.tagline}>
          Chúng tôi hướng tới việc biến công nghệ thành cầu nối cho sự kết nối con người thực sự.
        </p>
        <div className={styles.slider}>
          <SliderSimple data={imgData} />
        </div>
        {/* Thanh trượt responsive */}
        <div className={styles['slider-responsive']}>
          <button className={styles.btn + ' ' + styles.prev} onClick={prevSlide}>
            &#10094;
          </button>

          <div className={styles['img-wrap-responsive']}>
            <img src={imgData[currentImg]} alt={`slide-${currentImg}`} />
          </div>

          <button className={styles.btn + ' ' + styles.next} onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
});

export default OurGoal;
