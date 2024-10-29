import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import ParallaxBadgeSection from './Parallax/ParallaxBadgeSection';
import About from './About/About';
import Footer from './Footer/Footer';
import AnimatedCursor from 'react-animated-cursor';

const Home = () => {

  return (
    <div className="lg:px-20 sm:px-4 bg-site bg-no-repeat bg-cover overflow-hidden h-auto">
      <div className="wrapper border-l border-r border-gray-50/10">
        <Navbar />
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)'
          }}
        />
        <Banner />
        <ParallaxBadgeSection></ParallaxBadgeSection>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
