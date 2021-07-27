import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Home from '../../view/home';
import Cart from '../../view/cart';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerStyle={ styles.drawerStyle }
            drawerContentOptions={ { labelStyle: { color: '#fff', fontSize: 18 } } }
            drawerContent={ props => <CustomDrawerContent { ...props } /> }>
            <Drawer.Screen 
                name="Home" 
                component={ Home }
                options={ { drawerIcon: () => <Icon name="home" size={ 18 } color="#fff"/> } }/>
            <Drawer.Screen 
                name="Cart" 
                component={ Cart }
                options={ { drawerIcon: () => <Icon name="shopping-cart" size={ 18 } color="#fff"/> } }/>
        </Drawer.Navigator>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView { ...props }>
            <ProfileDrawer { ...props }/>
            <DrawerItemList { ...props }/>
            <DrawerItem label="Logout" 
                onPress={ () => props.navigation.popToTop() } 
                labelStyle={ { color: 'white', fontSize: 18 } }
                icon={ () => <Icon name="sign-out" size={ 18 } color="#fff"/> }/>
        </DrawerContentScrollView>
    );
}

function ProfileDrawer(props) {
    return (
        <TouchableOpacity onPress={ () => props.navigation.navigate('Home') }>
            <View style={ styles.container }>
                <View style={ styles.containerImage }>
                    <Image source={ { uri: 'https://randomuser.me/api/portraits/men/98.jpg' } } style={ styles.image }/>
                </View>
                <View style={ styles.containerText }>
                    <Text style={ styles.text }>Username</Text>
                    <Text style={ styles.textSmall }>Open profile</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    drawerStyle: {
        width: 250,
        backgroundColor: '#BC85A3'
    },
    container: {
        alignItems: 'center',
        height: 165
    },
    containerText: {
        alignItems: 'center',
    },
    containerImage: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 6
    },
    image: {
        width: 100,
        height: 100
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    textSmall: {
        color: 'white',
        fontSize: 12
    }
});