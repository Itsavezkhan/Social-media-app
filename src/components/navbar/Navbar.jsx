import React from "react";
import Logo from "../navbar/Ourlogo.png";
import Search from "../search/Search";


const Navbar = () => {

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex  gap-2 items-center">
          <img src={Logo} className="w-8" />
          <h3 className="text-blue-800 font-semibold lg:text-xl tracking-wider">
            CONNEXA
          </h3>
        </div>
        <div className="md:hidden hide-scrollbar ">
          <Search />
        </div>
      </div>
    </>
  );
};

export default Navbar;
