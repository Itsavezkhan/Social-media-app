import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Slices/UserSlice";
import PostSlice from "../Slices/PostSlice";
import AuthSlice from "../Slices/AuthSlice";

const store = configureStore({
    reducer: {
        post: PostSlice,
        user: UserSlice,
        autho: AuthSlice,
    }
})

export default store;