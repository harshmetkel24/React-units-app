import React, { useEffect, useState } from 'react';
import conversionApi from './conversionApi';

const ConversionCard = () => {
    const [quantity, setQuantity] = useState('Length');
    const [lUnit, setLUnit] = useState('Meter');
    const [rUnit, setRUnit] = useState('Centimeter');
    const [lUnitValue, setlUnitValue] = useState(0);
    const [rUnitValue, setrUnitValue] = useState(0);
    const [id, setId] = useState(1);
    const [formula, setformula] = useState('');
    const [lToR, setlToR] = useState(false);
    const [rToL, setRToL] = useState(false);

    useEffect(() => {
        if (id === 1 && lToR) {
            setrUnitValue(lUnitValue * 100);
        } else if (id === 2 && lToR) {
            setrUnitValue(lUnitValue * 1000);
        } else if (id === 3 && lToR) {
            setrUnitValue(Number(lUnitValue / 60));
        } else if (id === 4 && lToR) {
            setrUnitValue(Number(lUnitValue) - 273);
        }
        console.log(rUnitValue);
    }, [id, lUnitValue, rUnitValue, lToR]);
    useEffect(() => {
        if (id === 1 && rToL) {
            setlUnitValue(rUnitValue / 100);
        } else if (id === 2 && rToL) {
            setlUnitValue(rUnitValue / 1000);
        } else if (id === 3 && rToL) {
            setlUnitValue(rUnitValue * 60);
        } else if (id === 4 && rToL) {
            setlUnitValue(Number(rUnitValue) + 273);
        }
        console.log(lUnitValue);
    }, [id, rUnitValue, lUnitValue, rToL]);
    useEffect(() => {
        // here we need to perform this update on effect not on cleanup
        const { lunit, runit, id, formula } = conversionApi.find((ele) => {
            return quantity === ele.quantity;
        });
        setId(id);
        setLUnit(lunit);
        setRUnit(runit);
        setformula(formula);
    }, [quantity, lUnit, rUnit]);
    return (
        <>
            <div className="cardConversion">
                <select
                    name=""
                    className="quantity"
                    id=""
                    onChange={(e) => {
                        setQuantity(e.target.value);
                    }}
                >
                    {conversionApi.map((ele) => {
                        return (
                            <option value={ele.quantity}>{ele.quantity}</option>
                        );
                    })}
                </select>
                <div className="sub-container">
                    <div className="left-unit conversion-card">
                        <input
                            type="number"
                            name=""
                            id=""
                            className="unit-amt"
                            autoFocus={true}
                            value={lUnitValue}
                            onInput={(e) => {
                                setlToR(true);
                                setRToL(false);
                                setlUnitValue(e.target.value);
                            }}
                        />
                        <span className="unit-name">{lUnit}</span>
                    </div>
                    <div className="equal">=</div>
                    <div className="right-unit conversion-card">
                        <input
                            type="number"
                            name=""
                            id=""
                            value={rUnitValue}
                            onInput={(e) => {
                                setRToL(true);
                                setlToR(false);
                                setrUnitValue(e.target.value);
                            }}
                            className="unit-amt"
                        />
                        <span className="unit-name">{rUnit}</span>
                    </div>
                </div>
                <div className="bottom-container">
                    <span className="formula">Formula</span>
                    <p className="formula-value">{formula}</p>
                </div>
            </div>
        </>
    );
};

export default ConversionCard;
