import { HeartFilledIcon, ResetIcon } from "@radix-ui/react-icons";
import { Laptop2, Share, Share2, Tablet } from "lucide-react";
import React, { useState } from "react";
import { MdMobileFriendly } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const ResponsiveContainer = ({ children }) => {
  const [containerSize, setContainerSize] = useState({
    width: "100%",
    height: "100%",
  });
  const [active, setActive] = useState("pc");

  const handleResize = (size) => {
    setActive(size);
    switch (size) {
      case "mobile":
        setContainerSize({ width: "360px", height: "640px" });
        break;
      case "tablet":
        setContainerSize({ width: "768px", height: "1024px" });
        break;
      case "pc":
        setContainerSize({ width: "1024px", height: "768px" });
        break;
      default:
        setContainerSize({ width: "100%", height: "100%" });
    }
  };

  return (
    <div
      className="border dark:border-gray-800 dark:bg-gray-900 transition-all duration-300 mx-auto"
      style={{ width: containerSize.width, height: containerSize.height }}>
      <div className="p-4 lg:block hidden relative ">
        <div className="absolute hidden md:flex justify-center space-x-4 mb-6">
          <button
            className={`${
              active === "mobile" && "bg-violet-500"
            } px-3 py-2  rounded-md `}
            onClick={() => handleResize("mobile")}>
            <MdMobileFriendly size={30} />
          </button>
          <button
            className={`${
              active === "tablet" && "bg-violet-500"
            } px-3 py-2  rounded-md `}
            onClick={() => handleResize("tablet")}>
            <Tablet size={30} />
          </button>
          <button
            className={`${
              active === "pc" && "bg-violet-500"
            } hidden xl:block px-3 py-2  rounded-md `}
            onClick={() => handleResize("pc")}>
            <Laptop2 size={30} />
          </button>
          <button
            className="px-4 py-2   rounded-md"
            onClick={() => handleResize("default")}>
            <ResetIcon size={30} />
          </button>
        </div>
        <div className="h-full flex sm:flex-col justify-center items-center text-lg font-bold pt-20">
          {/* card */}
          <div className={`${ active === 'mobile' &&  "max-w-[350px] flex-col"} ${active === 'tablet' && 'max-w-[768px] flex-col items-center justify-between'} ${active === 'pc' && 'max-w-[1024px] flex-row'} transition-all duration-300 flex h-auto border shadow-lg`}>
            <img src="/real-estate/estate_3.png" alt="" className="w-[100%] mx-auto" />
            <div className="px-4">
              <h1 className="text-xl my-4  ">RentHome</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                1st-ranked real estate app in instantly shows you a map for
                rent. With our simple-to-use filters, you can find real estate
                listings that match your ...
              </p>
              <div className="flex justify-between">
                <div className="flex gap-4 my-5">
                  <Share2 className="size-6 cursor-pointer hover:text-violet-500" />
                <HeartFilledIcon className="size-6 cursor-pointer hover:text-red-500 duration-200" /> 
                </div>
                
                <button className="text-violet-500 hover:underline">More</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
