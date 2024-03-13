import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from '../../modules/auth/login/adapters/screens/Login';
import CreateAccount from '../../modules/auth/account/adapters/screens/CreateAccount';
import { createStackNavigator } from '@react-navigation/stack';
import UserGuest from '../../modules/auth/login/adapters/screens/UserGuest';
import UserLogged from '../../modules/auth/account/adapters/screens/UserLogged';
import Profile from '../../modules/auth/account/adapters/screens/Profile';

const Stack = createStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator initialRouteName='UserLogged' >

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: "Inicio de sesion" }}
            />

            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ title: "Crea tu cuenta" }}
            />

            <Stack.Screen
                name="UserGuest"
                component={UserGuest}
                options={{ title: "¡Vamos, Crea tu cuenta!" }}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ title: "Perfil" }}
            />

            <Stack.Screen
                name="UserLogged"
                component={UserLogged}
                options={{ title: "Cuenta" }}
            />

        </Stack.Navigator>
    )
}
