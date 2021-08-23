import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import DogList from './components/DogList';
import FryList from './components/FryList';
import Navigator from './routes/drawer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
  },
});
