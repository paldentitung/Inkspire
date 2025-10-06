import React from "react";
import hero_image from "../assets/hero_image.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" relative h-[60vh]">
        <img
          src={hero_image}
          alt="hero-image"
          className="w-full h-full  object-cover"
        />
        {/* overlay */}
        <div className=" absolute inset-0 h-full flex justify-center items-center flex-col bg-black/60 z-40 text-white w-full   ">
          <div className="w-full max-w-6xl flex justify-center items-center flex-col space-y-6 text-center p-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hi, I’m Palden – Crafting Code, Sharing Knowledge
            </h1>
            <h4 className="text-[18px] sm:text-[20px]">
              Explore tutorials, projects, and tech insights to level up your
              coding journey.
            </h4>

            <Link to="/blogs">
              <Button name="View Blogs" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
