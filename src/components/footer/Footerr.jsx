import React from "react";
import FollowBar from "../followbar/FollowBar";
import Menubar from "../menubar/Menubar";

const Footer = () => {
  return (
    <>
      <div className="h-full bg-slate-100 rounded-xl">
        <div className="hidden md:block">
          <FollowBar />
        </div>
        <div className="block md:hidden">
          <Menubar />
        </div>
      </div>
    </>
  );
};

export default Footer;
