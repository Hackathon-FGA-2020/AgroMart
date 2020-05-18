import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './pages/SignIn';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#EAEAEA" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#EAEAEA' }}>
        {/* <Routes /> */}
        <SignIn />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
