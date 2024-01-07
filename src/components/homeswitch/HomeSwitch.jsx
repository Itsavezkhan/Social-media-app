import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useDispatch } from "react-redux";
import { togglehomeswitch } from "../../Slices/PostSlice";

const Homeswitch = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-slate-300 mt-3 mb-4 flex w-full rounded-lg items-center">
        <div className="flex gap-1 w-1/2 items-center justify-center bg-white rounded-lg p-1 cursor-pointer hover:bg-gray-100" onClick={() => dispatch(togglehomeswitch("False"))}>
          <WhatshotIcon />
          <p>Latest</p>
        </div>
        <p>|</p>
        <div className="flex gap-1 w-1/2 items-center justify-center rounded-lg p-1 bg-white hover:bg-gray-100 cursor-pointer" onClick={() => dispatch(togglehomeswitch("True"))}>
          <TrendingUpIcon />
          <p>Trending</p>
        </div>
      </div>
    </>
  );
};

export default Homeswitch;
