import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Login(props) {
    return (
        <View>
            <Text>Login</Text>
            <Button title="Entrar" onPress={ () => props.navigation.navigate('Menu') }/>
        </View>
    );
}