import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateuser } from "../../Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { updateallusers, updatefounduser } from "../../Slices/UserSlice";
import { FollowUser } from "../../constants/UserHelper";
import FollowLoader from "../loader/FollowLoader";
import FollowBarItem from "./FollowBarItem";

const FollowBar = () => {
  const [followuser, setFollowUser] = useState();
  const { allusersdata } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.post);
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const FollowUnfollowFunc = async (id, token) => {
    const res = await FollowUser(id, token);
    dispatch(updatefounduser(res?.data?.user));
    dispatch(updateallusers(res?.data?.followUser));
    dispatch(updateuser(res?.data?.user));
  };

  useEffect(() => {
    setFollowUser(
      allusersdata
        ?.filter((user) => user?.username !== foundUser?.username)
        .filter(
          (user2) =>
            !foundUser?.following.find(
              (user) => user?.username === user2?.username
            )
        )
    );
  }, [allusersdata, foundUser]);

  return (
    <div className="w-full  h-4/5 p-3">
      <p className="font-bold tracking-wide md:text-2xl mb-2 border-b-2 border-gray-400 p-1">
        Who to follow
      </p>
      <div>
        {loading ? (
          <FollowLoader />
        ) : followuser?.length <= 0 ? (
          <div
            className="w-full h-[500px] flex justify-center items-center"
            key={"rate"}
          >
            <p className="text-gray-600 md:text-lg font-semibold">
              No More Suggestions
            </p>
          </div>
        ) : (
          followuser?.map((user) => {
            return (
              <FollowBarItem
                user={user}
                encodedToken={encodedToken}
                FollowUnfollowFunc={FollowUnfollowFunc}
                key={user?._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default FollowBar;
