import axios from "axios";

export const getloginUser = async () => {
  const res = await axios.post("/api/auth/login", {
    username: "rutvikumak@gmail.com",
    password: "rutvik123",
  });
  return res?.data;
};
