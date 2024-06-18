import React from "react";
import { useNavigate } from "react-router-dom";

const FollowBarItem = ({user, BetterFollow, encodedToken}) => {
    const navigate = useNavigate();
    
  return (
    <>
      <div
        className=" p-2 flex border hover:bg-gray-200 items-center justify-around h-auto"
      >
        <div className="flex justify-around w-full items-center">
          <div className="flex w-full">
            <img
              src={user?.profilePic}
              alt={user?.username}
              className="h-8 xl:h-12 w-8 xl:w-12 object-cover rounded-full self-center cursor-pointer "
              onClick={() => navigate(`/user/${user?._id}`)}
            />
            <div className="ml-2 flex flex-col xl:flex-row justify-between w-full  xl:items-center ">
              <div className="flex flex-col xl:w-3/5 ">
                <p className="lg:font-semibold cursor-pointer text-sm lg:text-md">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-400 ">@{user?.userHandler}</p>
              </div>
              <div className="xl:w-2/5 ">
                <button
                  className="cursor-pointer text-white bg-blue-400 rounded-full py-1 px-2 hover:bg-blue-500 ml-2 text-sm"
                  onClick={() => BetterFollow(user?._id, encodedToken)}
                >
                  + Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowBarItem;
