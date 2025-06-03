import React from "react";
import Transcendance from "../assets/project/ft_t.jpg";
import Inception from "../assets/project/inception.jpg";
import Webserv from "../assets/project/webserv.jpg";
import Cub3d from "../assets/project/cub3d.jpg";
import Minishell from "../assets/project/minishell.jpg";
import Philo from "../assets/project/philo.jpg";

function FortyTwo() {
  return (
    <div
      name="fortytwo"
      className="w-full md:h-screen bg-primary text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            42
          </p>
          <p className="py-4">#typescript #tailwind #c++ #c</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Transcendance})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ft_transcendance
              </span>
              <p>#TypeScript #Fastify #SQLite #Tailwind</p>
              <div className="pt-8 text-center">
                {/* <a href='/'> */}
                {/* <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-secondary font-bold text-lg'>Demo</button> */}
                {/* </a> */}
                <a
                  href="https://github.com/cremedekiwi/ts_transcendence"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Inception})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                inception
              </span>
              <p>#Docker</p>
              <div className="pt-8 text-center">
                {/* <a href='/'> */}
                {/* <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-secondary font-bold text-lg'>Demo</button> */}
                {/* </a> */}
                <a
                  href="https://github.com/cremedekiwi/inception"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Webserv})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                webserv
              </span>
              <p>#c++</p>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://cremedekiwi.github.io/js_kanap/front/html/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/cremedekiwi/cpp_webserv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Cub3d})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                cub3d
              </span>
              <p>#c</p>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://cremedekiwi.github.io/sass_ohmyfood/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/cremedekiwi/c_cub3d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Minishell})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                minishell
              </span>
              <p>#c</p>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://cremedekiwi.github.io/css_reservia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/cremedekiwi/c_minishell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Philo})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                philosopher
              </span>
              <p>#c</p>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://cremedekiwi.github.io/css_reservia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/cremedekiwi/c_philosopher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FortyTwo;
