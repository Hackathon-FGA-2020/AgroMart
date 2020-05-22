import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ArrowBackComponent: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        position: 'absolute',
        zIndex: 10,
        top: Platform.OS === 'ios' ? 50 : 10,
        left: 10,
      }}
    >
      <Icon name="arrow-left" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default ArrowBackComponent;
