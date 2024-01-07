import { createSlice } from "@reduxjs/toolkit";
import { getallusershelper } from "../constants/UserHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsersCreator = createAsyncThunk(
  "post/getAllUsers",
  async () => {
    try {
      const res = getallusershelper();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    allusersdata: [],
    loading: false,
    currentuser: {},
  },
  reducers: {
    updateallusers: (state, action) => {
      state.allusersdata = [...state.allusersdata].map((user) => {
        if (user.username === action.payload.username) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
    updatefounduser: (state, action) => {
      state.allusersdata = [...state.allusersdata].map((user) => {
        if (user.username === action.payload.username) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersCreator.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getAllUsersCreator.fulfilled, (state, action) => {
        state.allusersdata = action.payload;
        state.loading = false;
      }),
      builder.addCase(getAllUsersCreator.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;

export const { getallusers, updateallusers, updatefounduser } =
  userSlice.actions;
