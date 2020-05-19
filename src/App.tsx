import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './pages/Profile';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#EAEAEA" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#EAEAEA' }}>
        {/* <Routes /> */}
        <Profile />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
