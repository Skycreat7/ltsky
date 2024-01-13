import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (callback) => {
        setIsLoggedIn(true);
        callback(); // Callback nach erfolgreicher Anmeldung
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
