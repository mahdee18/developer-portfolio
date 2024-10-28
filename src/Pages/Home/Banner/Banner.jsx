import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col justify-center lg:h-screen border-l border-r border-gray-50/10 sm:py-8 py-4">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#ede8e8] mb-1 sm:mb-2">Hi, I'm</h3>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#ede8e8] mb-3 sm:mb-4 leading-tight">
        <span>Mir</span> <br />
        <span>Hussain</span> <br />
        <span>Murtaza</span>
      </h1>

      {/* 
      <Typed
        strings={[
          'I make stuff for web using React.',
          'I serve as a mentor.',
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        className="text-lg md:text-xl lg:text-2xl font-sans text-[#ede8e8] text-center mb-4"
      /> 
      */}
      
      <p className="text-base sm:text-lg text-[#cfcfcf] max-w-md">
        Passionate about crafting interactive web experiences and helping others learn and grow in the tech field.
      </p>
    </div>
  );
};

export default Banner;
