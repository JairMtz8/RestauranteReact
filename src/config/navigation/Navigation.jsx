import * as react from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginStack from '../stack/LoginStack';
import FavoritesStack from '../stack/FavoritesStack';
import RestaurantsStack from '../stack/RestaurantsStack';
import { Icon } from '@rneui/base'
import NetworkStack from '../../config/stack/NetworkStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (

        <NavigationContainer>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        // Retornar un Icon de React Native Elements
                        return <Icon name={iconName} type={iconType} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >

                <Tab.Screen
                    name='RestaurantsStack'
                    component={RestaurantsStack}
                    options={{ title: "Inicio" }} />

                <Tab.Screen
                    name='FavoritesStack'
                    component={FavoritesStack}
                    options={{ title: "Favoritos" }} />

                <Tab.Screen
                    name='LoginStack'
                    component={LoginStack}
                    options={{ title: "Cuenta" }} />

                <Tab.Screen
                    name='NetworkStack'
                    component={NetworkStack}
                    options={{ title: "Network" }} />


            </Tab.Navigator>

        </NavigationContainer >

    )
}

const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';

    switch (routeName) {
        case 'RestaurantsStack':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'FavoritesStack':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        case 'LoginStack':
            iconName = focused ? 'account' : 'account-outline';
            break;
        case 'NetworkStack':
            iconName = focused ? 'web' : 'web';
            break;
    }

    return { iconName, iconType };
};
