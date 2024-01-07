import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserPostCreator, updateallposts } from "../Slices/PostSlice";
import { getallusers } from "../Slices/UserSlice";
import { getAllposts } from "../Slices/PostSlice";
import { getAllPostsCreater } from "../Slices/PostSlice";
import { getAuthUserService } from "../Slices/AuthSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Homeswitch from "../components/homeswitch/HomeSwitch";
import SinglePost from "../components/singlepost/SinglePost";
import { getAllUsersCreator } from "../Slices/UserSlice";
import Loader from "../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [postquery, setPostQuery] = useState("");
  const [feeddata, setFeedData] = useState([]);
  const [postdataobj, setPostDataObj] = useState({
    bookamrk: [],
    comments: [],
  });

  const dispatch = useDispatch();
  const { loading, allposts, homeswitch } = useSelector((state) => state.post);
  const { allusersdata } = useSelector((state) => state.user);
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );

  useEffect(() => {
    setFeedData(
      allposts
        ?.filter(
          (post) =>
            post?.username === foundUser.username ||
            foundUser?.following?.find(
              (ele) => ele?.username === post?.username
            )
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }, [foundUser, allposts]);

  useEffect(() => {
    dispatch(getAllPostsCreater());
    dispatch(getAllUsersCreator());
  }, []);

  const OnsignUp = async () => {
    const res = await axios.post(`/api/auth/signup`, {
      firstName: "Rutvik",
      lastName: "Umak",
      email: "rutvikumak@gmail.com",
      password: "rutvik123",
    });
    console.log(res);
    dispatch(getAuthUserService(res?.data));
  };

  const Aaduserpost = (postData, token) => {
    setPostQuery("");
    dispatch(AddUserPostCreator({ postData, token }));
    toast.success("Post Added", {
      toastId: "success",
    });
  };

  const TrendingData = allposts?.filter(
    (post) => post.username !== foundUser.username
  );

  const ourhomedata = homeswitch === "False" ? feeddata : TrendingData;

  return (
    <>
      <div className="flex flex-col bg-slate-300 p-1 h-full md:h-auto w-full">
        <div className="flex flex-row justify-between px-1 py-2 items-center gap-1 bg-white rounded-lg mt-1 md:mt-2">
          <AccountCircleIcon />
          <input
            type="text"
            placeholder="What's happening ?..."
            value={postquery}
            onChange={(e) => setPostQuery(e.target.value)}
            className="rounded-lg px-3 py-1 w-full h-20"
          />
          <div>
            <AddCircleIcon
              className={`cursor-pointer  hover:text-blue-600 ${
                postquery?.length < 1 && "hover:cursor-not-allowed"
              }`}
              onClick={() => {
                postquery?.length > 0 &&
                  Aaduserpost(
                    { ...postdataobj, content: postquery },
                    encodedToken
                  );
              }}
              disabled={postquery?.length < 1 ? true : false}
            />
          </div>
        </div>
        <Homeswitch />
        <div>
          {loading ? (
            <Loader />
          ) : (
            ourhomedata?.map((post) => (
              <SinglePost
                post={post}
                key={post._id}
                postquery={postquery}
                postdataobj={postdataobj}
              />
            ))
          )}
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default Home;
