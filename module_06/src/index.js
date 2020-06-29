/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

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

console.log('hello world')

function App() {
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

export default App;
