import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './hooks';
import Routes from './routes';
import StoreDetail from './pages/StoreDetail';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#EAEAEA" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#EAEAEA' }}>
        {/* <Routes /> */}
        <StoreDetail />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
