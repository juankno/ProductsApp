import { View, Text } from 'react-native';
import React from 'react';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';

const LoginScreen = () => {
    return (
        <>
            {/* background */}
            <Background />

            {/* Keyboard avoid view */}
            <WhiteLogo />
        </>
    );
};

export default LoginScreen;
