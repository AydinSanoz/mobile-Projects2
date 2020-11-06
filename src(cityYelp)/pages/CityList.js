import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {CityCard, SearchBar} from '../Components';
import axios from 'axios';

let originalCityList = []

const Cities = (props) => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchCityData = async () => {
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    originalCityList = [...data.cities]
    setCityList(data.cities);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {
    return (
      <CityCard
        cityName={item}
        onPress={() =>
          props.navigation.navigate('Restaurants',{selectedCity : item})
        }
      />
    );
  };

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#c2c2c2'}} />
  );

  function onSearchCity(val){
    const filteredCities = originalCityList.filter((city)=>{
      const inputVal = val.toLowerCase();
      const cityVal = city.toLowerCase();
      return(
        cityVal.includes(inputVal)
      )
      
    })  
    setCityList(filteredCities)
  }

  return (
    <SafeAreaView>
      <Text style = {styles.header}>Bir Şehir Seçiniz</Text>
      <SearchBar
        placeholder = 'Search a city ...'
        onSearch={(val) => {
          onSearchCity(val);
        }}
      />
      {isLoading ?
      <ActivityIndicator size = 'large'/>
      :
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
        ItemSeparatorComponent={renderSeperator}
      />}
    </SafeAreaView>
  );
};

export {Cities};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
