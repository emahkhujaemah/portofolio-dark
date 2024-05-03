import React from 'react';
import heroImage from '../assets/emah_cv.png'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 ps-2 gap-8 max-w-[1100px] md:h-[70vh] mx-auto py-8 bg-black'>
            
            <div className="col-span-1 my-auto mx-auto w-[230px] h-auto lg:w-[300px]">
                <img src={heroImage} alt="hero" />
            </div>

            <div className="col-span-2 px-8">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="primary-color">
                        I'm a
                    </span> <br />
                    <TypeAnimation 
                        sequence = {[
                            "Programmer",
                            1000,
                            "Web Developer",
                            1000,
                            "DevOps",
                            1000,
                        ]}
                        wrapper="span"
                        speed = {50}
                        repeat={Infinity} />
                </h1>

                <p className="text-white sm-text-lg my-6 lg:text-xl font-extrabold">
                    My name is Emah Khujaemah and I have 3+ years experince in Web Developer
                </p>

                <div className="my-8">
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500'>
                        Download CV
                    </a>
                    <a href="#contact" className='px-6 py-3 w-full rounded-xl border border-gray-500 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Hero;