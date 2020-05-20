import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../pages/Profile';

const ProfileNavigator = createStackNavigator();

const ProfileRoutes: React.FC = () => (
  <ProfileNavigator.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <ProfileNavigator.Screen name="Profile" component={Profile} />
  </ProfileNavigator.Navigator>
);

export default ProfileRoutes;
