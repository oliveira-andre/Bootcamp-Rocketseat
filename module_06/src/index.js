import React from 'react';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
  <>
    <StatusBar barstyle='light-content' backgroundColor='#7159c1' />
    <Routes />
  </>
  );
};

Main.navigationOptions = {
  title: 'Users'
};

