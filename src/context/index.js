import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [usersData, setUsersData] = useState([]);

    return (
        <context.Provider value={{
            userData,
            userRepos,
            usersData,
            setUsersData,
            setUserData,
            setUserRepos
        }}>
            {props.children}
        </context.Provider>
    );
}