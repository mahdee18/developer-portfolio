import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
const ParallaxBadgeSection = () => {
    return (
        <ParallaxProvider>
            <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">

                <div className="max-w-4xl mx-auto flex justify-center items-center relative h-[400px] w-full bg-stripe">
                    {/* Top-Left to Bottom-Right Badge */}
                    <Parallax
                        translateX={['-150px', '150px']}
                        scale={[1, 1.05]}
                        easing="easeOutQuad"
                        speed={-10}
                    >
                        <div className="shadow-xl border-t border-b border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-12 text-white font-semibold uppercase text-xl sm:text-2xl lg:text-3xl bg-[#111026]/10 p-4 rounded-lg overflow-hidden backdrop-blur-2xl z-20">
                            <div className="flex items-center justify-center gap-5 md:gap-10 h-full shrink-0 pr-10">
                                <span>Aficionado</span>
                                <span>🌟</span>
                                <span>Gamer</span>
                                <span>🌟</span>
                                <span>Bookworm</span>
                                <span>🌟</span>
                                <span>Bookworm</span>
                                <span>🌟</span>
                                <span>Bookworm</span>
                                <span>🌟</span>
                                <span>Bookworm</span>
                            </div>
                        </div>
                    </Parallax>

                    {/* Bottom-Left to Top-Right Badge */}
                    <Parallax
                        translateX={['150px', '-150px']}
                        scale={[1, 1.05]}
                        speed={-10}
                        easing="easeOutQuad"
                    >
                        <div className="shadow-xl border-t border-b border-white/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 text-white font-semibold uppercase text-xl sm:text-2xl lg:text-3xl bg-[#111026]/10 p-4 rounded-lg overflow-hidden backdrop-blur-2xl z-20">
                            <div className="flex items-center justify-center gap-5 md:gap-10 h-full shrink-0 pr-10 w-[2000px]">
                                <span>Creative Coder</span>
                                <span>🌟</span>
                                <span>Designer</span>
                                <span>🌟</span>
                                <span>Movie Buff</span>
                                <span>🌟</span>
                                <span>Movie Buff</span>
                                <span>🌟</span>
                                <span>Movie Buff</span>
                                <span>🌟</span>
                                <span>Movie Buff</span>
                            </div>
                        </div>
                    </Parallax>
                
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxBadgeSection;
