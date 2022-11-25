import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './bookSlice';

const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const numOfBooks = useSelector(state => state.booksReducer.books.length);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const book = {id : numOfBooks + 1, title, author}
        dispatch(addBook(book))
        navigate("/show-books", {replace:true})
    }
    return (
        <div>
           <h1> Add a Book</h1>
           <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Title: </label>
            <input type="text"
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <br />
            <label htmlFor="author"> Author: </label>
            <input type="text"
            id='author'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            />
            <br />
            <button type='submit'> Add Book</button>
           </form>
        </div>
    );
};

export default AddBook;