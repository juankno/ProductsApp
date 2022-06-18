import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { loginStyles } from '../theme/loginTheme';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

const RegisterScreen = ({ navigation }: Props) => {

  const { email, password, name, form, onChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    console.log({ name, email, password });
    Keyboard.dismiss();
  };

  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5856D6' }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={loginStyles.formContainer}>

          {/* Keyboard avoid view */}
          <WhiteLogo />

          <Text style={loginStyles.title}>Register</Text>

          <Text style={loginStyles.label}>Name:</Text>

          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIos,
            ]}
            selectionColor="white"

            onChangeText={(value) => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onRegister}
            autoCapitalize="words"
            autoCorrect={false}
          />

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

            onChangeText={(value) => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={loginStyles.label}>Password:</Text>

          <TextInput
            placeholder="*******"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIos,
            ]}
            selectionColor="white"

            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}

            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Login Button */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          {/* Create a new account */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}
            >
              <Text style={loginStyles.buttonText}>Login Now</Text>
            </TouchableOpacity>
          </View>

          {/* Return login screen*/}
          <TouchableOpacity
            onPress={() => navigation.replace('LoginScreen')}
            activeOpacity={0.8}
            style={loginStyles.buttonReturn}
          >
            <Icon name="arrow-back-outline" size={30} color="white" />

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </>
  );
};

export default RegisterScreen;
