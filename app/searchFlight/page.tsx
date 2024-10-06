
"use client";
import React, { useEffect, useState, Suspense } from "react";
import FlightSearchResults from "@/components/FlightResults";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaCheckCircle, FaSearch, FaTimes } from "react-icons/fa";

import UpperComponent from "@/components/UpperComponent";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const page = () => {

  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [loadingz, setLoadingz] = useState(false);
  const [click, setClick] = useState(false); // Manage UpperComponent visibility

  const navigate = useRouter();

  const from = searchParams.get("from")|| "DWS";
  const to = searchParams.get("to")|| "JBP";
  const departure = searchParams.get("departure") || "23/11/2023";
  const returnDate = searchParams.get("returnDate")|| "30/11/22023";
  // console.log("all the details are ", from, to, departure, returnDate);

  useEffect(() => {
    setLoading(true);
    setLoadingz(true);
    const timer1 = setTimeout(() => {
      setLoadingz(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleComponenentClick = () => {
    if (click) {
      setClick(false);
    }
  };

  // Framer Motion animation variants for UpperComponent sliding in/out
  const upperComponentVariants = {
    hidden: { y: "-100%", opacity: 0 }, // Off-screen, above the view
    visible: { y: 20, opacity: 1 }, // In the view
    exit: { y: "-100%", opacity: 0 }, // Exit with slide-up animation
  };

  return (
    <div className="max-w-5xl h-screen p-8 mx-auto">
      <div onClick={handleComponenentClick} className="w-full flex flex-col">
        <div className="flex flex-col gap-4">
          <div className=" flex justify-between items-center h-8 p-8 relative">
            {click && (
              <motion.div
                className="absolute w-full h-1/4 -top-10 left-0 z-10"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={upperComponentVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust speed and easing
              >
                <UpperComponent />
              </motion.div>
            )}
            <div
              onClick={() => setClick(true)}
              className="w-1/2 flex justify-between items-center bg-white rounded-full px-5 p-3 border border-gray-300 outline-none"
            >
              <div>{from}</div>
              <div className="w-[2px] h-full bg-gray-400"></div>
              <div>{to}</div>
              <div className="w-[2px] h-full bg-gray-400"></div>
              <div>{departure}</div>
              <div className="w-[2px] h-full bg-gray-400"></div>
              <div>{returnDate}</div>
              <div className="w-[2px] h-full bg-gray-400"></div>
              <div className="flex items-center justify-center w-8 h-8 p-2 bg-gray-200 rounded-full">
                <FaSearch className="text-gray-600 h-5 w-5 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 p-2 bg-gray-200 rounded-full">
              <FaTimes
                onClick={() => navigate.push("/")}
                className="cursor-pointer text-gray-600 h-5 w-5"
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-300 "></div>
          {/* needs to something here */}
        </div>
        {loading ? (
          <div className="w-full h-[calc(100vh-32px)] px-8 flex flex-col">
            <div>
              <div className="relative w-full h-1 bg-gray-200 overflow-hidden">
                <div className="loading-line"></div>
              </div>
            </div>
            <div className="flex items-center justify-center my-auto">
              <div className="flex flex-col w-1/3 py-12 items-center justify-center bg-gray-50 shadow-lg p-8 rounded-md gap-3">
                <Image
                  src={"/airplane.gif"}
                  width={150}
                  height={150}
                  alt="airplane"
                />
                <div className="flex justify-between items-center ">
                  {loadingz ? (
                    <div className="w-10 h-10 border-4 border-t-transparent border-gray-400 rounded-full animate-spin m-3"></div>
                  ) : (
                    <div className="flex items-center space-x-2 m-3">
                      <FaCheckCircle className="text-green-500 h-8 w-8" />
                    </div>
                  )}

                  <span>searching flights</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Suspense fallback={<FallbackComponent />}>
            <FlightSearchResults from={from} to={to} departure={departure} returnDate={returnDate} />
          </Suspense>

          </div>
        )}
      </div>
    </div>
  );
};

export default page;


const FallbackComponent = () => (
  <div className="loading-indicator">
    <Image src={"/airplane.gif"} width={150} height={150} alt="Loading" />
    <p>Loading search parameters...</p>
  </div>
);