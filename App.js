import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Navigator from './routes/drawer';
import AccountStack from './routes/AccountStack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <AccountStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
  },
});
