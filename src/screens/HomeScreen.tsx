import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="home-outline" size={30} />
        <Text style={{ alignSelf: 'center', marginLeft: 10 }}>Home Screen</Text>
      </View>
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
