import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        val: '',
        error: ''
    },
    lastName: {
        val: '',
        error: ''
    }
};
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_FIRST_NAME":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    val: action.payload,
                }
            };
        case "SET_LAST_NAME":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    val: action.payload,
                }
            }
        case "SET_FIRST_NAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    error: action.payload,
                }
            }
        case "SET_LAST_NAME_ERROR":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    error: action.payload,
                }
            }
        default:
            return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleLastNameChange = (e) => {
        dispatch({ type: "SET_LAST_NAME", payload: e.target.value});
    };
    const handleFirstNameChange = (e) => {
        if (e.target.value.length < 5) {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: 'First name must be at least 5 chars.'
            })
        } else {
            dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: ''
            });
        };
        dispatch({
            type: "SET_FIRST_NAME",
            payload: e.target.value
        });
    }
    return (
        <form>
            <h1>First Name: {state.firstName.val}</h1>
            <h2>Last Name: {state.lastName.val}</h2>
            <div>
                First Name:
                <input type='text' onChange={handleFirstNameChange} />
            </div>
            <p>{ state.firstName.error }</p>
            <div>
                Last Name:
                <input type='text' onChange={handleLastNameChange} />
            </div>
        </form>
    )
}

export default Form;