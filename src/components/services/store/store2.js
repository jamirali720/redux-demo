import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../../../Features/postsSlice";
import booksSlice from "../../../Features/bookSlice";

const store2 = configureStore({ 
    reducer:{
         posts: postsSlice, 
         booksReducer: booksSlice, 
    },
  
})


export default store2;