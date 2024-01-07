import axios from "axios";

export const bookmarkhelper = async (postid, token) => {
    const res = await axios.post(
      `/api/users/bookmark/${postid}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };
  
  export const removeBookmarkthelper = async (postid, token) => {
    const res = await axios.post(
      `/api/users/remove-bookmark/${postid}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return res;
  };