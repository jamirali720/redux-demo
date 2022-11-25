import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: [
        {id:1, title: "Holy Quran", author:"jamir ali"},
        {id:2, title: "Holy Hadith", author:"jamir ali"}
    ]
}

const booksSlice = createSlice({
    name: "books", 
    initialState: initialState, 
    reducers: {
        showBooks: (state) => state,
        addBook : (state, action) => {
            state.books.push(action.payload)
        }, 

        deleteBook : (state, action) => {
           const id = action.payload;
           console.log( state.books)
            state.books = state.books.filter(book => book.id !== id);
        }, 
        updateBook : (state, action) => {
            const {id, title, author }= action.payload;
            const isBookExist =   state.books.filter(book => book.id === id);
      
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author; 
                
            }            
        }

    }

})
export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;

export default booksSlice.reducer;