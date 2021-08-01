import React from 'react';

// style using styling object
const styleObject = {
    img: {
        width: '70vw',
        margin: 'auto 15vw',
        height: '100vh',
        color: 'white',
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
                />
            </div>
        </>
    );
};

export default Error;
