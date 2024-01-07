import React from "react";
import { useSelector } from "react-redux";
import SinglePost from "../components/singlepost/SinglePost";

const Bookmark = () => {
  const { myBookmarks } = useSelector((state) => state.post);

  return (
    <div className="mt-2 flex flex-col items-center">
      {myBookmarks?.length > 0 ?
        myBookmarks?.map((post) => <SinglePost post={post} key={post._id} />) : <h2 className="font-bold text-2xl text-stone-600">No Bookmarks Yet</h2>}
    </div>
  );
};

export default Bookmark;
