import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const StackNavigator = () => {

  const { status, token } = useContext(AuthContext);


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >

      {
        (status !== 'authenticated')

          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : (

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          )
      }
    </Stack.Navigator>
  );
};

export default StackNavigator;
