import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { updatefounduser } from "../../Slices/UserSlice";
import { updateuser } from "../../Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { edituserdetailshelper } from "../../constants/PostHelper";

const Modal = ({ profilemodal, setProfileModal }) => {
  const [modalobj, setModalObj] = useState();
  const [loading, setLoading] = useState(false);
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setModalObj(foundUser);
  }, [foundUser]);

  const updateProfileImageHandler = async (image) => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pdhlqa88");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/dvuhawq1o/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setModalObj({ ...modalobj, profilePic: json.url });
      });
    setLoading(false);
  };

  const updateUserHandler = async (userData, token) => {
    const res = await edituserdetailshelper(userData, token);
    dispatch(updateuser(res?.data?.user));
    dispatch(updatefounduser(res?.data?.user));
    setProfileModal(false);
  };

  return (
    <>
      <div className="flex flex-col w-full h-60 rounded-lg bg-white p-2 justify-center items-center">
        <div className="bg-gray-300 w-full h-full rounded-lg flex gap-2 items-center ">
          <div className="relative ml-2">
            <img
              src={modalobj?.profilePic}
              className={`h-10 w-10 md:h-20 md:w-20 rounded-full object-cover ${
                profilemodal ? "opacity-70" : "opacity-0"
              }`}
            />
            <input
              className="opacity-0 w-20 cursor-pointer z-20 absolute top-3 md:top-6"
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              type="file"
              onChange={(e) => {
                updateProfileImageHandler(e.target.files[0])
              }}
            />
            <div className="absolute bottom-2 md:bottom-5 right-2 md:right-4 ">
              <AddIcon className="text-black" />
            </div>
          </div>
          <div className="bg-slate-200 p-3 flex flex-col gap-3 w-4/5 rounded-lg">
            <div className="flex w-full justify-between">
              <input
                value={modalobj?.firstName}
                className="text-sm px-2 outline-none w-1/2"
                onChange={(e) =>
                  setModalObj({ ...modalobj, firstName: e.target.value })
                }
              />
              <input
                value={modalobj?.lastName}
                className="text-sm px-2 outline-none w-1/2 ml-1"
                onChange={(e) =>
                  setModalObj({ ...modalobj, lastName: e.target.value })
                }
              />
            </div>
            <input
              value={modalobj?.bio}
              className="text-sm px-2 outline-none "
              onChange={(e) =>
                setModalObj({ ...modalobj, bio: e.target.value })
              }
            />
            <input
              value={modalobj?.link}
              className="text-sm px-2 outline-none"
              onChange={(e) =>
                setModalObj({ ...modalobj, link: e.target.value })
              }
            />
            <button
              onClick={() => updateUserHandler(modalobj, encodedToken)}
              className="text-white bg-blue-400 rounded-full text-sm font-semibold hover:bg-blue-500 py-1"
            >
              {loading ? "Updating" : "Update"}
            </button>
            <button
              className="text-white bg-blue-400 rounded-full text-sm font-semibold hover:bg-blue-500 py-1"
              onClick={() => setProfileModal(!profilemodal)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
