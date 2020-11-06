import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ReverseInput from './components/ReverseInput';

const Reverse = () =>{
    const [reversed, setReversed] = useState('');
    
        function reverseString(userVal){
            setReversed(userVal.split('').reverse())
        }
        function reverseWord(userVal){
            setReversed(userVal.split(' ').reverse().join(' '))
        }

    return(
        
        <SafeAreaView>
            <View>
                <Text style = {styles.Text}> All In Reverse</Text>
                <ReverseInput
                    placeHolder = 'Anything you want to reverse here ...'
                    onReverseString ={reverseString}
                    onReverseWord = {reverseWord}
                    reverseStringButton = 'Reverse String'
                    reverseWordButton = 'Reverse Word' 
                    result = {reversed}

                />
            </View>
        </SafeAreaView>
    )
}

export default Reverse ;

const styles = StyleSheet.create({
    Text:{
        margin:10,
        
        color : 'red',
        fontSize : 50,
        textAlign :'center',
        fontWeight : 'bold',

    }
})