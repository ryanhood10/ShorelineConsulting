import React from "react";
import AkiraVideo from "../assets/videos/AkiraEngagement.mp4";

const SolutionsVideo = ({ title = "AI Solutions Video" }) => {
  return (
    <div className="flex justify-center items-center bg-white pb-12">
      <div className="w-full px-4  max-w-screen-lg mx-auto">
        <h2 className="text-center  text-1xl md:text-2xl lg:text-1xl mb-2">
          Revolutionizing the Digital Landscape with Shoreline.
        </h2>
        <video
          src={AkiraVideo}
          className="w-full h-auto rounded-md shadow-lg"
          controls
          title={title} // Accessible title
        />
      </div>
    </div>
  );
};

export default SolutionsVideo;
