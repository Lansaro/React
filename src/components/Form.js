import { useState } from 'react';
import Table from './Table';
import React from 'react'

const Form = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({...values, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fName'>First Name</label>
                    <input name='fName' type='text' id='fName' value={data.fName || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='lName'>Last Name</label>
                    <input name='lName' type='text' id='lName' value={data.lName || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='text' id='email' value={data.email || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='pass'>Password</label>
                    <input name='pass' type='text' id='pass' value={data.pass || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='conf'>Confirm Password</label>
                    <input name='conf' type='text' id='conf' value={data.conf || ""} onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <Table props={data}/>
            </div>
        </div>
    )
}

export default Form;