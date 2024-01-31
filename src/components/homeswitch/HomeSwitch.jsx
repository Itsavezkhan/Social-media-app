import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togglehomeswitch } from "../../Slices/PostSlice";

const Homeswitch = () => {
  const { homeswitch } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-slate-300 mt-3 mb-4 flex w-full rounded-lg items-center">
        <div className={`flex gap-1 w-1/2 items-center justify-center bg-white rounded-lg p-1 cursor-pointer ${!homeswitch  && 'border-b-2 border-blue-400'}`} onClick={() => dispatch(togglehomeswitch(false))}>
          <WhatshotIcon />
          <p>Latest</p>
        </div>
        <p>|</p>
        <div className={`flex gap-1 w-1/2 items-center justify-center rounded-lg p-1 bg-white ${homeswitch  && 'border-b-2 border-blue-400'} cursor-pointer`} onClick={() => dispatch(togglehomeswitch(true))}>
          <TrendingUpIcon />
          <p>Trending</p>
        </div>
      </div>
    </>
  );
};

export default Homeswitch;
