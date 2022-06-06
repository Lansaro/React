import logo from '../logo.svg';
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Navbar = () => {
    const { name } = useContext(AppContext);
    return (
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>NavBar Context</h1>
            </div>
            <div className="NavBar">Hi {name}!</div>
        </header>
    )
};

export default Navbar;