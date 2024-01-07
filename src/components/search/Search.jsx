import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState();
  const { allusersdata } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  let timer = useRef();
  useEffect(() => {
    clearTimeout(timer.current);
    if (query?.length > 0) {
      timer.current = setTimeout(() => {
        setData(
          allusersdata?.filter((user) =>
            `${user.firstName} ${user.lastName}`
              ?.toLowerCase()
              .includes(query?.toLowerCase())
          )
        );
      }, 500);
    }
  }, [query]);

  return (
    <>
      <div className="bg-white rounded-lg p-1 flex items-center gap-1 z-">
        <SearchIcon />
        <input
          type="text"
          placeholder="search for users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-lg px-3 py-1 w-full outline-none"
        />
      </div>
      <div className="w-11/12 md:w-full max-h-32 overflow-y-auto absolute hide-scrollbar left-3 md:left-0">
        {query?.length > 0 && (
          <div
            className="bg-gray-400 p-1 mt-2 rounded-lg shadow-lg z-20 w-full"
            key={query._id}
          >
            {data.length > 0 ? (
              data?.map((user) => (
                <>
                  <div
                    className="flex bg-white mt-1 items-center p-1 rounded-lg gap-2 hover:bg-gray-100 z-40"
                    onClick={() => {
                      navigate(`/user/${user?._id}`);
                      setQuery("");
                    }}
                    key={user._id}
                  >
                    <img
                      src={user?.profilePic}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="">
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                </>
              ))
            ) : (
              <>
                <div className="w-full justify-center items-center flex">
                  <p className="text-white font-bold">No data found</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
