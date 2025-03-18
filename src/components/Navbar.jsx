import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import CV from '../assets/cv_jarumugam.pdf'
import {Link} from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <Link to="home" smooth={true} duration={500}>
                <img src={Logo} alt="Logo" style={{width: '50px'}} />
            </Link>
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li className='hover:text-pink-600'>
                <Link to="work" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='hover:text-pink-600'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='hover:text-pink-600'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>

            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/juth/" target="_blank" rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/cremedekiwi" target="_blank" rel="noopener noreferrer">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="mailto:jarumugam@outlook.fr">
                        Mail <HiOutlineMail size={30} />
                    </a>
                </li> */}
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href={CV} target="_blank" rel="noopener noreferrer">
                        CV <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
