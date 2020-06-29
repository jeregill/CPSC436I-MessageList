import React from 'react';
import './spinner.css';

function Spinner() {
    return (
        <div className="overlay-center">
            <div className='container'>
            <div className="loader">
            Loading...
            </div>
            </div>
        </div>
    );
}

export default Spinner;