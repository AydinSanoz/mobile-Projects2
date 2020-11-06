import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = (props) => {
    return(
        <View>
            <TextInput
                style= {styles.inputContainer}
                placeholder = {props.placeholder}
                onChangeText = {(val)=>{props.onSearch(val)}}
            />
        </View>
    )
  
};

export {SearchBar};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    padding: 15,
  },
});
