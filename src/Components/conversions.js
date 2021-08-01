import React from 'react';
import { Link } from 'react-router-dom';
import './conversion.css';
import ConversionCard from './conversionCard';

const Conversions = () => {
    return (
        <>
            <div className="header">
                <h1 className="main-heading">All About Unit conversions</h1>
                <Link to="/" className="move-to-btn">
                    Info about SI units
                </Link>
            </div>
            <div className="mainConversion">
                <ConversionCard />
            </div>
        </>
    );
};

export default Conversions;
