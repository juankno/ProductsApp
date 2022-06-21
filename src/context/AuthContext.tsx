import React, { createContext, useReducer } from 'react';
import { Usuario } from '../interfaces/loginResponse';
import { authReducer, AuthState } from './AuthReducer';


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

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
};


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signUp = () => { };
    const signIn = () => { };
    const removeError = () => { };
    const logout = () => { };

    return (
        <AuthContext.Provider value={{
            ...authInitialState,
            signUp,
            signIn,
            removeError,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );

};

