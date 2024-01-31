import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  DeleteCommentCreator,
  EditCommentCreator,
} from "../../Slices/PostSlice";

const Comment = ({ comment, postid }) => {
  const { allusersdata } = useSelector((state) => state.user);
  const [editmodal, setEditModal] = useState(false);
  const [initialcomment, setInitialComment] = useState(comment.text);
  const [iseditcomment, setIsEditComment] = useState(false);
  const { encodedToken, foundUser } = useSelector(
    (state) => state.autho.authoobject
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Variables

  const userinfo = allusersdata?.find(
    (user) => user.username === comment.username
  );

  const isUser = userinfo?.username === foundUser?.username;

  //Handleres

  const DeleteUserComment = async (postid, commentid, token) => {
    dispatch(DeleteCommentCreator({ postid, commentid, token }));
    setEditModal(false);
  };

  const EditComment = async (postid, commentid, commentData, token) => {
    dispatch(EditCommentCreator({ postid, commentid, commentData, token }));
    setIsEditComment(false);
    setEditModal(false);
  };

  return (
    <>
      <div className="bg-slate-200 flex md:p-4 mb-2 items-center rounded-lg flex-row justify-between relative ">
        <div className="flex gap-3 w-full">
          <img
            src={userinfo?.profilePic}
            className="w-8 h-8 rounded-full object-cover"
            onClick={() => navigate(`/user/${userinfo._id}`)}
          />
          <div className="w-full">
            <p
              className="font-bold text-md hover:underline hover:cursor-pointer"
              onClick={() => navigate(`/user/${userinfo._id}`)}
            >{`${userinfo?.firstName} ${userinfo?.lastName}`}</p>
            {iseditcomment ? (
              <>
                <div className="flex w-full ">
                  <input
                    type="text"
                    value={initialcomment}
                    onChange={(e) => setInitialComment(e.target.value)}
                    placeholder="Enter your comment"
                    className="focus:outline-none border-b-2 border-gray-400 bg-slate px-3 w-full text-sm h-auto rounded-full"
                  />
                  <div className="flex gap-1 ">
                    <span
                      onClick={() => {
                        setIsEditComment(false);
                        setEditModal(false);
                      }}
                      className="hover:cursor-pointer hover:bg-gray-400 rounded-full"
                      
                    >
                      <DeleteIcon />
                    </span>
                    <span
                      onClick={() =>
                        EditComment(
                          postid,
                          comment._id,
                          initialcomment,
                          encodedToken
                        )
                      }
                      className="hover:cursor-pointer hover:bg-gray-400 rounded-full"
                    >
                      <DoneIcon/>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-sm">{comment.text}</p>
            )}
          </div>
        </div>
        {isUser && (
          <div onClick={() => setEditModal(!editmodal)} className="hover:bg-gray-300 rounded-full">
            <MoreVertIcon className="hover:text-blue-600" />
          </div>
        )}

        {editmodal && (
          <div
            className="bg-gray-300 absolute top-1 flex flex-row p-1 right-6 md:right-10 rounded-lg "
          >
            <p
              className="flex hover:cursor-pointer hover:bg-white rounded-lg text-sm p-1"
              onClick={() => {
                setIsEditComment(true);
                setEditModal(false);
              }}
            >
              <EditIcon />
            </p>
            <p
              className="flex hover:cursor-pointer hover:bg-white rounded-lg text-sm p-1"
              onClick={() =>
                DeleteUserComment(postid, comment._id, encodedToken)
              }
            >
              <DeleteIcon />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
