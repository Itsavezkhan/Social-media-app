import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getallposts,
  likeposthelper,
  dislikeposthelper,
  edituserposthelper,
  deleteuserhelper,
  adduserposthelper,
} from "../constants/PostHelper";
import { editcomment,deletecomment, addcommenthelper } from "../constants/CommentHelper";
import { bookmarkhelper, removeBookmarkthelper } from "../constants/BookmarkHelper";
import { FlashOnTwoTone } from "@mui/icons-material";

export const getAllPostsCreater = createAsyncThunk(
  "posts/getAllPosts",
  async () => {
    try {
      const res = getallposts();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const LikeDislikePostsCreator = createAsyncThunk(
  "post/LikeDislikePostsCreator",
  async ({ postid, token, likeCount }) => {
    try {
      const res =
        likeCount === 0
          ? await likeposthelper(postid, token)
          : await dislikeposthelper(postid, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const MarkunmarkPostCreator = createAsyncThunk(
  "post/MarkUnmarkPostsCreator",
  async ({ postid, token, isBookMarked }) => {
    try {
      const res = !isBookMarked
        ? await bookmarkhelper(postid, token)
        : await removeBookmarkthelper(postid, token);
      return res?.data?.bookmarks;
    } catch (error) {
      console.log(error);
    }
  }
);

export const EditUserPostCreator = createAsyncThunk(
  "post/EditUserPost",
  async ({ postid, postData, token }) => {
    try {
      const res = await edituserposthelper(postid, postData, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);
export const AddCommentCreator = createAsyncThunk(
  "post/AddCommentCreator",
  async ({ postid, commentData, token }) => {
    try {
      const res = await addcommenthelper(postid, commentData, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);
export const DeleteUserPostCreator = createAsyncThunk(
  "post/DeleteUserPost",
  async ({ postid, token }) => {
    try {
      const res = await deleteuserhelper(postid, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const AddUserPostCreator = createAsyncThunk(
  "posts/AddUserPost",
  async ({ postData, token }) => {
    try {
      const res = await adduserposthelper(postData, token);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
export const EditCommentCreator = createAsyncThunk(
  "post/EditComment",
  async ({ postid, commentid, commentData, token }) => {
    try {
      const res = await editcomment(postid, commentid, commentData, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const DeleteCommentCreator = createAsyncThunk(
  "post/DeleteComment",
  async ({ postid, commentid, token }) => {
    try {
      const res = await deletecomment(postid, commentid, token);
      return res?.data?.posts;
    } catch (error) {
      console.log(error);
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    allposts: [],
    userposts: [],
    myBookmarks: [],
    homeswitch: false,
  },
  reducers: {
    togglehomeswitch: (state, action) => {
      state.homeswitch = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPostsCreater.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getAllPostsCreater.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.loading = false;
      }),
      builder.addCase(getAllPostsCreater.rejected, (state) => {
        state.loading = false;
      });

    builder.addCase(LikeDislikePostsCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(LikeDislikePostsCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
       
      }),
      builder.addCase(LikeDislikePostsCreator.rejected, (state) => {
        state.postStatus = false;
      });

    builder.addCase(MarkunmarkPostCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(MarkunmarkPostCreator.fulfilled, (state, action) => {
        state.myBookmarks = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(MarkunmarkPostCreator.rejected, (state) => {
        state.postStatus = false;
      });
    builder.addCase(EditUserPostCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(EditUserPostCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(EditUserPostCreator.rejected, (state) => {
        state.postStatus = false;
      });
    builder.addCase(AddCommentCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(AddCommentCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(AddCommentCreator.rejected, (state) => {
        state.postStatus = false;
      });
    builder.addCase(DeleteUserPostCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(DeleteUserPostCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(DeleteUserPostCreator.rejected, (state) => {
        state.postStatus = false;
      });
    builder.addCase(AddUserPostCreator.pending, (state, action) => {
      state.postStatus = true;
    }),
      builder.addCase(AddUserPostCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(AddUserPostCreator.rejected, (state) => {
        state.postStatus = false;
      });
    builder.addCase(EditCommentCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(EditCommentCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(EditCommentCreator.rejected, (state) => {
        state.postStatus = FlashOnTwoTone;
      });
    builder.addCase(DeleteCommentCreator.pending, (state) => {
      state.postStatus = true;
    }),
      builder.addCase(DeleteCommentCreator.fulfilled, (state, action) => {
        state.allposts = action.payload;
        state.postStatus = false;
      }),
      builder.addCase(DeleteCommentCreator.rejected, (state) => {
        state.postStatus = FlashOnTwoTone;
      });
  },
});

export default postSlice.reducer;

export const {togglehomeswitch} = postSlice.actions;
