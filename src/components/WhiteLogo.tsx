import { View, Text, Image } from 'react-native';
import React from 'react';

const WhiteLogo = () => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../assets/images/react-logo-white.png')}
                style={{
                    width: 110,
                    height: 100,
                }}
                resizeMode="contain"
            />
        </View>
    );
};

export default WhiteLogo;
