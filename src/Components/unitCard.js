import React from 'react';
import si from './SI-api';
const UnitCard = () => {
    return si.map((element) => {
        const { title, symbol, dimension, quantity, definition } = element;
        return (
            <>
                <div className="card">
                    <span className="card-title card-left">Unit-name</span>
                    <span className="card-title card-title-right card-right">
                        {title}
                    </span>
                    <br />
                    <span className="unit-symbol-left card-left">
                        Unit-symbol
                    </span>
                    <span className="unit-symbol-right">{symbol}</span>
                    <br />
                    <span className="unit-dimension-left card-left">
                        Dimension-symbol
                    </span>
                    <span className="unit-dimension-right">{dimension}</span>
                    <br />
                    <span className="quantity-name card-left">
                        Quantity-name
                    </span>
                    <span className="card-right">{quantity}</span>
                    <br />

                    <span className="unit-definition-left card-left">
                        Definition
                    </span>
                    <p className="definition">{definition}</p>
                </div>
            </>
        );
    });
};

export default UnitCard;
