import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../../modules/favorite/adapters/screens/Favorites';


const Stack = createStackNavigator();

export default function FavoritesStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                Options={{ title: 'Favoritos' }} />

        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})