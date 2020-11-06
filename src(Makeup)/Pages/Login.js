import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import axios from 'axios';

import {MyBanner, MyButton} from '../components';

const Login = (props) => {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('fetchStarts');
    const {data} = await axios.get(
      'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    );
    console.log('fetchData -> data', data);
    console.log('fetchEnds');
    setIsLoading(false);
    setProducts(data);
  };
  const renderProduct = (item) => {
    console.log(item);
    return <MyBanner item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            horizontal
            data={Products}
            renderItem={renderProduct}
            keyExtractor={(_, index) => index.toString()}
          />
        )}
        <View style={{flex: 1}}>
          <Text style={styles.text}>Explore Top Brands For You</Text>
          <Text style={[styles.text, styles.desc]}>
            Discover products easily by swipping from one brand to another{' '}
          </Text>
          
        </View>
        <View style={[styles.buttonContainer, {justifyContent : 'center', alignItems :'flex-start', marginLeft:10}]}>
            <MyButton 
              title = 'Sign Up Free Account'
              color = '#CDC1B4'
              fontSize = {20}
              underline = 'underline'
              onPress = {() => props.navigation.navigate('LoginPage',{login : 'SignUp'})}
            />
          </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#CDC1B4"
            title="Login"
            onPress={() => props.navigation.navigate('LoginPage', {login : 'Login'})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Login};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24252A',
  },
  text: {
    fontSize: 45,
    color: '#CDC1B4',
    margin: 10,
    padding: 8,
  },
  desc: {
    fontSize: 20,
    textShadowColor: 'white',
    textShadowRadius: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
