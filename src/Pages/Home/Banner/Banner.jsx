import React from 'react';
import { ReactTyped } from 'react-typed';

const Banner = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-col justify-center items-center lg:h-screen border-l border-r border-gray-50/10 sm:py-8 py-4">
      <h3 className=""></h3>

      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#ede8e8] mb-3 sm:mb-4 leading-tight">
        <span className='text-2xl text-start md:text-3xl lg:text-4xl font-serif text-[#ede8e8] mb-1 sm:mb-2'>Hi, I'm</span> <br />
        <span>Mir</span> <br />
        <span>Hussain</span> <br />
        <span>Murtaza</span>
      </h1>


      <div className='text-white text-lg'>
        <ReactTyped
          strings={[
            "I am passionate about learning new things.",
            "I enjoy solving complex problems.",
            "I believe in continuous improvement.",
            "I make stuff for web using React.",
            "I serve as a mentor.",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        >
        </ReactTyped>
      </div>
    </div>
  );
};

export default Banner;
