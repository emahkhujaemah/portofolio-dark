import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1100px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
        <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
            My <br /> Tech <br /> Stack
        </h2>

        <div className="flex flex-col items-center sm:my-0 w-[80px] md:w-[100px]">
            <img src={html} alt="HTML" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[80px] md:w-[100px]">
            <img src={css} alt="CSS" height={100} />
            <p className='mt-2'>CSS</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[80px] md:w-[100px]">
            <img src={javascript} alt="Javascript" height={100} />
            <p className='mt-2'>Javascript</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[80px] md:w-[100px]">
            <img src={react} alt="React" height={100} />
            <p className='mt-2'>React</p>
        </div>
        <div className="flex flex-col items-center sm:my-0 w-[80px] md:w-[100px]">
            <img src={tailwind} alt="Tailwind" height={100} />
            <p className='mt-2'>Tailwind</p>
        </div>

    </div>
  )
}

export default Skills