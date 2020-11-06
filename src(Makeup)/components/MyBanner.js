import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';

// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/089/original/open-uri20171223-4-pkrmxd?1514062259"
// brand: "maybelline"
// category: "lipstick"
// created_at: "2016-10-01T18:25:20.981Z"
// currency: null
// description: "↵                       ↵	Maybelline Color Sensational® Rebel Bloom lipstick offers vivacious pastels in a super-saturated lipcolour. Enjoy the kicky bouquet of lip colors in ↵pinks, reds and mauves.  Features:Super-saturated pigments take fresh picked pastels to a new bright↵Never dull, washed out or shy↵Honey nectar adds a sumptuous feel↵↵		Application: Apply lipcolor starting in the center of your upper lip. Work↵ from the center to the outer edges of your lip, following the contours ↵of your mouth. Then glide across the entire bottom lip.↵↵		↵	↵↵                    "
// id: 89
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/fb9e6485500135d94163577da4c3579b_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Color Sensational Rebel Bloom Lipcolour "
// price: "9.99"
// price_sign: null
// product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/89.json"
// product_colors: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// product_link: "https://well.ca/products/maybelline-color-sensational-rebel_101920.html"
// product_type: "lipstick"
// rating: 3
// tag_list: []
// updated_at: "2017-12-23T20:50:59.663Z"
// website_link: "https://well.ca"
// __proto__: Object

const MyBanner = (props) => {
  console.log('MyBanner -> props', props);

  return (
    <View style={styles.container}>
      <View style = {{flex:1}}>
        <Image
          style={styles.image}
          source={{uri: props.item.item.image_link}}
        />
      </View>
      <View style= {{backgroundColor : '#42424280'}}>
        <Text style = {styles.text}>{props.item.item.product_type}</Text>
      </View>
    </View>
  );
};

export {MyBanner};

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#beb4ab',
    flex: 1,
    borderRadius: 10,
    margin : 5,
    

  },
  image: {
    resizeMode :'cover',
    width : Dimensions.get('window').width * 0.80,
    height : Dimensions.get('window').height * 0.30
    
  },
  text:{
    margin :10,
    padding:8,
    alignSelf: 'center',
    fontSize : 25,
    fontWeight : 'bold',
    color : '#beb4ab',

  }
});
