import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';


let origdata = []
const Brand = () => {
    
    useEffect(() => {
        
        
        fetchData();
      }, []);
    
    
    const fetchData = async () =>{
        console.log('brandPage fetch starts')
        const {data} = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
        
            origdata = [...data]
            console.log("fetchData -> data", origdata)
            console.log('brandPage fetch ends')
        
    }
    
    const renderItem = (item) => {
        console.log('Hello Aydin')
        console.log(item.name)

    }
    
    return(
        <SafeAreaView>
            <View>
                <Text>Brand List</Text>
            </View>
            <FlatList
                keyExtractor = {(_,index) =>index.toString()}
                data = {origdata}
                renderItem = {renderItem}
            />
        </SafeAreaView>
    )
}

export {Brand}