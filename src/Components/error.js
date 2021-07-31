import React from 'react';
// style using styling object
var styleObject = {
    img: {
        width: '70vw',
        margin: 'auto 15vw',
        height: '100vh',
    },
};
const Error = () => {
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <img
                    style={styleObject.img}
                    src="../images/page_not_found.jpg"
                    alt="Page you are looking for not found :("
                    className="image"
                />
            </div>
        </>
    );
};

export default Error;
