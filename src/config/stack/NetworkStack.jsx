import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Network from '../../modules/network/adapters/screens/Network';


const Stack = createStackNavigator();

export default function NetworkStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Network"
                component={Network}
                Options={{ title: 'Network' }} />

        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})