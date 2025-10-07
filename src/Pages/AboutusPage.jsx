import React from "react";
import About from "../Components/About";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
const AboutusPage = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div className="flex flex-col space-y-7">
      <About mode={mode} />
      <div className="max-w-6xl mx-auto flex flex-col  items-center justify-center text-center gap-10 px-6 space-y-10">
        {/* my journey */}
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
          <p className="text-lg leading-relaxed">
            I started my journey as a curious learner, exploring frontend
            development with HTML and CSS. Over time, I dove deeper into
            JavaScript, learned DOM manipulation, and gradually moved to more
            advanced concepts like React and Tailwind CSS. Along the way, I
            built small projects like to-do apps, joke generators, and personal
            websites to practice and solidify what I learned.
          </p>
          <p className="text-lg leading-relaxed ">
            My approach has always been self-learning first — experimenting,
            building, and understanding by doing, rather than just following
            tutorials. This has helped me gain confidence in both frontend and
            full-stack development.
          </p>
        </div>
        {/* tech stack */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="flex flex-wrap justify-center md:justify-start gap-5">
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-orange-500 hover:text-white  hover:scale-110 ${
                mode ? "" : "border-gray-400  border "
              }`}
            >
              HTML
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              CSS
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-yellow-400 hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              JavaScript
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-[#61dafb] hover:text-black hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              React
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-teal-500 hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              Tailwind CSS
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-green-600 hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              Node.js
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-red-600 hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              Git
            </li>
            <li
              className={` rounded-2xl px-4 py-2 shadow-md transition-all duration-200 hover:cursor-pointer hover:bg-[#0078d7] hover:text-white hover:scale-110 ${
                mode ? "" : "border-gray-400  border"
              }`}
            >
              VS Code
            </li>
          </ul>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">What’s Next</h2>
          <p className="text-lg leading-relaxed ">
            I’m focused on improving my full-stack skills, learning backend
            development, and building more feature-rich web applications. I also
            aim to share my learning experiences through blogs and projects that
            help others understand coding in a simple and practical way.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutusPage;
