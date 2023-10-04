import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const crm_user = localStorage.getItem('crm_user');

    const redirectToLogin = () => {
        console.log("user not login")
        navigate('/auth/login');
    }
    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated');
        console.log("authenticated==>",authenticated);
        console.log("user==>",user);
        if (!user) {
            if (!authenticated) {
                redirectToLogin();
            }
            if (crm_user != null) {
                const user = JSON.parse(crm_user);
                setUser(user);
            }
        }
    }, [user])
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};