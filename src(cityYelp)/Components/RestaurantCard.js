import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

{
  // "address": "1 North New York Road"
  // "area": "Atlantic City / South Jersey Shore"
  // "city": "Absecon"
  // "country": "US"
  // "id": 17191
  // "image_url": "https://www.opentable.com/img/restimages/17191.jpg"
  // "lat": 39.495154
  // "lng": -74.457776
  // "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=17191"
  // "name": "Smithville Inn"
  // "phone": "6096527777"
  // "postal_code": "08205"
  // "price": 3
  // "reserve_url": "http://www.opentable.com/single.aspx?rid=17191"
  // "state": "NJ"
}



const RestaurantCard = (props) => {
  function reviewStars(num) {
    let stars = [];
    for(let i= 0; i < num; i++) {
      stars.push('🌟');
    }
    return (
      <Text>{stars}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress = {(item)=>{props.onPress(item)}}
      >
        <Image
          style={styles.image}
          source={{uri: props.Restaurant.image_url}}
        />
        <View style = {{flexDirection:'row',justifyContent: 'space-between',alignItems:'center'}}>
          <Text style={styles.text}>{props.Restaurant.name}</Text>
          <Text>{reviewStars(props.Restaurant.price)}</Text>
            
        </View>

      </TouchableOpacity>
    </View>
  );
};

export  {RestaurantCard};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
    margin: 10,
    padding: 10,
  },
  container: {
    backgroundColor: '#c75b39',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
});
