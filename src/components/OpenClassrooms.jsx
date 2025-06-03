import React from "react";
import Groupomania from "../assets/project/groupomania.jpg";
import HotTakes from "../assets/project/hot_takes.jpg";
import Kanap from "../assets/project/kanap.jpg";
import ChouetteAgence from "../assets/project/chouette_agence.jpg";
import Ohmyfood from "../assets/project/ohmyfood.jpg";
import Reservia from "../assets/project/reservia.jpg";

function OpenClassrooms() {
  return (
    <div
      name="openclassrooms"
      className="w-full md:h-screen bg-primary text-secondary min-h-screen py-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent">
            OpenClassrooms
          </p>
          <p className="py-4">#react #nodejs #js #sass #html #css</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Groupomania})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Groupomania
              </span>
              <p>#React #NodeJS #SASS</p>
              <div className="pt-8 text-center">
                {/* <a href='/'> */}
                {/* <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-secondary font-bold text-lg'>Demo</button> */}
                {/* </a> */}
                <a
                  href="https://github.com/cremedekiwi/react_groupomania"
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
            style={{ backgroundImage: `url(${HotTakes})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hot Takes
              </span>
              <p>#NodeJS</p>
              <div className="pt-8 text-center">
                {/* <a href='/'> */}
                {/* <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-secondary font-bold text-lg'>Demo</button> */}
                {/* </a> */}
                <a
                  href="https://github.com/cremedekiwi/nodejs_hot_takes"
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
            style={{ backgroundImage: `url(${Kanap})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Kanap
              </span>
              <p>#Vanilla JavaScript</p>
              <div className="pt-8 text-center">
                <a
                  href="https://cremedekiwi.github.io/js_kanap/front/html/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/js_kanap"
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
            style={{ backgroundImage: `url(${ChouetteAgence})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                La Chouette Agence
              </span>
              <p>#SEO #HTML #CSS</p>
              <div className="pt-8 text-center">
                <a
                  href="https://cremedekiwi.github.io/html_lachouetteagence/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/html_lachouetteagence"
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
            style={{ backgroundImage: `url(${Ohmyfood})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ohmyfood
              </span>
              <p>#HTML #SASS</p>
              <div className="pt-8 text-center">
                <a
                  href="https://cremedekiwi.github.io/sass_ohmyfood/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/sass_ohmyfood"
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
            style={{ backgroundImage: `url(${Reservia})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Reservia
              </span>
              <p>#HTML #CSS</p>
              <div className="pt-8 text-center">
                <a
                  href="https://cremedekiwi.github.io/css_reservia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounder-lg px-4 py-3 m-2 bg-white text-primary font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/cremedekiwi/css_reservia"
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

export default OpenClassrooms;
