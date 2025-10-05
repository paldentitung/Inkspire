import React from "react";
import PageNotFound_image from "../assets/404Page.png";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
const PageNotFound = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full  mx-auto">
      <img
        src={PageNotFound_image}
        alt=""
        className="h-[500px] w-[500px] object-contain"
      />
      <Button name="Go Back" onclick={() => Navigate(-1)} />
    </div>
  );
};

export default PageNotFound;
