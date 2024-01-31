import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footerr";
import Search from "../search/Search";

export const RootElement = () => {
  return (
    <div className="flex w-full flex-col md:flex-row px-2 md:px-0 lg:px-10 xl:px-20 py-1 md:py-4 bg-gray-300 h-screen overflow-hidden hide-scrollbar justify-between">
      <div className="md:w-1/4 md:py-2 md:px-1">
        <Header />
      </div>

      <div className="flex flex-col overflow-y-auto hide-scrollbar md:w-1/2 flex-1">
        <div className="hidden md:block md:sticky top-0 left-0 z-50 hide-scrollbar px-1 py-2 bg-gray-300">
          <Search />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <div className="md:w-1/4 py-2 px-1">
        <Footer />
      </div>
    </div>
  );
};
