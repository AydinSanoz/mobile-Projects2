import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {AppleButton} from '@invertase/react-native-apple-authentication';

import {MyInput, MyButton} from '../components';

const LoginPage = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const LogIn = () => {
    props.navigation.navigate('BottomTab')
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        props.navigation.navigate('BottomTab');
        console.log(response);
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code == 'auth/user-not-found') {
          Alert.alert('WELCOME COSMOS', 'User Not Found...');
        }
        if (error.code == 'auth/wrong-password') {
          Alert.alert(
            'WELCOME COSMOS',
            'Wrong Password... Press Forget Button to reset your password',
          );
        }
        if (error.code == 'auth/invalid-email') {
          Alert.alert('WELCOME COSMOS', 'Invalid email.');
        }
      });
  };

  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('User account created & signed in!', response);
        props.navigation.navigate('BottomTab');
      })
      .catch((error) => {
        if (error.code == 'auth/weak-password') {
          Alert.alert('WELCOME COSMOS', 'Weak Password...');
        }
        if (error.code == 'auth/invalid-email') {
          Alert.alert('WELCOME COSMOS', 'Invalid email.');
        }
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 30, textAlign: 'center'}}>
          {props.route.params.login}
        </Text>

        <MyInput
          placeholder="Enter Email..."
          bottom="#ece1ff"
          onText={(text) => setEmail(text)}
        />

        <View style={styles.passwordContainer}>
          <MyInput
            bottom="transparent"
            flex={1}
            placeholder="Password..."
            password
            onText={(pass) => setPassword(pass)}
          />

          {props.route.params.login == 'Login' && (
            <MyButton underline="none" title="Forgot ?" onPress={null} />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <MyButton
            backColor={props.route.params.login == 'Login' ? '#000a12' : 'gray'}
            color="white"
            textAlign="center"
            title={props.route.params.login}
            fontSize={20}
            onPress={props.route.params.login == 'Login' ? LogIn : SignUp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {LoginPage};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ece1ff',
    borderBottomWidth: 2,
  },
  buttonContainer: {
    margin: 10,
    padding: 1,
  },
});
