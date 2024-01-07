import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getloginUser } from "../constants/LoginHelpers";

export const GetAuthUserLoginCreator = createAsyncThunk(
  "Auth/getAuthUser",
  async () => {
    try {
      const res = await getloginUser();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "autho",
  initialState: {
    authoobject: {},
  },
  reducers: {
    getAuthUserService: (state, action) => {
      state.authoobject = action.payload;
    },
    updateuser: (state, action) => {
      state.authoobject.foundUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAuthUserLoginCreator.pending, (state) => {
      state.postStatus = true;
    }),
    builder.addCase(GetAuthUserLoginCreator.fulfilled, (state,action) => {
      state.authoobject = action.payload;
      state.postStatus = false;
    }),
    builder.addCase(GetAuthUserLoginCreator.rejected, (state) => {
      state.postStatus = false;
    })
  }
});

export default authSlice.reducer;
export const { getAuthUserService, updateuser } = authSlice.actions;
