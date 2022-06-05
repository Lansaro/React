import React from 'react';

const Display = (props) => {
    const { allTabs, currentIndex } = props;
    return (
        <div className="results">
            <div>
                { allTabs[currentIndex].content }
            </div>
        </div>
    )
}

export default Display;