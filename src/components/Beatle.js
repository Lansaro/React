import { useState } from 'react';

const Beatle = (props) => {
    const clickHandler = () => {
        console.log('Clicked outside of JSX');
    };
    const [nLikes, setNLikes] = useState(props.likes);
    return (
        <div>
            <p onClick={() => console.log('name was clicked')}>Name: {props.name}</p>
            <p onClick={clickHandler}>Instrument: {props.instrument}</p>
            <p>Likes: {nLikes}</p>
            <button onClick={() => setNLikes(nLikes + 1)}>+ Likes</button>
            <p>Writes Music: {props.writesMusic ? <p>YES</p> : <p>NO</p>}</p>
            <hr />
        </div>
    );
};

export default Beatle;