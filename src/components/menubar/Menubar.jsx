import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Menubar = () => {
  const { foundUser } = useSelector((state) => state.autho.authoobject);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full">
        <ul className="flex md:flex-col flex-row p-1">
          <div
            className="flex md:gap-1 items-center justify-center md:justify-start  md:mb-4 shadow-md hover:bg-slate-300 rounded-lg py-2 px-2 md:rounded-xl flex-1"
            onClick={() => navigate("/")}
          >
            <span>
              <HomeIcon />
            </span>
            <li className="hidden md:block text-sm lg:font-semibold">Home</li>
          </div>
          <div
            className="flex md:gap-1 items-center md:justify-start justify-center  md:mb-4 hover:bg-slate-300 rounded-lg p-2 md:rounded-xl flex-1 shadow-md"
            onClick={() => navigate("/explore")}
          >
            <span>
              <ExploreIcon />
            </span>

            <li className="hidden md:block text-sm lg:font-semibold">
              Explore
            </li>
          </div>
          <div
            className="flex md:gap-1 md:justify-start items-center justify-center md:mb-4 hover:bg-slate-300 rounded-lg p-2 md:rounded-xl flex-1 shadow-md"
            onClick={() => navigate("/like")}
          >
            <span>
              <ThumbUpIcon />
            </span>

            <li className="hidden md:block text-sm lg:font-semibold">Like</li>
          </div>
          <div
            className="flex md:gap-1 items-center md:justify-start justify-center  md:mb-4 hover:bg-slate-300 rounded-lg p-2 md:rounded-xl flex-1 shadow-md"
            onClick={() => navigate("/bookmark")}
          >
            <span>
              <BookmarkIcon />
            </span>

            <li className="hidden md:block text-sm lg:font-semibold">
              Bookmark
            </li>
          </div>
          <div
            className="flex md:gap-1 md:justify-start items-center justify-center  md:mb-4 hover:bg-slate-300 rounded-lg p-2 md:rounded-xl flex-1 shadow-md"
            onClick={() => navigate(`/user/${foundUser?._id}`)}
          >
            <span>
              <AccountCircleIcon />
            </span>

            <li className="hidden md:block text-sm lg:font-semibold">
              Profile
            </li>
          </div>
          <div
            className="flex md:gap-1 items-center md:justify-start justify-center hover:bg-slate-300 py-2 rounded-lg md:rounded-xl flex-1 shadow-md px-2"
            onClick={() => navigate("/login")}
          >
            <span>
              <LogoutIcon />
            </span>
            <li className="hidden md:block text-sm lg:font-semibold">Logout</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Menubar;
