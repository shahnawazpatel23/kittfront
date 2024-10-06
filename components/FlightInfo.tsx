// import Image from "next/image";
// import React, { useState } from "react";
// import { FaPlane } from "react-icons/fa";
// import TicketDetail from "./TicketDetail";

// interface FlightInfoProps {
//   airline: string;
//   airlineLogo: string;
//   flightNumber: string;
//   departureTime: string;
//   arrivalTime: string;
//   duration: string;
//   stops: string;
//   price: string;
//   additionalInfo?: string;
//   start: string;
//   stop: string;
// }

// const FlightInfo: React.FC<FlightInfoProps> = ({
//   airline,
//   airlineLogo,
//   flightNumber,
//   departureTime,
//   arrivalTime,
//   duration,
//   stops,
//   price,
//   additionalInfo,
//   start,
//   stop,
// }) => {
//     const [ticket,setTicket] =useState(false);
//   return (
//     <div className="w-full justify-between flex  border rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100">

//       <div className="w-full flex flex-col gap-4 p-6 border-r">
//         <div className=" flex justify-between items-end ">
//           <div className="flex gap-5 items-center">
//             <Image src={'/image1.png'} alt="airline" width={42} height={42} />
//             <div className="">
//               <div className="text-gray-600 text-sm">
//                 {airline} • {flightNumber}
//               </div>
//               <div className="text-black text-lg">
//                 {departureTime} - {arrivalTime}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <div className="">
//               <div className="text-gray-600 text-sm">
//                 {start} - {stop}
//               </div>
//               <div className="text-black text-lg">{duration}</div>
//             </div>
//           </div>

//           <div className="flex items-end justify-center text-lg ">
//             {stops}
//           </div>

//         </div>
//         <div className=" flex justify-between items-end ">
//           <div className="flex gap-5 items-center">
//           <Image src={'/image1.png'} alt="airline" width={42} height={42} />
//             <div className="">
//               <div className="text-gray-600 text-sm">
//                 {airline} • {flightNumber}
//               </div>
//               <div className="text-black text-lg">
//                 {departureTime} - {arrivalTime}
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <div className="">
//               <div className="text-gray-600 text-sm">
//                 {start} - {stop}
//               </div>
//               <div className="text-black text-lg">{duration}</div>
//             </div>
//           </div>

//           <div className="flex items-end justify-center text-lg ">
//             {stops}
//           </div>

//         </div>
//       </div>
//       <div className="flex flex-col items-start justify-end p-3 pl-5 space-y-2">
//         <span className="text-sm text-gray-500 ">from</span>
//         <div className="w-fit whitespace-nowrap">{price}</div>
//         <button onClick={()=>setTicket(true)} className="w-full text-white text-lg bg-[#003E39] rounded-md px-4 py-2">Select</button>
//       </div>

//     </div>
//   );
// };

// export default FlightInfo;

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TicketDetail from "./TicketDetail";
import { FaBackward } from "react-icons/fa";
import { FaArrowLeft, FaBackwardStep } from "react-icons/fa6";

interface FlightInfoProps {
  airline: string;
  airlineLogo: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  price: string;
  additionalInfo?: string;
  start: string;
  stop: string;
}

const FlightInfo: React.FC<FlightInfoProps> = ({
  airline,
  airlineLogo,
  flightNumber,
  departureTime,
  arrivalTime,
  duration,
  stops,
  price,
  additionalInfo,
  start,
  stop,
}) => {
  const [ticket, setTicket] = useState(false);

  // Handle outside click to close the panel
  const handleOutsideClick = () => {
    if (ticket) {
      setTicket(false);
    }
  };

  return (
    <div className="relative w-full justify-between flex border rounded-lg p-4 bg-white shadow-sm hover:bg-gray-100">
      {/* Flight Information */}
      <div className="w-full flex flex-col gap-4 p-6 border-r">
        <div className="flex justify-between items-end">
          <div className="flex gap-5 items-center">
            <Image src={"/image1.png"} alt="airline" width={42} height={42} />
            <div className="">
              <div className="text-gray-600 text-sm">
                {airline} • {flightNumber}
              </div>
              <div className="text-black text-lg">
                {departureTime} - {arrivalTime}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="">
              <div className="text-gray-600 text-sm">
                {start} - {stop}
              </div>
              <div className="text-black text-lg">{duration}</div>
            </div>
          </div>

          <div className="flex items-end justify-center text-lg">{stops}</div>
        </div>

        
      </div>

  
      <div className="flex flex-col items-start justify-end p-3 pl-5 space-y-2">
        <span className="text-sm text-gray-500">from</span>
        <div className="w-fit whitespace-nowrap">{price}</div>
        <button
          onClick={() => setTicket(true)}
          className="w-full text-white text-lg bg-[#003E39] rounded-md px-4 py-2"
        >
          Select
        </button>
      </div>

     
      <AnimatePresence>
  {ticket && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-4 right-4 rounded-md bottom-4 w-1/2 h-full bg-white shadow-lg z-50"
    >
      {/* Container for button and TicketDetail */}
      <div className="flex flex-col items-start p-4 space-y-4">
        <button
          onClick={() => setTicket(false)}
          className="bg-gray-300 rounded-full p-2"
        >
          <FaArrowLeft />
        </button>

        {/* Align the TicketDetail below the button */}
        <TicketDetail />
      </div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Overlay for closing when clicking outside */}
      {ticket && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default FlightInfo;
