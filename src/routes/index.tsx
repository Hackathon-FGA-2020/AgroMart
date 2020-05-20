import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StoreDetail from '../pages/StoreDetail';
import AuthRoutes from './auth.routes';
import ProfileRoutes from './profile.routes';
import TabRoutes from './tab.routes';

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
      <App.Screen
        name="Profile"
        component={user ? ProfileRoutes : AuthRoutes}
      />
      <App.Screen name="StoreDetail" component={StoreDetail} />
    </App.Navigator>
  );
};

export default Routes;
