import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faE, faX } from "@fortawesome/free-solid-svg-icons";
import { CgCPlusPlus, CgVercel } from "react-icons/cg";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify,
  SiTensorflow,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import {
  DiJavascript1,

  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
  DiGithub,
  DiMysql,
  DiGoogleCloudPlatform,
  DiJava,
} from "react-icons/di";

const Skills = () => {
  return (
    <div className="bg-gray-800 flex flex-col gap-6 pt-10">
        
      <h1 className="sm:text-5xl text-5xl font-medium title-font mb-4 text-white text-center spacing">
        SKILL<span className="text-teal-500">S</span>ET
      </h1>
      <h1 className="sm:text-xl text-xl font-medium  title-font mb-4 text-teal-500 text-center spacing">
       MERN STACK 
      </h1>
      <div className="flex flex-row">
        <div>
          <ol class=" ml-20 relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6 hover:bg-gray-900 hover:rounded-xl hover:animate-fall4 p-5">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-teal-600">
                <svg
                  class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class=" ml-8 flex items-center mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                ReactJS &nbsp;&nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faReact}
                  size="2xl"
                  style={{ color: "#63E6BE" }}
                />
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I crafted dynamic and interactive user interfaces with React, that provides users with an amazing web experience.
              </p>
            </li>
            <li class="mb-10 ms-6 hover:bg-gray-900 hover:rounded-xl hover:animate-fall4 p-5">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-teal-600">
                <svg
                  class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class=" animate-fall4 ml-8 flex items-center mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                NodeJs &nbsp;&nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faNode}
                  size="2xl"
                  style={{ color: "#63E6BE" }}
                />
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I leverage Node.js to create high-performance, event-driven server environments for responsive web apps.

              </p>
            </li>
          </ol>
        </div>
        <Link to="/skills"></Link>
        <div className="mt-56">
          <ol class=" ml-10 mr-10 relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6 hover:bg-gray-900 hover:rounded-xl hover:animate-fall4 p-5">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-teal-600">
                <svg
                  class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class=" animate-fall4 ml-8 flex items-center mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                ExpressJs &nbsp;&nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faE}
                  size="small"
                  style={{ color: "#63E6BE" }}
                />
                <FontAwesomeIcon
                  icon={faX}
                  size="small"
                  style={{ color: "#63E6BE" }}
                />
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I manage and scale databases with MongoDB to ensure efficient data storage and retrieval.
              </p>
            </li>
            <li class="mb-10 ms-6 hover:bg-gray-900 hover:rounded-xl hover:animate-fall4 p-5">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-teal-600">
                <svg
                  class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class=" animate-fall4 ml-8 flex items-center mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                MongoDB &nbsp;&nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faDatabase}
                  size="small"
                  style={{ color: "#63E6BE" }}
                />
              </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Over two years of experience with the frame, built over 20 cool
                frontend projects using ReactJS
              </p>
            </li>
          </ol>
        </div>
        
      </div>
      
      <h3 className="sm:text-small font-medium title-font text-white text-center spacing">I possess proficient expertise in a diverse range of programming languages, including C, C++, Python, Java and JavaScript.</h3>
      <div className="p-6  flex flex-row gap-12 items-center justify-center   ">
      <CgCPlusPlus className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      
      <DiJavascript1 className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <DiJava className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <DiPython className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>

       
      
      </div>
      <h3 className="sm:text-small font-medium title-font text-white text-center spacing">Experienced in a versatile tech stack, including React, Express.js, Node.js, Tailwind CSS, and Tensorflow.</h3>
      <div className="p-6  flex flex-row gap-12 items-center justify-center  ">
      
      <SiTailwindcss className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <SiBootstrap className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <SiTensorflow className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>

      
    </div>
    <h3 className="sm:text-small font-medium title-font text-white text-center spacing">I am well-versed in utilizing various tools and platforms to enhance the development process, including Visual Studio Code, Cloud Git, Github, Netlify, Vercel, Firebase, and Postman.</h3>
    <div className="p-6  flex flex-row gap-12 items-center justify-center  ">
      <SiVisualstudiocode className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4  w-20 h-20  text-gray-900 dark:text-white" />
      <SiPostman className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white" />
     
      <DiGithub className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <DiGit className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <DiGoogleCloudPlatform className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <SiNetlify className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
      <CgVercel className="hover:animate-fall6 hover:bg-gray-900 border-2 border-teal-500 p-4 w-20 h-20 text-gray-900 dark:text-white"/>
 
    </div>
    </div>
  );
};

export default Skills;
