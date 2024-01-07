import axios from "axios";

export const likeposthelper = async (postid, token) => {
  const res = await axios.post(
    `/api/posts/like/${postid}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};

export const dislikeposthelper = async (postid, token) => {
  const res = await axios.post(
    `/api/posts/dislike/${postid}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};

export const deleteuserhelper = async (postid, token) => {
  const res = await axios.delete(`/api/posts/${postid}`, {
    headers: {
      authorization: token,
    },
  });
  return res;
};

export const edituserposthelper = async (postid, postData, token) => {
  const res = await axios.post(
    `/api/posts/edit/${postid}`,
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};

export const edituserdetailshelper = async (userData, token) => {
  const res = await axios.post(
    "/api/users/edit",
    {
      userData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};

export const getallposts = async () => {
  const res = await axios.get("/api/posts");
  return res?.data?.posts;
};

export const adduserposthelper = async (postData, token) => {
  const res = await axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res?.data?.posts;
};
