import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet } from 'react-native';

// id: 1048, brand: "colourpop", name: "Lippie Pencil", price: "5.0", price_sign: "$", …}
// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614"
// brand: "colourpop"
// category: "pencil"
// created_at: "2018-07-08T23:45:08.056Z"
// currency: "CAD"
// description: "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
// id: 1048
// image_link: "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"
// name: "Lippie Pencil"
// price: "5.0"
// price_sign: "$"
// product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/1048.json"
// product_colors: (34) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// product_link: "https://colourpop.com/collections/lippie-pencil"
// product_type: "lip_liner"
// rating: null
// tag_list: (2) ["cruelty free", "Vegan"]
// updated_at: "2018-07-09T00:53:23.301Z"
// website_link: "https://colourpop.com"
// __proto__: Object

const ProductCard = (props) => {
    console.log("ProductCard -> props.item", props.item)
    return (
       <View style = {styles.container}>
            <Image
                style = {styles.imageContainer}
                source = {{uri : props.item.image_link}}
            />
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>{props.item.category}</Text>
                <Text style = {styles.text}>{props.item.brand}</Text>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        padding:10,
        borderWidth: 2,
        borderRadius : 10,

    },
    imageContainer:{
        height: Dimensions.get('window').height/4,
        resizeMode : 'contain',
    },
    textContainer:{
        flexDirection :'row',
        justifyContent : 'space-between',

    },

    text:{ 
        margin:10,
        padding:10,
        fontWeight :'bold',
        fontSize: 20,
    }
})

export default ProductCard ;