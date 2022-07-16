import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";


const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    <Stack.Screen name="ListingEditScreen" component={ListingEditScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;