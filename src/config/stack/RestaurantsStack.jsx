import { StyleSheet, Text, View } from "react"
import React from 'react'
import Login from '../../modules/auth/login/adapters/screens/Login'
import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from "../../modules/restaurants/adapters/screens/Restaurants"

const Stack = createStackNavigator();

export default function RestaurantsStack() {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Restaurants"
                component={Restaurants}
                options={{ title: 'Restaurantes' }} />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Inicio de sesion' }} />

        </Stack.Navigator>
    );
}
