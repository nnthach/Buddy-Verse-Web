import Header from '~/components/Header/Header';
import styles from './Home.module.scss';

import Banner from '~/pages/Home/components/Banner/Banner';
import OurGoal from '~/pages/Home/components/OurGoal/OurGoal';
import AboutUs from '~/pages/Home/components/AboutUs/AboutUs';
import Membership from '~/pages/Home/components/Membership/Membership';
import Footer from '~/components/Footer/Footer';
// import appstore from '~/assets/images/appstore.webp';

function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrap}>
        <Banner />

        <AboutUs />

        <OurGoal />

        <Membership />
      </div>
      <Footer />
    </>
  );
}

export default Home;
