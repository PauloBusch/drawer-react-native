import React from 'react';
import type { Node } from 'react';

import Login from './src/view/login';
import Menu from './src/components/menu';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={ Login } options={ { headerShown: false } }/>
          <Stack.Screen name="Menu" component={ Menu } options={ { headerShown: false } }/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
