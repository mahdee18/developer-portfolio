import React from 'react';
import { FaFacebook,FaGithub,FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className=" mx-auto lg:px-[50px] sm:px-4 flex lg:flex-row text-white gap-4 p-10 ">

            <div className="flex-1">
                <h3 className='text-xl'>@2024 Mir Hussain Murtaza</h3>
            </div>

            <div className="flex-1 flex flex-col justify-center">

                <div className='flex justify-center items-center gap-5 text-[30px] text-end w-[100%] mx-auto'>
                    <Link to=''> <FaFacebook></FaFacebook></Link>
                    <Link to=''> <FaLinkedin></FaLinkedin></Link>
                    <Link to=''><FaGithub></FaGithub></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
