import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="text-center mt-4">
            <Link className="m-2" to="/lunchitem">Lunch</Link>
            <Link className="m-2" to="/dinner">Dinner</Link>
            <Link className="m-2" to="/breakfast">Breakfast</Link>
        </div>
    );
};

export default Menubar;