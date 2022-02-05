import React from 'react';
import { Image, View } from 'react-native';

const TopBar = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <Image style={{ width: '100%', height: 20, padding: 20 }} source={require('../../assets/Group.png')}></Image>

        </View>
    );
};

export default TopBar;