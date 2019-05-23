import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => (
    <div>
        404 page was not found
        <Link to="/">Go home</Link >
    </div>
);
export default NotFoundPage;