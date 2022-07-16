import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton'
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';
import NewListingButton from '../navigation/NewListingButton';


function ListingsScreen({ navigation, route }) {
    const api_result = useApi(listingsApi.getListings);
    let error = api_result.error;
    if (api_result.data){
        if(api_result.data.status == 'error'){
            error = api_result.data.data;
        }
    }

    function delete_item(item_id){
        console.log('Item being deleted '+item_id);
    }

    const ListItemCard = ({ item }) => (
        <TouchableOpacity>
            <Card title={item.title} subTitle={"$" + item.price}/>
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT, item)} />
            <NewListingButton onPress={() => { delete_item(item.id) } } />
        </TouchableOpacity>
    );
    const renderListItem = ({ item }) => (
        <ListItemCard item={item} />
    );


    const listings = api_result.data.data;
    const loading = api_result.loading;
    const loadListings = api_result.request;

    //console.log(111, listings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>
            )}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={renderListItem}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        marginTop: 10,
        backgroundColor: colors.light
    },
})

export default ListingsScreen;