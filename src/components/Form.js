import { useReducer } from "react";

const initialState = {
    firstName: {
        val: "",
        error: "",
    },
    lastName: {
        val: "",
        error: "",
    },
    email: {
        val: "",
        error: "",
    }
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
    case "SET_FIRST_NAME":
        return {
        ...state,
        firstName: {
            ...state.firstName,
            val: action.payload,
        }};
    case "SET_FIRST_NAME_ERROR":
        return {
        ...state,
        firstName: {
            ...state.firstName,
            error: action.payload,
        }};
    case "SET_LAST_NAME":
        return {
        ...state,
        lastName: {
            ...state.lastName,
            val: action.payload,
        }};
    case "SET_LAST_NAME_ERROR":
        return {
        ...state,
        lastName: {
            ...state.lastName,
            error: action.payload,
        }};
    case "SET_EMAIL":
        return {
        ...state,
        email: {
            ...state.email,
            val: action.payload,
        }};
    case "SET_EMAIL_ERROR":
        return {
        ...state,
        email: {
            ...state.email,
            error: action.payload,
        }};
    default:
        return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        if (e.target.value.length < 5) {
            dispatch({
            type: "SET_FIRST_NAME_ERROR",
            payload: "First name must be at least 5 characters",
            });
        } else {
            dispatch({
            type: "SET_FIRST_NAME_ERROR",
            payload: "",
            });
        }
        dispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
        };

    // const handleLastNameChange = (e) => {
    // dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
    // };

    const handleLastNameChange = (e) => {
        if (e.target.value.length < 5) {
            dispatch({
            type: "SET_LAST_NAME_ERROR",
            payload: "Last name must be at least 5 characters",
            });
        } else {
            dispatch({
            type: "SET_LAST_NAME_ERROR",
            payload: "",
            });
        }
        dispatch({ type: "SET_LAST_NAME", payload: e.target.value });
        };

    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)

    const handleEmailChange = (e) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.value.match(mailformat) === null) {
            dispatch({
            type: "SET_EMAIL_ERROR",
            payload: "Email must be in specific format",
            });
        } else {
            dispatch({
            type: "SET_EMAIL_ERROR",
            payload: "",
            });
        }
        dispatch({ type: "SET_EMAIL", payload: e.target.value });
        };

    return (
    <div>
        <form>
            <div>First Name:
                <input
                    type="text"
                    onChange={handleFirstNameChange}
                />
            </div>

            <div>Last Name:
                <input
                    type="text"
                    onChange={handleLastNameChange}
                />
            </div>

            {/* <div>Last Name:
            <input type="text" onChange={handleLastNameChange} />
            </div> */}

            <div>Email:
                <input
                    type="text"
                    onChange={handleEmailChange}
                />
            </div>
            <button>Submit</button>
        </form>

        <div><h1>First Name: {state.firstName.val}</h1>
            {state.firstName.error !== null && (
                <p className="error">{state.firstName.error}</p>
            )}

            <h1>Last Name: {state.lastName.val}</h1>
            {state.lastName.error !== null && (
                <p className="error">{state.lastName.error}</p>
            )}

            <h1>Email: {state.email.val}</h1>
            {state.email.error !== null && (
                <p className="error">{state.email.error}</p>
            )}
        </div>
    </div>
    );
};

export default Form;