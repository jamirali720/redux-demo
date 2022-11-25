import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './bookSlice';

const EditBook = () => {
    const location = useLocation();


    const [title, setTitle]= useState(location.state.title);
    const [author, setAuthor]= useState(location.state.author);

    const navigate = useNavigate();
    const dispatch = useDispatch();
  

    const handleSubmit = (event) => {
        event.preventDefault();      
        dispatch(updateBook( {id: location.state.id, title, author}))
        navigate("/show-books", {replace: true})
    }

    return (
        <div>
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
            <button type='submit'> update Book</button>
           </form>
        </div>
    );
};

export default EditBook;