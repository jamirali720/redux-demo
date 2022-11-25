import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export  const getPosts = createAsyncThunk("posts/getPosts", async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
})

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading : false,
        posts: [], 
        error: null,

    }, 
    reducers: {
        increment: (state) => {

        }
    }, 


    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
           
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;           
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error;           
        })
    }
    
})

export const {increment} = postsSlice.actions;

export default postsSlice.reducer;