import React from 'react';
import { View, Text } from 'react-native';

import DrawerNav from '../../components/drawer-nav';

export default function Cart({ navigation }) {
    return (
        <View>
            <DrawerNav title="Cart" navigation={ navigation }/>
            <Text>Cart</Text>
        </View>
    );
}