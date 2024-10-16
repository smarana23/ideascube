import React, { useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { GETCARDS } from "./content";
import { SearchBar } from "./SearchBar";

const Getstarted = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
    </>
  );
};

export default Getstarted;
