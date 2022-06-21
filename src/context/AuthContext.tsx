import React, { createContext, useReducer } from 'react';
import productApi from '../api/productApi';
import { LoginData, LoginResponse, Usuario } from '../interfaces/loginResponse';
import { authReducer, AuthState } from './AuthReducer';


type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: () => void;
    signIn: (loginData: LoginData) => void;
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
    const signIn = async ({ correo, password }: LoginData) => {
        try {

            const resp = await productApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario,
                },
            });

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Revisa tus credenciales',
            });
        }
    };
    const removeError = () => {
        dispatch({ type: 'removeError' });
    };
    const logout = () => { };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            removeError,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );

};

