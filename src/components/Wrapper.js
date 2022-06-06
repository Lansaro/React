import { useState } from "react";
import AppContext from "../context/AppContext";

const Wrapper = ({ children }) => {
    const [name, setName] = useState("Jack Daniels");
    return (
        <AppContext.Provider value={{name,setName}}>
            {children}
        </AppContext.Provider>
    );
};

export default Wrapper;