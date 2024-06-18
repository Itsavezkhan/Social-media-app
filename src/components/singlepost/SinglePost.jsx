import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendIcon from "@mui/icons-material/Send";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AddCommentCreator,
  DeleteUserPostCreator,
  EditUserPostCreator,
  MarkunmarkPostCreator,
} from "../../Slices/PostSlice";
import { useDispatch } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import Comment from "../comment/Comment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { LikeDislikePostsCreator } from "../../Slices/PostSlice";
import { useRef } from "react";

const SinglePost = ({ post}) => { 
  // , postquery, postdataobj 
  // taking them as props 
  const { allusersdata } = useSelector((state) => state.user);
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );
  const { myBookmarks } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [editmodal, setEditModal] = useState(false);
  const [view, setView] = useState(2);
  const [iseditpost, setIsEditPost] = useState(false);
  const [initialpost, setInitialPost] = useState({
    content: post?.content,
  });
  const { likes } = post;
  const { likeCount } = likes;

  const editref = useRef();

  useEffect(()=> {
    document.addEventListener('click', HandleClick)
    // changed ,to.
  },[])

  const HandleClick = (e) => {
    if(!editref?.current?.contains(e.target)){
      setEditModal(false)
    }
  }

  const userinfo =
    allusersdata &&
    allusersdata?.find((user) => user?.username === post?.username);

  const navigate = useNavigate();

  const { _id } = post;

  const { comments, createdAt } = post;

  const myDate = new Date(createdAt);

  const [month, day, year, minutes, hours] = [
    myDate.getMonth(),
    myDate.getDay(),
    myDate.getFullYear(),
    myDate.getMinutes(),
    myDate.getHours(),
  ];

  const isBookMarked = myBookmarks?.some((post2) => post2?._id === _id);

  const isUser = post?.username === foundUser?.username;

  const LikeDislikeFunc = async (postid, token) => {
    dispatch(LikeDislikePostsCreator({ postid, token, likeCount }));
  };
  const MarkunmarkFunc = async (postid, token, isBookMarked) => {
    dispatch(MarkunmarkPostCreator({ postid, token, isBookMarked }));
  };

  const addcomment = async (postid, commentData, token) => {
    dispatch(AddCommentCreator({ postid, commentData, token }));
    setComment("");
    view > 2 && setView((prev) => prev + 1);
    toast.success("Comment Added", {
      toastId: "success",
    });
  };

  const DeleteUserPost = async (postid, token) => {
    dispatch(DeleteUserPostCreator({ postid, token }));
    toast.success("Post Deleted", {
      toastId: "success",
    });
  };

  const EditUserPost = async (postid, postData, token) => {
    dispatch(EditUserPostCreator({ postid, postData, token }));
    setEditModal(false);
    setIsEditPost(false);
    toast.success("Post Edited", {
      toastId: "success",
    });
  };

  return (
    <>
      <div className=" bg-white rounded-xl w-full mb-3 p-3">
        <div className="w-full flex p-2 justify-between">
          <div className="flex">
            <img
              src={userinfo?.profilePic}
              alt={userinfo?.userHandler}
              className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full sm:h-8 sm:w-8"
              onClick={() => navigate(`/user/${userinfo._id}`)}
            />
            <div className="w-3/4 flex flex-col mb-2 ">
              <div
                className="flex items-center"
                onClick={() => navigate(`/user/${userinfo._id}`)}
              >
                <p className="text-md md:text-lg font-semibold cursor-pointer ml-2 sm:text-sm">
                  {userinfo?.firstName}
                </p>
                <p className="text-md md:text-lg font-semibold mr-1 cursor-pointer ml-2 sm:text-sm">
                  {userinfo?.lastName}
                </p>
                <p className="text-sm text-gray-400 cursor-pointer">
                  @{userinfo?.userHandler}
                </p>
              </div>

              <p className="ml-2 text-sm text-gray-400 sm:text-xs">
                {`${month + 1}/${day}/${year} ${minutes}:${hours}`}
              </p>
            </div>
          </div>
          {isUser && (
            <>
              <div
                className="hover:bg-gray-300 flex items-center justify-center rounded-full w-7 h-7 relative"
                onClick={(e) => {
                  setEditModal(!editmodal);
                  //Alwasy will be false if console editmodal cuz no reference
                  // if (!editref.current.contains(e.target)){
                  //   setEditModal(false);
                  // }
                  // console.log(e)
                }}
              >
                <MoreVertIcon
                 ref={editref}
                //  used for reference if not then more icon doesnt work
                className="hover:text-blue-600" />

                {editmodal && (
                  <div className="bg-gray-300 absolute top-10 flex flex-col p-1 right-1 rounded-lg">
                    <p
                      className="flex p-1 hover:cursor-pointer hover:bg-white rounded-lg hover:text-blue-600 "
                      onClick={() => setIsEditPost(true)}
                    >
                      <EditIcon /> Edit
                    </p>
                    <p
                      className="flex p-1 hover:cursor-pointer hover:bg-white rounded-lg hover:text-blue-600 "
                      onClick={() => DeleteUserPost(post._id, encodedToken)}
                    >
                      <DeleteIcon /> Delete
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="w-full">
          {iseditpost ? (
            <>
              <div className="flex gap-2 w-full">
                <input
                  type="text"
                  defaultValue={initialpost?.content}
                  onChange={(e) =>
                    setInitialPost({
                      content: e.target.value,
                    })
                  }
                  placeholder="Please write post"
                  className="bg-gray-200 md:p-3 px-4 md:px-5 md:w-10/12 h-8 outline-none rounded-full"
                />
                <div className="flex flex-row">
                  <span
                    onClick={() => setIsEditPost(false)}
                    className="hover:cursor-pointer hover:bg-gray-300 py-1 px-1 rounded-full flex justify-center items-center"
                  >
                    <DeleteIcon />
                  </span>
                  <span
                    onClick={() =>
                      EditUserPost(post?._id, initialpost, encodedToken)
                    }
                    className="cursor-pointer hover:bg-gray-300 py-1 px-1 rounded-full bg-white flex justify-center items-center"
                  >
                    <DoneIcon />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <p>{post?.content}</p>
          )}
          <div className="flex mt-2 gap-4">
            <div
              className="flex items-center"
              onClick={() => LikeDislikeFunc(post._id, encodedToken)}
            >
              <span className="hover:bg-red-100 rounded-full p-1 flex items-center justify-center hover:cursor-pointer">
                {likeCount === 0 ? (
                  <FavoriteBorderIcon />
                ) : (
                  <FavoriteIcon className="text-red-600" />
                )}
              </span>
              <span className="ml-1">
                {likeCount === 0
                  ? "Like"
                  : `${likeCount} ${likeCount === 1 ? "Like" : "Likes"}`}
              </span>
            </div>
            <div
              className="flex items-center ml-1"
              onClick={() =>
                MarkunmarkFunc(post?._id, encodedToken, isBookMarked)
              }
            >
              <span className="hover:bg-green-100 rounded-full p-1 flex items-center justify-center hover:cursor-pointer">
                {isBookMarked ? (
                  <BookmarkIcon className="text-green-600" />
                ) : (
                  <BookmarkBorderIcon />
                )}
              </span>
              <span className="ml-1">
                {isBookMarked ? "Bookmarked" : "Bookmark"}
              </span>
            </div>
          </div>

          <div className=" flex gap-3 my-3 mt-6 sm:mt-4 items-center">
            <img
              src={userinfo?.profilePic}
              className="h-8 w-8 rounded-full  cursor-pointer object-cover sm:h-6 sm:w-6"
            />
            <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-full px-2 ">
              <input
                className="grow focus:outline-none sm:text-sm px-3"
                placeholder="Write your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className={`text-sm text-blue-500 px-2 rounded-full cursor-pointer font-semibold hover:text-blue-600 ${
                  comment.length < 1 &&"hover:cursor-not-allowed"
                }`}
                disabled={comment?.length < 1 ? true : false}
                onClick={() => addcomment(post._id, comment, encodedToken)}
              >
                <span className="hover:bg-gray-300 rounded-full p-1 flex items-center justify-center">
                  <SendIcon/>
                </span>
              </button>
            </div>
          </div>

          <div>
            {comments.length > 2 && (
              <>
                <p
                  onClick={() => setView(view <= 2 ? comments.length : 2)}
                  className="text-sm underline text-stone-500 cursor-pointer "
                >
                  {view <= 2 ? "View All comments" : "Hide Comments"}
                </p>
              </>
            )}
            <div className="mt-2">
              {comments
                .slice(0, view)
                .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                .map((comment) => (
                  <Comment
                    comment={comment}
                    postid={post._id}
                    key={comment._id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default SinglePost;
