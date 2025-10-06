import React from "react";
import My_photo from "../assets/My-Photo.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";
const About = ({ mode, primary }) => {
  return (
    <section
      className={`py-20 border-t  ${
        mode
          ? "bg-gray-50  border-t-transparent"
          : "bg-gray-800 text-gray-100 border-t-gray-600"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {/* Image */}
        <div className="overflow-hidden rounded-full  shadow-lg">
          <img
            src={My_photo}
            alt="Palden"
            className="w-44 h-44 object-cover rounded-full transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-xl space-y-4">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold text-blue-500">Palden</span>{" "}
            — a passionate web developer and tech enthusiast who loves sharing
            knowledge through blogs. I write about frontend development, React,
            and my personal learning experiences in coding.
          </p>
          <Link to="/blogs">
            <Button name="Read My Blogs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
