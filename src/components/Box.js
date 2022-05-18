import React from 'react';

const Box = (props) => {
    const { objArr } = props
    return (
        <div>
            {objArr.map((box, index) => (
                <div key={index}
                    style={{
                        margin: '10px',
                        display: 'inline-block',
                        height: box.height,
                        width: box.width,
                        backgroundColor: box.backgroundColor
                    }}>
                </div>
            ))}
        </div>


    // <div>
    //   {
    //     ninjaBoxArray.map((box, index) => (
    //       <div key={index} style={{ 
    //           display: "inline-block",
    //           margin: "10px",
    //           height: box.size, 
    //           width: box.size, 
    //           backgroundColor: box.color
    //           }}>
    //       </div>
    //     ))
    //   }
    // </div>

    )
}

export default Box;