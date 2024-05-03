import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1100px] mx-auto my-12' id='about'>
        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt3 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                    I am a graduate in Software Engineering from Indramayu State Polytechnic, I possess solid skills in web application backend development and database management for creating API services. My experience includes deploying websites using code collaboration platforms and effectively solving programming issues, including creating and modifying the appearance of the frontend. I am looking for a programming-related job opportunity, where I can use my expertise to help companies achieve their goals.
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="About" width={300} height={300} />
        </div>
    </div>
  )
}

export default About