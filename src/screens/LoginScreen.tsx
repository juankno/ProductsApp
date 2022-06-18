import React from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';

const LoginScreen = () => {
    return (
        <>
            {/* background */}
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={loginStyles.formContainer}>

                    {/* Keyboard avoid view */}
                    <WhiteLogo />

                    <Text style={loginStyles.title}>Login</Text>

                    <Text style={loginStyles.label}>Email:</Text>

                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIos,
                        ]}
                        selectionColor="white"

                        // TODO: onchange, value
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={loginStyles.label}>Password:</Text>

                    <TextInput
                        placeholder="*******"
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        underlineColorAndroid="white"
                        keyboardType="visible-password"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIos,
                        ]}
                        selectionColor="white"

                        // TODO: onchange, value
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {/* Login Button */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Create a new account */}
                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => console.log('press')}
                        >
                            <Text style={loginStyles.buttonText}>Nueva cuenta</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>

        </>
    );
};

export default LoginScreen;
