import React from "react";
import Navbar from "../navbar/Navbar";
// import Menubar from "../Menubar";
import Menubar from "../menubar/Menubar";

const Header = () => {
  return (
    <div className="bg-slate-100 md:flex md:flex-col px-1 py-1 md:px-5 md:py-8 gap-2 rounded-xl">
      <div>
        <Navbar />
      </div>
      <div className="hidden md:block w-full">
        <Menubar />
      </div>
    </div>
  );
};

export default Header;
