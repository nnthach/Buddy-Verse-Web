import Slider from 'react-slick';
import './SliderSimple.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '../../pages/Home/components/OurGoal/OurGoal.module.scss';

function SliderSimple({ data, showItem = 3, scrollItem = 1 }) {
  const settingImgSlide = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: showItem,
    slidesToScroll: scrollItem,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  return (
    <Slider {...settingImgSlide}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles['img-wrap']}>
            <img src={item} />
          </div>
        );
      })}
    </Slider>
  );
}

export default SliderSimple;
