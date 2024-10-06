import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const TicketDetail = () => {
  return (
    <div className="w-full min-h-screen rounded-sm ">
      <h2 className="text-xl">Flight Details</h2>
      <div className="w-full h-[1px] bg-gray-400 outline-none my-8"></div>

      <div className="flex flex-col pr-2 gap-3">
        <div className="flex gap-5">
          <div className="border rounded-full bg-none h-5 w-5 border-gray-800 "></div>
          <div className="text-sm text-gray-500">Sat 28 sept</div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-7">
            <div className="border bg-none h-15 w-[1px] border-gray-800 ml-2"></div>
            <div className="text-md text-black ">DXB airport</div>
          </div>
          <div className="flex gap-3 items-start justify-between ">
            <Image
              src={"/image1.png"}
              alt="image1"
              className="border mt-1"
              width={35}
              height={28}
            />
            <div className="flex flex-col text-sm ">
              <span>Saudi Arabian Airlines • SV553</span>
              <span>Economy • A330</span>
              <span>Flight Time 3h 45m</span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="border rounded-full bg-none h-5 w-5 border-gray-800 "></div>
          <div className="text-sm text-gray-500">Sat 28 sept</div>
        </div>
        <div className="flex relative">
            <span className="absolute top-1/2 left-1/4 flex items-center gap-3"><FaRegClock/><span>Layout 2h 25m</span>  </span>
          <div className="flex gap-7">
            <div className="border bg-none h-32 w-[1px] border-dashed border-gray-800 ml-2"></div>
            <div className="text-md text-black ">DXB airport</div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="border rounded-full bg-none h-5 w-5 border-gray-800 "></div>
          <div className="text-sm text-gray-500">Sat 28 sept</div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-7">
            <div className="border bg-none h-15 w-[1px] border-gray-800 ml-2"></div>
            <div className="text-md text-black ">DXB airport</div>
          </div>
          <div className=" flex gap-3 items-start justify-between ">
            <Image
              src={"/image1.png"}
              alt="image1"
              className="border mt-1"
              width={35}
              height={28}
              
            />
            <div className="flex flex-col text-sm ">
              <span>Saudi Arabian Airlines • SV553</span>
              <span>Economy • A330</span>
              <span>Flight Time 3h 45m</span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="border rounded-full bg-none h-5 w-5 border-gray-800 "></div>
          <div className="text-sm text-gray-500 ">Sat 28 sept</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TicketDetail;
