import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabRoutes from './tab.routes';

import StoreDetail from '../pages/StoreDetail';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

import { useAuth } from '../hooks/auth';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <App.Screen name="Home" component={TabRoutes} />

      {user ? (
        <>
          <App.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <App.Screen name="Profile" component={SignIn} />
          <App.Screen name="SignUp" component={SignUp} />
        </>
      )}

      <App.Screen name="StoreDetail" component={StoreDetail} />
    </App.Navigator>
  );
};

export default Routes;
