import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Button, Alert} from 'react-native';
import Axios from 'axios';
import {JobItem} from '../components';
import {FlatList} from 'react-native-gesture-handler';
import {JobStyles} from '../styles';
import Modal from 'react-native-modal';
import {set} from 'react-native-reanimated';
import {ModalComponent} from '../components';

export const Job = (props) => {
  const [Jobs, setJobs] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [jobSelected, setJobSelected] = useState('');

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedJob.toLowerCase()}`,
    );
    setJobs(response.data);
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={JobStyles.text}>
          SELECTED LANG :{selectedJob.toUpperCase()}
        </Text>

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={Jobs}
          renderItem={({item}) => {
            return <JobItem item={item} onSelect={() => onSelectJob(item)} />;
          }}
        />

        <Modal isVisible = {modalFlag} onBackdropPress = {()=>setModalFlag(false)}>
          <ModalComponent selectedItem = {jobSelected}/>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
