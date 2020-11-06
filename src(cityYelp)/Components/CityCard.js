import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CityCard = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}
        onPress= {(item)=> props.onPress(item)}
      >
        <Text style={styles.cities}>{props.cityName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { CityCard };

const styles = StyleSheet.create({
  container: {
    margin: 3,
    padding: 10,
    borderRadius: 5,
  },
  cities: {
    textAlign: 'center',
    fontSize: 25,
  },
});
