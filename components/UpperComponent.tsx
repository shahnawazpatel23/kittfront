"use client";

import React, { useState } from "react";
import { FaExchangeAlt, FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UpperComponent = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      from,
      to,
      departure,
      returnDate,
    }).toString();
    navigate.push(`/searchFlight?${params}`);
  };

  const airports = [
    {
      name: "Indira Gandhi International Airport",
      code: "DEL",
      city: "New Delhi",
      country: "India",
    },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      code: "BOM",
      city: "Mumbai",
      country: "India",
    },
    {
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: "New York",
      country: "United States",
    },
    {
      name: "Dubai International Airport",
      code: "DXB",
      city: "Dubai",
      country: "United Arab Emirates",
    },
    {
      name: "Heathrow Airport",
      code: "LHR",
      city: "London",
      country: "United Kingdom",
    },
    {
      name: "Singapore Changi Airport",
      code: "SIN",
      city: "Singapore",
      country: "Singapore",
    },
    {
      name: "Los Angeles International Airport",
      code: "LAX",
      city: "Los Angeles",
      country: "United States",
    },
    {
      name: "Beijing Capital International Airport",
      code: "PEK",
      city: "Beijing",
      country: "China",
    },
    {
      name: "Sydney Kingsford Smith International Airport",
      code: "SYD",
      city: "Sydney",
      country: "Australia",
    },
    {
      name: "Tokyo Haneda Airport",
      code: "HND",
      city: "Tokyo",
      country: "Japan",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl w-full bg-white p-5 rounded-lg shadow-md border">
        <div className="mb-5 flex justify-start">
          <Button className="flex items-center px-6 py-3 bold bg-gray-200 text-black">
            Flights
          </Button>
        </div>

        <div className="w-full flex space-x-4 justify-center items-center">
          {/* From Dropdown */}
          <div className="flex space-x-3">
            <div className="w-64">
              {" "}
              {/* Increased width to 16rem (64 tailwind class) */}
              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger className="w-full flex gap-1 py-7">
                  <Image src={"/mark.png"} height={20} width={20} alt="mark" />
                  <SelectValue placeholder="Where from?" />
                </SelectTrigger>
                <SelectContent className="w-[243px] h-[270px] overflow-x-hidden ">
                  {" "}
                  {/* Ensuring dropdown matches input width */}
                  {airports.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      <div className="flex gap-2 justify-end">
                        <div className="flex flex-col gap-1">
                          <span className="">{airport.city}</span>
                          <span className="text-sm text-gray-600">{`${airport.country}`}</span>
                        </div>
                        <span className="font-medium text-gray-500 ">
                          {airport.code}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSwap}
                className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <FaExchangeAlt />
              </Button>
            </div>

            {/* To Dropdown */}
            <div className="w-64">
              {" "}
              {/* Increased width to match From input */}
              <Select value={to} onValueChange={setTo}>
                <SelectTrigger className="w-full flex gap-1 py-7">
                  <Image src={"/mark.png"} height={20} width={20} alt="mark" />
                  <SelectValue placeholder="Where to?" />
                </SelectTrigger>
                <SelectContent className="w-[243px] h-[270px] overflow-x-hidden ">
                  {" "}
                  {/* Ensuring dropdown matches input width */}
                  {airports.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      <div className="flex gap-2 justify-end">
                        <div className="flex flex-col gap-1">
                          <span className="">{airport.city}</span>
                          <span className="text-sm text-gray-600">{`${airport.country}`}</span>
                        </div>
                        <span className="font-medium text-gray-500 ">
                          {airport.code}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex space-x-3">
            {/* Departure Date */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Image
                  src={"/calendar.png"}
                  height={20}
                  width={20}
                  alt="calendar"
                />
              </div>

              <Input
                type={departure ? "date" : "text"}
                value={departure}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !departure && (e.target.type = "text")}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Departure"
                className="w-44 pl-10 py-7 placeholder:text-black "
              />
            </div>

            {/* Return Date */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                <Image
                  src={"/calendar.png"}
                  height={20}
                  width={20}
                  alt="calendar"
                />
              </div>

              <Input

                type={returnDate ? "date" : "text"}
                value={returnDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !returnDate && (e.target.type = "text")}
                onChange={(e) => setReturnDate(e.target.value)}
                placeholder="Return"
                className="w-44 pl-10 py-7 placeholder:text-black  "
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-end">
          <Button disabled={!from || !to || !departure || !returnDate}
            onClick={handleSearch}
            className="flex items-center w-1/4 px-6 py-3 bg-[#003E39] text-white hover:bg-[#002F2B]"
          >
            <FaSearch className="mr-2" />
            Search flights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpperComponent;
