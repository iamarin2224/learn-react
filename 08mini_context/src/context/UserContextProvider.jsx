import React from "react";
import UserContext from "./UserContext";

//provider is simply a method, we pass all the children directly
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        //wrapping it under user context, and passing any thing we might require
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider