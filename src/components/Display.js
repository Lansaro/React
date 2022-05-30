import React from 'react';
import { useParams } from 'react-router-dom';

const Display = (props) => {
    const { id, color1, color2 } = useParams();
    return (
        <div>
            { isNaN(id) ?
                <h1 style={
                    color1 ?
                    {color: color1, backgroundColor: color2}
                    : null }>Word: {id}</h1> : 
                <h1 style={
                    color1 ?
                    {color: color1, backgroundColor: color2}
                    : null }>Number: {id}</h1>
            }
        </div>
    );
};

export default Display;

