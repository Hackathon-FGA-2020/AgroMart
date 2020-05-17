import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Search from '../pages/Search';
import MapView from '../pages/MapView';
import Recomendations from '../pages/Recomendations';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#00AA95',
      inactiveTintColor: '#292929',
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="MapView"
      component={MapView}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="map" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Recomendations"
      component={Recomendations}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="info" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabRoutes;
