import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DogList from './components/DogList';
import FryList from './components/FryList';

export default function App() {
  return (
    <View style={styles.container}>


      <DogList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
