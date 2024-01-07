import axios from "axios";

export const deletecomment = async (postid, commentid, token) => {
    const res = await axios.delete(
      `/api/comments/delete/${postid}/${commentid}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };

  export const addcommenthelper = async (postid, commentData, token) => {
    const res = await axios.post(
      `/api/comments/add/${postid}`,
      { commentData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };

  export const editcomment = async (postid, commentid, commentData, token) => {
    const res = await axios.post(
      `/api/comments/edit/${postid}/${commentid}`,
      {
        commentData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };