import React from 'react'

import JavaScript from '../assets/skills/javascript.png'
import ReactImg from '../assets/skills/react.png'
import Node from '../assets/skills/node.png'
import Mongo from '../assets/skills/mongo.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Tailwind from '../assets/skills/tailwind.png'
import Sass from '../assets/skills/sass.png'

function Skills() {
  return (
    <div name="skills" className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Compétences</p>
                <p className='py-4'>Les technologies avec lesquels j'ai travaillé</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"></img>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon"></img>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon"></img>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon"></img>
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"></img>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"></img>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"></img>
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto object-contain' src={Sass} alt="Sass icon"></img>
                    <p className='my-4'>SASS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills