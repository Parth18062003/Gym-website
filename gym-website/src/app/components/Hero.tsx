import React from "react";
import hero from "../../../assets/barbell-curl.jpg";
import sub from "../../../assets/sub.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <Image
          src={hero}
          alt="Hero Image"
          className="mx-auto md:w-[1340px] md:h-[680px]"
          width={1240}
          height={680}
        />
      </div>
      <div className="flex items-center">
        <div className="md:absolute md:bottom-5 md:left-5 bg-white rounded-full px-3 py-1 shadow-md">
          <div className="flex items-center">
            <Image src={sub} alt="subscribe" height={36} width={36} />
            <span className="ml-2">100+ new users enrolled</span>
          </div>
          <div className="text-[0.6rem] mt-[-7px] ml-12">
            Join now to get 20% instant discount
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
