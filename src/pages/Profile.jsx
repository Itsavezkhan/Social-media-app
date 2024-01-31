import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "../components/singlepost/SinglePost";
import { UnfollowUser, FollowUser } from "../constants/UserHelper";
import { useDispatch } from "react-redux";
import { updatefounduser, updateallusers } from "../Slices/UserSlice";
import { updateuser } from "../Slices/AuthSlice";
import Modal from "../components/modal/Modal";

const Profile = () => {
  const profileid = useParams();
  const [profiledata, setProfileData] = useState({});
  const { allusersdata } = useSelector((state) => state.user);
  const { allposts } = useSelector((state) => state.post);
  const [profilemodal, setProfileModal] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { followers, following } = profiledata;

  //STATE
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );
  const isFollow = profiledata?.followers?.some(
    (follow) => follow?._id === foundUser?._id
  );
  //VARIABLES
  const isUser = profiledata?.username === foundUser?.username;

  const count = allposts?.filter(
    (post) => post?.username === profiledata?.username
  ).length;

  const userposts = allposts?.filter(
    (post) => post?.username === profiledata?.username
  );

  const FollowUnfollowUser = async (id, token) => {
    const res = isFollow
      ? await UnfollowUser(id, token)
      : await FollowUser(id, token);
    dispatch(updatefounduser(res?.data?.user));
    dispatch(updateallusers(res?.data?.followUser));
    dispatch(updateuser(res?.data?.user));
  };

  useEffect(() => {
    setLoading(true);
    setProfileData(
      allusersdata?.find((user) => user?._id === profileid?.profile)
    );
    setLoading(false);
  }, [profiledata, profileid, allusersdata]);

  return (
    <>
      <div className="pt-2 px-1">
        {profilemodal ? (
          <Modal
            profilemodal={profilemodal}
            setProfileModal={setProfileModal}
          />
        ) : (
          <div className="">
            <div className="bg-white p-4 flex rounded-lg justify-between">
              <div className="flex">
                <img
                  src={profiledata?.profilePic}
                  className="h-10 w-10 md:h-20 md:w-20 rounded-full object-cover"
                />
                <div className="ml-2 ">
                  <div className="flex gap-2">
                    <p className="text-md md:text-xl font-bold cursor-pointer">
                      {profiledata?.firstName}
                    </p>
                    <p className="text-md md:text-xl font-bold mr-2 cursor-pointer">
                      {profiledata?.lastName}
                    </p>
                    {foundUser?.username !== profiledata?.username && (
                      <button
                        onClick={() =>
                          FollowUnfollowUser(profiledata._id, encodedToken)
                        }
                        className="cursor-pointer text-white bg-blue-400 rounded-full py-1 px-2 hover:opacity-80 ml-2 hover:bg-blue-600"
                      >
                        {isFollow ? "Unfollow" : "Follow"}
                      </button>
                    )}
                    {isUser && (
                      <button
                        className="px-2 py-1 text-black border border-gray-400 rounded-full hover:bg-gray-200 ml-20 font-semibold"
                        onClick={() => setProfileModal(!profilemodal)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 cursor-pointer">
                    @{profiledata?.userHandler}
                  </p>
                  <p className="text-gray-500 font-semibold mb-2 mt-2">
                    {profiledata?.bio}
                  </p>
                  <div className="flex text-gray-500 font-semibold  mb-2 sm:gap-0 sm:justify-between">
                    <p>{count} Posts</p>
                    <p className="ml-3">{followers?.length} Followers</p>
                    <p className="ml-3">{following?.length} Following</p>
                  </div>
                  <a
                    href={profiledata?.link}
                    className="text-blue-500 hover:underline decoration-1"
                    target="_blank"
                  >
                    {profiledata?.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-2">
          {userposts?.map((post) => (
            <SinglePost post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
