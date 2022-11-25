import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../../Features/AddBook';
import BooksView from '../../Features/BooksView';
import EditBook from '../../Features/EditBook';
import Navbar from '../layout/Navbar';
import Home from './Home';


const Index = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/edit-book" element={<EditBook />} />
           
        </Routes>
            
        </BrowserRouter>
    );
};

export default Index;