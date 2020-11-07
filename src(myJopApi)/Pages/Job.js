import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator, Button} from 'react-native';
import Axios from 'axios';
import {JobItem} from '../components';
import {FlatList} from 'react-native-gesture-handler';
import {JobStyles} from '../styles';
import Modal from 'react-native-modal';
import {ModalComponent} from '../components';
import  AsyncStorage from '@react-native-async-storage/async-storage';







export const Job = (props) => {
  const [Jobs, setJobs] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [jobSelected, setJobSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedJob.toLowerCase()}`,
    );
    setJobs(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log('Job -> setJobs', Jobs);
  const {selectedJob} = props.route.params;

  function onSelectJob(Job) {
    setModalFlag(true);
    setJobSelected(Job);
  }
  function onSaveJob(type){
    console.log('onSave Job')
    console.log(jobSelected.title)
    
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={JobStyles.text}>
          SELECTED LANG :{selectedJob.toUpperCase()}
        </Text>
        {isLoading ? (
          <ActivityIndicator size = 'large' />
        ) : (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={Jobs}
            renderItem={({item}) => {
              return <JobItem item={item} onSelect={() => onSelectJob(item)} />;
            }}
          />
        )}

        <Modal
          isVisible={modalFlag}
          onBackdropPress={() => setModalFlag(false)}>
          <ModalComponent selectedItem={jobSelected} onSave = {onSaveJob}/>
        </Modal>
        <Button title = 'Go Your Faverites' onPress = {()=>props.navigation.navigate('SavedJobs')}/>
      </View>
    </SafeAreaView>
  );
};
