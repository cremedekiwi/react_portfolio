import React from 'react'
import Groupomania from '../assets/groupomania.jpg'
import HotTakes from '../assets/hot_takes.jpg'
import Kanap from '../assets/kanap.jpg'
import ChouetteAgence from '../assets/chouette_agence.jpg'
import Ohmyfood from '../assets/ohmyfood.jpg'
import Reservia from '../assets/reservia.jpg'

function Work() {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projets</p>
                <p className='py-6'>Voici certains de mes récents projets</p>
            </div>
        
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Groupomania})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Groupomania
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'> */}
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            {/* </a> */}
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_7_04012022' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${HotTakes})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Hot Takes
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'> */}
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            {/* </a> */}
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_6_02122021' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Kanap})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Kanap
                        </span>
                        <div className='pt-8 text-center'>
                            {/* <a href='/'> */}
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            {/* </a> */}
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_5_10112021' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${ChouetteAgence})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            La Chouette Agence
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://cremedekiwi.github.io/JuthamandjouARUMUGAM_4_25102021/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_4_25102021' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Ohmyfood})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Ohmyfood
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://cremedekiwi.github.io/JuthamandjouARUMUGAM_3_04102021/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_3_04102021' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Reservia})`}}
                className='shadow-lg shadow[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Reservia
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://cremedekiwi.github.io/JuthamandjouARUMUGAM_2_09092021/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/cremedekiwi/JuthamandjouARUMUGAM_2_09092021' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Work