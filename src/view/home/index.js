import React from 'react';
import { View, Text } from 'react-native';

import DrawerNav from '../../components/drawer-nav';

export default function Home({ navigation }) {
    return (
        <View>
            <DrawerNav title="Home" navigation={ navigation }/>
            <Text>Home</Text>
        </View>
    );
}