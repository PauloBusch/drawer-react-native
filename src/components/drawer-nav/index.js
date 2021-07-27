import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function DrawerNav({ title, navigation }) {
    return (
        <View style={ styles.container }>
            <View style={ styles.containerButton }>
                <TouchableOpacity style={ styles.button } onPress={ () => navigation.openDrawer() }>
                    <Icon name="bars" size={ 20 } color="white"/>
                </TouchableOpacity>
            </View>
            <View style={ styles.containerTitle }>
                <Text style={ styles.text }>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#BC85A3'
    },
    text: {
        color: 'white',
        margin: 5,
        fontSize: 23
    },
    containerTitle: {
        backgroundColor: '#BC85A3',
        width: '100%'
    },
    containerButton: {
        justifyContent: 'center',
        backgroundColor: '#BC85A3',
        paddingHorizontal: 10
    }
});