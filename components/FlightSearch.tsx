"use client";

import React, { useState } from "react";

import UpperComponent from "./UpperComponent";

const FlightSearch = () => {
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white ">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-6 ">Good afternoon, Brian</h2>
        <UpperComponent/>
      </div>
    </div>
  );
};

export default FlightSearch;
