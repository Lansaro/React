import { useState } from 'react';

const Form = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confPass, setConf] = useState('');

    const [fNameErr, setFNameErr] = useState('First Name must be at least 2 chars');
    const [lNameErr, setLNameErr] = useState('Last Name must be at least 2 chars');
    const [emailErr, setEmailErr] = useState('Email must be at least 2 chars');
    const [passErr, setPassErr] = useState('Password must be at least 8 characters');
    const [confErr, setConfErr] = useState('Passwords must match');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form is submitted!');
        setFName('');
        setLName('');
        setEmail('');
        setPass('');
        setConf('');
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor='fName'>First Name</label>
                <input type='text' id='fName' value={fName} onChange={(e) => setFName(e.target.value)}/>
            </div>
            { fName.length > 0 && fName.length < 2 ? <p>{ fNameErr }</p> : null}
            <div>
                <label htmlFor='lName'>Last Name</label>
                <input type='text' id='lName' value={lName} onChange={(e) => setLName(e.target.value)}/>
            </div>
            { lName.length > 0 && lName.length < 2 ? <p>{ lNameErr }</p> : null}
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            { email.length > 0 && email.length < 2 ? <p>{ emailErr }</p> : null}
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => setPass(e.target.value)}/>
            </div>
            { password.length > 0 && password.length < 8 ? <p>{ passErr }</p> : null}
            <div>
                <label htmlFor='confPass'>Confirm Password</label>
                <input type='password' id='confPass' value={confPass} onChange={(e) => setConf(e.target.value)}/>
            </div>
            { password !== confPass ? <p>{ confErr }</p> : null}
            <button>Submit</button>
        </form>
    );
}

export default Form;