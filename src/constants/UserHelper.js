import axios from "axios";

export const getallusershelper = async () => {
  const res = await axios.get("/api/users");
  return res?.data?.users;
};

export const FollowUser = async (userid, token) => {
  const res = await axios.post(
    `/api/users/follow/${userid}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};

export const UnfollowUser = async (userid, token) => {
  const res = await axios.post(
    `/api/users/unfollow/${userid}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return res;
};
