import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'
import Navigator from './drawer'
import { createAppContainer } from 'react-navigation';


const screens = {
    Login: {
        screen: Login
    },
    Create: {
        screen: CreateAccount
    },
    Foods: {
        screen: Navigator
    }
}

const AccountStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Create: {
        screen: CreateAccount,
        navigationOptions: {
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: "white"
        }
    },
    Foods: {
        screen: Navigator,
        navigationOptions: {
            headerShown: false
        }
    }
});

export default createAppContainer(AccountStack);