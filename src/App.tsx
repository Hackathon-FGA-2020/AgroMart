import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#EAEAEA" />
    <View style={{ flex: 1, backgroundColor: '#EAEAEA' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
