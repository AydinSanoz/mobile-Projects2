import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, FlatList} from 'react-native'; 
import ProductCard from './components/ProductCard';



const Main = () => {

    const [Product, setProduct] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

   

    const fetchData = async () =>{
        console.log("fetchStarts")
        const {data} = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json')
        console.log("fetchEnds")
        setProduct(data)
    }
    
    const renderProduct = ({item}) => {
        return <ProductCard item = {item}/>
    }
    return(
        <SafeAreaView>
            <View>
                <Text> Main</Text>
                <Text> product </Text>
                <FlatList 
                    data = {Product}
                    renderItem = {renderProduct}
                    
                    keyExtractor = {(_,index)=> index.toString()}
                />
            </View>
        </SafeAreaView>
    )
} 
export default Main; 