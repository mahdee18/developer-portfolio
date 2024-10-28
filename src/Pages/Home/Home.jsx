import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import ParallaxBadgeSection from './Parallax/ParallaxBadgeSection';
import About from './About/About';
import Footer from './Footer/Footer';

const Home = () => {

  return (
    <div className="px-20 bg-site bg-no-repeat bg-cover overflow-hidden h-[350vh]">
      <div className="wrapper border border-l-gray-50/10 border-r-gray-50/10">
        <Navbar />
        <Banner />
        <ParallaxBadgeSection></ParallaxBadgeSection>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
