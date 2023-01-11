import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'


const UserContext = React.createContext()

export function GetUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState({})

    
    useEffect(() => {
        if (Object.keys(currentUser).length === 0) {
            axios.get(`http://localhost:8000/api/users/getloggedinuser`, { withCredentials: true })
                .then(res => {
                    setCurrentUser(res.data.results)
                })
                .catch(err => console.log(err))
        }
    },[currentUser])



    return Object.keys(currentUser).length !== 0 && (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    )
}