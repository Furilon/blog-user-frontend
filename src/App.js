import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';
import BlogPage from './BlogPage';
import React from 'react';

import './styles/style.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/posts/:postId" element={<BlogPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
