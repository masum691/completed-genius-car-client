import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src="https://www.camping-creuse-limousin.com/images/404.jpg" alt="" />
            <Link to="/"><button className="btn btn-warning mt-2">Go Back</button></Link>
        </div>
    );
};

export default NotFound;