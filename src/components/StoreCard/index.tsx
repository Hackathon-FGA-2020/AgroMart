import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card, PictureCard, TitleCard, LocationCard } from './styles';

interface StoreCardProps {
  id: string;
  bannerUrl: string;
  name: string;
  city: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ id, bannerUrl, name, city }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('StoreDetail')}>
      <Card>
        <PictureCard
          source={{ uri: `http://10.0.2.2:3333/files/${bannerUrl}` }}
          // source={{ uri: `http://localhost:3333/files/${bannerUrl}` }}
        />
        <TitleCard>{name}</TitleCard>
        <LocationCard>{city}</LocationCard>
      </Card>
    </TouchableOpacity>
  );
};

export default StoreCard;
