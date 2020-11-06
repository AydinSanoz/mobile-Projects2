import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';

const MyInput = (props) => {
    return(
        <View style = {{flex : props.flex}}>
            <TextInput
                
                style = {
                    [styles.MyInput, {
                        color : props.color, 
                        borderBottomColor : props.bottom 
                        } 
                    ]}
                keyboardType = {props.type}
                secureTextEntry = {props.password}
                placeholder = {props.placeholder}
                onChangeText = {props.onText}
            />
        </View>
    )
}

export {MyInput}

const styles = StyleSheet.create({
    MyInput:{
        margin: 10,
        padding: 10,
        borderBottomWidth :2,
        borderBottomColor : 'gray',
    }
})

