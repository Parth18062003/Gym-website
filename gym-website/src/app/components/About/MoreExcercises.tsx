import chestPress from "../../../../assets/chest-press.png";
import deadlift from "../../../../assets/deadlift.png";
import crunches from "../../../../assets/crunches.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const MoreExcercises = () => {
  return (
    <>
      <div className="container md:px-48 text-center relative">
        <h2 className="text-xl md:text-3xl font-semibold text-[#233470] mt-6 md:mt-10">
          Discover the other exercise at FitSnap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-48 xl:gap-8 mb-12">
          <div>
            <div className="relative md:mt-16 w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] mx-auto">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-[#E4A101] opacity-30"></div>
              {/* Image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[15rem] md:w-[20rem] -translate-y-4">
                <Image
                  src={chestPress}
                  alt="chest press"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#100D81] font-semibold mt-3">Chest Press</h3>
              <p className="mt-3 xl:mx-10 md:mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. In hac habitasse platea dictumst. Vivamus eget
                fermentum
              </p>
              <Link
                href="/chest-press"
                className="underline text-[#233470] font-semibold mt-3"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          <div>
            <div className="relative md:mt-16 w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] mx-auto">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-[#8CFB7A] opacity-40"></div>

              {/* Image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-[60%] w-[15rem] md:w-[20rem] -translate-y-2">
                <Image
                  src={deadlift}
                  alt="deadlift"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#100D81] font-semibold mt-3">
                Straight leg deadlift
              </h3>
              <p className="mt-3 md:mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. In hac habitasse platea dictumst. Vivamus eget
                fermentum
              </p>
              <Link
                href="/deadlift"
                className="underline text-[#233470] font-semibold mt-3"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
          <div>
            <div className="relative xl:mt-16 w-[10rem] md:w-[15rem] h-[10rem] md:h-[15rem] mx-auto">
              {/* Circle background */}
              <div className="absolute inset-0 rounded-full bg-[#31D7FC] opacity-25"></div>

              {/* Image */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-[55%] w-[15rem] md:w-[20rem] -translate-y-7">
                <Image
                  src={crunches}
                  alt="crunches"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#100D81] font-semibold mt-3">Crunches</h3>
              <p className="mt-3 md:mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. In hac habitasse platea dictumst. Vivamus eget
                fermentum
              </p>
              <Link
                href="/crunches"
                className="underline text-[#233470] font-semibold mt-3"
              >
                Read More &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreExcercises;
