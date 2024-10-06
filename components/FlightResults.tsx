"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import FlightInfo from "./FlightInfo";

interface detailType {
  from?: string;
  to?: string;
  departure?: string;
  returnDate?: string;
}
export default function FlightSearchResults({
  from,
  to,
  departure,
  returnDate,
}: detailType) {


  return (
    <div className="h-full bg-white ">
      <div className="flex flex-col gap-5 mt-8 pb-5">
        <div className="flex justify-start">
          {" "}
          <h2 className="text-gray-500 text-lg">Showing 356 of 767 results</h2>
        </div>
        <FlightInfo
          airline="Emirates"
          airlineLogo="/image1.png" 
          flightNumber="AT 4334"
          departureTime="9:45 AM"
          arrivalTime="11:45 AM"
          duration="2h 10min"
          stops="Non stop"
          price="AED 2,456.90"
          start="CDG"
          stop="DXB"
        />
        <FlightInfo
          airline="Emirates"
          airlineLogo="/image1.png" 
          flightNumber="AT 4334"
          departureTime="9:45 AM"
          arrivalTime="11:45 AM"
          duration="2h 10min"
          stops="Non stop"
          price="AED 2,456.90"
          start="CDG"
          stop="DXB"
        />
        <FlightInfo
          airline="Emirates"
          airlineLogo="/image1.png" 
          flightNumber="AT 4334"
          departureTime="9:45 AM"
          arrivalTime="11:45 AM"
          duration="2h 10min"
          stops="Non stop"
          price="AED 2,456.90"
          start="CDG"
          stop="DXB"
        />
      </div>
    </div>
  );
}
