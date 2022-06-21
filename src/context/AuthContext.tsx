import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    logout: () => void;
    removeError: () => void;
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

    useEffect(() => {
        validateToken();
    }, []);


    const validateToken = async () => {
        const token = await AsyncStorage.getItem('token');

        if (!token) { return dispatch({ type: 'notAuthenticated' }); }


        const resp = await productApi.get<LoginResponse>('/auth');

        if (resp.status !== 200) { return dispatch({ type: 'notAuthenticated' }); }

        await AsyncStorage.setItem('token', resp.data.token);

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario,
            },
        });


    };


    const signUp = () => { };

    const signIn = async ({ correo, password }: LoginData) => {
        try {

            const { data } = await productApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario,
                },
            });

            await AsyncStorage.setItem('token', data.token);

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

