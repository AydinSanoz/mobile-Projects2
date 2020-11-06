import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, Button} from 'react-native';

const ReverseInput = (props) =>{
console.log("ReverseInput -> props", props.Reverse)
    
    const [userVal, setUserVal] = useState('');
    
    

    return(
        <View>
            <TextInput
                style = {styles.container}
                placeholder = {props.placeHolder}
                placeholderTextColor ='white'
                onChangeText = {(val)=> setUserVal(val)}
                value = {userVal}

            >
            </TextInput>
            <Button
                title = {props.reverseStringButton}
                onPress = {()=>{
                    props.onReverseString(userVal)
                    setUserVal('')
                    }
                }
            />
            <Button
                title = {props.reverseWordButton}
                onPress = {()=>props.onReverseWord(userVal)}
            />
            
            <Text style = {styles.container}>{props.result}</Text>
        </View>
    )
}

export default ReverseInput;

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: '#00000090',
        color : 'white',
        margin: 10,
        padding: 10,
        borderRadius: 4,
        fontSize: 20,
        
        
    }
})