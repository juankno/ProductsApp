import React, { createContext } from 'react';
import { Usuario } from '../interfaces/loginResponse';


type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: () => void;
    removeError: () => void;
    logout: () => void;
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: Props) => {

    return (
        <AuthContext.Provider value={{

        }}>
            {children}
        </AuthContext.Provider>
    );

};

