import React from 'react';

import UnitCard from './unitCard';
import './SI-units.css';
import { Link } from 'react-router-dom';

const SI = () => {
    return (
        <>
            <div className="header">
                <h1 className="main-heading">All About SI Units</h1>
                <Link to="/conversions" className="move-to-btn">
                    Move to Conversions
                </Link>
            </div>
            <div className="main">
                <UnitCard />
            </div>
        </>
    );
};

export default SI;
