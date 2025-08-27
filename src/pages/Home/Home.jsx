import Header from '~/components/Header/Header';
import styles from './Home.module.scss';

import Banner from '~/pages/Home/components/Banner/Banner';
import OurGoal from '~/pages/Home/components/OurGoal/OurGoal';
import AboutUs from '~/pages/Home/components/AboutUs/AboutUs';
import Membership from '~/pages/Home/components/Membership/Membership';
import Footer from '~/components/Footer/Footer';
import { useContext } from 'react';
import { SideBarContext } from '~/context/SidebarContext';

function Home() {
  const { aboutRefSidebar, goalsRefSidebar, membershipRefSidebar } = useContext(SideBarContext);

  return (
    <>
      <Header aboutRef={aboutRefSidebar} goalsRef={goalsRefSidebar} membershipRef={membershipRefSidebar} />
      <div className={styles.wrap}>
        <Banner />

        <AboutUs ref={aboutRefSidebar} />

        <OurGoal ref={goalsRefSidebar} />

        <Membership ref={membershipRefSidebar} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
