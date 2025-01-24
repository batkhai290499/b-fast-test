"use client";

import { CrossHair, FishingIcon, MountainsBasic } from "@/components/icons";

const NonActivities = () => {
  return (
    <div className="relative">
      <div className="image-container">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[80%] top-[90vh]">
          <div className="flex flex-row justify-center w-full border-t-[0.5px] border-solid border-default-50 gap-12">
            <div className="group flex flex-col items-center  pb-8 transition-all duration-300">
              <div className="w-full xl:px-28 h-[4px] bg-transparent group-hover:bg-default-100 transition-all duration-300" />
              <FishingIcon className="text-[#F0F0F0] mt-2" />
              <p className="mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Activities 1
              </p>
            </div>
            <div className="group flex flex-col items-center  pb-8 transition-all duration-300">
              <div className="w-full xl:px-28 h-[4px] bg-transparent group-hover:bg-default-100 transition-all duration-300" />
              <MountainsBasic className="text-[#F0F0F0] mt-2" />
              <p className="mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Activities 1
              </p>
            </div>
            <div className="group flex flex-col items-center  pb-8 transition-all duration-300">
              <div className="w-full xl:px-28 h-[4px] bg-transparent group-hover:bg-default-100 transition-all duration-300" />
              <CrossHair className="text-[#F0F0F0] mt-2" />
              <p className="mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Activities 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NonActivities };
