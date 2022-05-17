import React from 'react';

function Table({props}) {
    return (
        <div>
            <div>First Name: {props.fName}</div>
            <div>Last Name: {props.lName}</div>
            <div>Email: {props.email}</div>
            <div>Password: {props.pass.length > 0 ? <p>password (secret)</p> : null}</div>
            <div>Confirm Password: {props.conf.length > 0 ? <p>password (secret)</p> : null}</div>
        </div>
    )
}

export default Table;