import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('teste')

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>teste</Text>
          <Text style={styles.welcome}>teste abaixo</Text>
        </View>
      </ScrollView>
    </>
  );
};

