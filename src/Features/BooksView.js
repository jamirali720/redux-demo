import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './bookSlice';

const BooksView = () => {
    const books = useSelector(state => state.booksReducer.books)
    
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div style={{width: "45rem", height:"15rem", margin: "auto"}}>
           <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Title</th>
                    <th> Author</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {books && books.map(book => {
                    const {id, title, author} = book;
                    return <tr key={id}>
                        <td> {id} </td>
                        <td> {title} </td>
                        <td> {author} </td>
                        <td>
                           <Link to="/edit-book" state={book} >  <button className='btn btn-primary mx-2'>Edit </button> </Link>
                            <button onClick={()=> handleDelete(id)} className='btn btn-danger'> Delete </button> 
                        </td>
                    </tr>
                })}
            </tbody>
           </table>
        </div>
    );
};

export default BooksView;