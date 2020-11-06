import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {RestaurantCard, SearchBar} from '../Components';
import axios from 'axios';

let originalRestaurantData = [];

const Restaurants = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {selectedCity} = props.route.params;

  const fetchRestaurantsData = async () => {
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/restaurants',
      {
        params: {
          city: selectedCity,
        },
      },
    );
    originalRestaurantData = [...data.restaurants];
    setRestaurants(data.restaurants);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const renderRestaurants = ({item}) => {
    return (
      <RestaurantCard
        Restaurant={item}
        onPress={() => {
          props.navigation.navigate('RestaurantDetail', {
            selectedRestaurant: item,
          });
        }}
      />
    );
  };

  function searchRestaurant(val) {
    const filteredRestaurants = originalRestaurantData.filter((restaurant) => {
      const inputVal = val.toLowerCase();
      const restaurantVal = restaurant.name.toLowerCase();
      return restaurantVal.indexOf(inputVal) > -1;
    });
    setRestaurants(filteredRestaurants);
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.header}>{selectedCity} Restoranları</Text>
          <SearchBar
            placeholder="Search restaurant.."
            onSearch={(val) => {
              searchRestaurant(val);
            }}
          />
          {isLoading ?
          <ActivityIndicator size = 'large'/>
          :
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={restaurants}
            renderItem={renderRestaurants}
          />}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Restaurants};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
