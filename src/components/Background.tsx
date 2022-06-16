import { View, Text, Dimensions } from 'react-native';
import React from 'react';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Background = () => {
    return (
        <View style={{
            position: 'absolute',
            backgroundColor: '#5856D6',
            top: -250,
            width: SCREEN_WIDTH + 300,
            height: SCREEN_HEIGHT + 300,
            transform: [
                { rotate: '-70deg' },
            ],
        }} />

    );
};

export default Background;
