import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Form = (props) => {
    const { name, setName } = useContext(AppContext);
    return (
        <div className="Form">
            <p>Your Name:</p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default Form;