import Image from "next/image";
import React from "react";
import curl from "../../../assets/curl.png";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="mt-4">
        <h1 className="text-5xl font-semibold text-center text-[#233470]">
          Barbell Bicep Curl
        </h1>
        <p className="text-lg text-[#14446F] mt-4 mx-6 md:mx-96 text-center">
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center ">
          <h3 className="mt-6 md:mt-12 text-lg text-[#100D81] font-semibold md:-translate-x-12">Bicep Development</h3>
          <div className="mx-6 md:mx-28">
            <p>
              The barbell bicep curl specifically targets the biceps brachii,
              contributing to their development and definition
            </p>
          </div>
          <h3 className="mt-6 md:mt-12 text-lg text-[#100D81] font-semibold md:-translate-x-14">Strength Building</h3>
          <div className="mx-6 md:mx-28">
            <p>
              The exercise allows for heavy resistance, promoting strength
              gains in the biceps and surrounding muscle groups
            </p>
          </div>
        </div>
        <div className="relative md:mt-8 w-[20rem] md:w-[20rem] h-[20rem] mx-auto">
          {/* Circle background */}
          <div className="absolute inset-0 rounded-full bg-[#19307E] opacity-80"></div>

          {/* Image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[28rem]">
            <Image src={curl} alt="curl" width={1200} height={1200} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mt-6 md:mt-12 text-lg text-[#100D81] font-semibold md:translate-x-4">Increased Muscle Engagement</h3>
          <div className="mx-6 md:mx-24 md:text-right">
            <p>
              By maintaining strict form and controlling the weight, you ensure
              that the biceps are doing the majority of the work, leading to
              better muscle engagement and growth.
            </p>
          </div>
          <h3 className="mt-6 md:mt-12 text-lg text-[#100D81] font-semibold md:translate-x-12">Compound Movement</h3>
          <div className="mx-6 md:mx-24 md:text-right">
            <p>
              While primarily an isolation exercise for the biceps, the barbell
              curl involves other muscles to a lesser extent, such as the
              forearms, shoulders, and upper back. This makes it a compound
              movement that engages multiple muscle groups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
