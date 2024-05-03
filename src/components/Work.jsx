import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

const Work = () => {
  return (
    <div className='max-w-[1100px] mx-auto p-5' id='work'>
        <div className="pb-8">
            <p className="text-4xl mb-3 font-bold primary-color">Work</p>
            <div className="text-gray-400">Check out some of my recent work</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj1} alt="proj1" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj2} alt="proj2" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj3} alt="proj3" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj4} alt="proj4" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj5} alt="proj5" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-[#040c16] group container rounded-md justify-center items-center h-[200px] bg-cover relative">
                <img src={proj6} alt="proj6" layout="fill" objectFit="cover" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wide"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Work