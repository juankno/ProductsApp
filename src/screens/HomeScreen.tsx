import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


const HomeScreen = () => {

  const { user, token, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="home-outline" size={30} />
        <Text style={{ alignSelf: 'center', marginLeft: 10 }}>Home Screen</Text>
      </View>

      <Button
        title="Logout"
        color="#5856D6"
        onPress={logout}
      />

      <Text>{JSON.stringify(user, null, 3)}</Text>
      <Text>{JSON.stringify(token, null, 3)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
