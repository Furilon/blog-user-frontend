import { Link } from 'react-router-dom';
import React from 'react';

export default function Header(props) {
    return (
        <div id="header">
            <Link to="/">Homepage</Link>
        </div>
    );
}
