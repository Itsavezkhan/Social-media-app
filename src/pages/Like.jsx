import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SinglePost from "../components/singlepost/SinglePost";

const Like = () => {
  const { allposts } = useSelector((state) => state.post);
  const [likeddata, setLikedData] = useState(allposts);
  const { foundUser, encodedToken } = useSelector(
    (state) => state.autho.authoobject
  );

  useEffect(() => {
    setLikedData(
      allposts?.filter((post) =>
        post?.likes?.likedBy?.some(
          (post2) => post2?.username === foundUser?.username
        )
      )
    );
  }, []);
  return (
    <>
      <div className="mt-2 flex flex-col items-center">
        {likeddata.length > 0 ? likeddata?.map((post) => (
          <SinglePost post={post} key={post._id}/>
        )) : <h2 className="font-bold text-2xl text-stone-600">No Liked tweet Yet</h2>}
      </div>
    </>
  );
};

export default Like;