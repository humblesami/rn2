import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import routes from '../navigation/routes';
import NewListingButton from './NewListingButton';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    useEffect(() => {
        registerForPushNotifications();
    }, [])
    const registerForPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);
        } catch (error) {
            console.log('Error getting a token', error);
        }
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ListingEdit"
                component={ListingEditScreen}
                options={
                    ({ navigation }) => ({
                        tabBarButton: () => <NewListingButton onPress={() => { navigation.navigate(routes.LISTING_EDIT, { price: '', title: '', id: '', description: '' }) }} />,
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-circle" color={color} size={size} />),
                    })
                }
            />
            <Tab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;