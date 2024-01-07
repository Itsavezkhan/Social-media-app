import React from "react";
import { useState } from "react";
import { GetAuthUserLoginCreator } from "../Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import socialnetwork from "../constants/Assets/socialnetwork.jpg";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [passw, setPassw] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLoginUser = () => {
    setTimeout(() => {
      const res = dispatch(GetAuthUserLoginCreator());
      res.then((res) => navigate("/"));
    }, 1000);
    toast.success("Loggin In", {
      toastId: "success",
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-full h-screen p-4 md:p-20 items-center justify-center">
        <div className="w-full md:w-1/2">
          <img src={socialnetwork} />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-blue-500 flex flex-col justify-center items-center md:w-3/5 p-2 md:p-7 h-80 md:h-96 rounded-2xl gap-2">
            <h2 className="text-slate-100 font-bold tracking-wider text-xl md:text-2xl mb-2 md:mb-4">
              Welcome to Connexa
            </h2>
            <div className="w-full">
              <label className="text-slate-100 font-bold tracking-wider">
                Username :
              </label>
              <input
                type="text"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 outline-none rounded-full w-full"
              />
            </div>
            <div className="w-full">
              <label className="text-slate-100 font-bold tracking-wider">
                Password :
              </label>
              <input
                type="text"
                value={passw}
                placeholder="Enter password"
                onChange={(e) => setPassw(e.target.value)}
                className="p-1 outline-none rounded-full w-full"
              />
            </div>
            <button
              className="  p-1 rounded-full w-full text-white
              bg-blue-700 hover:bg-blue-800
             tracking-wide font-semibold mt-1"
            >
              Login
            </button>
            <button
              onClick={() => getLoginUser()}
              className="bg-blue-700 hover:bg-blue-800 text-white p-1 rounded-full w-full tracking-wide font-semibold mt-1 flex justify-center items-center"
            >
              Login as Guest
            </button>
            <p
              className="text-slate-100 font-semibold hover:cursor-pointer underline"
            >
              Create new account
            </p>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default Login;
