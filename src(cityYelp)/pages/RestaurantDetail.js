import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Button,
  Linking,
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

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;
  console.log('RestaurantDetail -> selectedRestaurant', selectedRestaurant);

  return (
    <SafeAreaView style = {{flex:1}}>
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View>
          <Image
            style={styles.image}
            source={{uri: selectedRestaurant.image_url}}
          />
          <View>
            <Text style={styles.header}>
              {selectedRestaurant.name} Restaurant
            </Text>
          </View>
          <View style={styles.container}>
            <Text style = {{fontSize :40}}>🍲 </Text>
            <Text style={styles.text}>{selectedRestaurant.area}</Text>
          </View>
          <View style={styles.container}>
            <Text style = {{fontSize :40}}>🏠 </Text> 
            <Text style={styles.text}>{selectedRestaurant.address}</Text>
          </View>
          <View style={styles.container}>
            <Text style = {{fontSize :40}}>☎ </Text>
            <Text style={styles.text}>{selectedRestaurant.phone}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            style={{flex: 1,}}
            title="Rezervasyon Yaptır"
            onPress={() =>
              Linking.openURL(selectedRestaurant.mobile_reserve_url)
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 4,
    margin: 5,
    padding: 8,
  },
  header: {
    margin: 5,
    padding: 8,
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },
  icon: {
    resizeMode: 'contain',
    height: Dimensions.get('window').height * 0.04,
    marginHorizontal: -80,
  },
  text: {
    fontSize: 20,
    color: 'white',
    padding: 8,
    borderBottomWidth: 5,
    borderColor: 'black',
  },
});
