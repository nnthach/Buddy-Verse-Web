import Slider from 'react-slick';
import styles from './OurGoal.module.scss';
import connectImg from '~/assets/images/goal_connect.webp';
import connectImg2 from '~/assets/images/goal_connect2.webp';
import connectImg3 from '~/assets/images/goal_connect3.webp';
import connectImg4 from '~/assets/images/goal_connect4.webp';
import connectImg5 from '~/assets/images/goal_connect5.webp';
import connectImg6 from '~/assets/images/goal_connect6.webp';
import SliderSimple from '~/components/SliderSimple/SliderSimple';
import { useState } from 'react';

function OurGoal() {
  const [currentImg, setCurrentImg] = useState(0);

  const imgData = [connectImg, connectImg2, connectImg3, connectImg4, connectImg5, connectImg6];

  const prevSlide = () => {
    setCurrentImg((prev) => (prev === 0 ? imgData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImg((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles['our-goals']}>
      <div className={styles.container}>
        <h5>Our Goals</h5>
        <div className={styles.slider}>
          <SliderSimple data={imgData} />
        </div>
        {/*Responsive slider */}
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
}

export default OurGoal;
