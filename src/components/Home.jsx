import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-base sm:text-4xl text-accent">
          42 Paris Common Core • Seeking CDI
        </p>
        {/* <h1 className='text-2xl sm:text-7xl font-bold text-[#8892b0]'>From art school to dev</h1> */}
        {/* <h2 className='text-2xl sm:text-7xl font-bold text-secondary'>Top 6% of the 03/24 class</h2> */}
        <p className="text-sm sm:text-2xl text-[#8892b0] py-4 max-w-[700px]">
          I offer aesthetic vision and robust coding abilities.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent">
              See my projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
