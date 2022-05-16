import React from 'react';
import { useState } from 'react';

const Profile = (props) => {
    // console.log(props.age)
    const [Age_, setAge_] = useState(props.age);
    const handleAge = () => {
        setAge_(Age_ + 1);
    }
    return (
        <div>
            <div>
                <h2 onClick={() => console.log('name was clicked')}>{ props.lName }, { props.fName }</h2>
                <p>Age: { Age_ }</p>
                <p>Hair Color: { props.hairColor }</p>
            </div>
            <div>
                <button onClick={ handleAge }>Birthday Button for { props.fName } { props.lName }</button>
            </div>
        </div>
    );
}

export default Profile;
