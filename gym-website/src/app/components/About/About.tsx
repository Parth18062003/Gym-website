import Image from "next/image";
import React from "react";
import phone1 from "../../../../assets/phone1.png";
import phone2 from "../../../../assets/phone2.png";
import google_play from "../../../../assets/google_play.svg";
import app_store from "../../../../assets/app_store.svg";
import MoreExcercises from "./MoreExcercises";

const About = () => {
  return (
    <>
      <div className="relative bg-[#042440] p-6 md:p-20">
        <h2 className="text-3xl md:text-4xl text-white font-semibold">
          Download FitSnap Now
        </h2>
        <h3 className="text-xl md:text-2xl text-white font-semibold">
          and turn every workout into a visual masterpiece
        </h3>
        <div className="flex flex-wrap items-center mt-3">
          <Image
            src={google_play}
            alt="Google Play"
            className="w-20 md:w-auto h-auto mt-6 mr-4 md:mr-12 mb-6 md:mb-0"
          />
          <Image
            src={app_store}
            alt="App Store"
            className="w-20 md:w-auto h-auto mt-6 mb-6 md:mb-0"
          />
        </div>
        <div className="absolute inset-y-0 right-0  items-center z-10 hidden xl:flex">
          <div className="flex mt-6 md:mt-16">
            <Image
              src={phone1}
              alt="Image 1"
              className="w-[14rem] md:w-[28rem] h-auto md:h-96 mt-6 md:mt-3 md:translate-x-48"
            />
            <Image
              src={phone2}
              alt="Image 2"
              className="w-[14rem] md:w-[28rem] h-auto md:h-96 mt-6 md:mt-[3.5rem] z-[-1]"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 w-full h-20 md:h-32 bg-gradient-to-b from-white to-[#fafafa] transform translate-y-1/2 rounded-t-[100%]"></div>
      </div>
      <div className="container px-6 md:px-24 xl:px-48 text-center relative">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-semibold text-[#233470] mt-6 xl:mt-16">
          Elevate Your Fitness: The AI Workout Plan – Precision, Progression,
          Perfection
        </h2>
        <p className="mt-3 md:mt-6 mx-2 md:mx-28 xl:mx-48 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
          augue. Integer congue, libero nec congue fermentum, neque turpis
          eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt{" "}
        </p>
      </div>
      <MoreExcercises />
    </>
  );
};

export default About;
