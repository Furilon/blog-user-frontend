import { Link } from 'react-router-dom';
import React from 'react';

export default function Header(props) {
    return (
        <header>
            <Link to="/blog-user-frontend">Homepage</Link>
        </header>
    );
}
