import React from 'react';

const About = () => {
    return (
        <div className=" mx-auto px-[50px] flex flex-col lg:flex-row text-white gap-4 p-10 ">
            {/* Left Column: Image */}
            <div className="flex-1">
                <img
                    src="https://i.ibb.co.com/cgS6BpB/mypic-bb074bc5.jpg" // Replace with your image URL
                    alt="About Us"
                    className="w-auto h-[800px] rounded-lg shadow-lg" // Styles for image
                />
            </div>

            {/* Right Column: Title and Paragraph */}
            <div className="flex-1 flex flex-col justify-center">
                <div className='border border-gray-50/10 text-center py-8 my-10 mt-[-35px]'>
                    <h2 className="text-2xl font-bold">About Me</h2>
                </div>

                <div className='w-[100%] mx-auto'>
                    <p className="text-lg w-[98%] mx-auto">
                        Hi, I'm Mir Hussain Murtaza , a passionate web developer and Programming Hero Mentor with nearly 3 years of experience in the field. I specialize in frontend development, working extensively with React/Next and TailwindCSS to create visually stunning and highly interactive websites. My journey began with a love for graphic design, which evolved into a deep fascination with web development after encountering some inspiring animated websites. This led me to a fulfilling role at Programming Hero, where I not only build web applications but also mentor aspiring developers. One of my proudest achievements is co-creating the "Programming Hero Next Level Web Development" course, which aims to uplift and empower the enthusiastic junior developers. My professional goal is to become an exceptional developer capable of crafting mind-blowing frontends while making a significant positive impact through teaching and mentoring. Outside of work, I enjoy writing and making videos about tech, watching movies and anime, playing video games, and designing graphic assets. I value honesty, time efficiency, and straightforward communication. I am deeply committed to my dual roles as a mentor and developer, and I strive to inspire and guide others with the same dedication and passion I bring to my own work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
