import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Card, PictureCard, TitleCard, LocationCard } from './styles';

interface StoreCardProps {
  id: string;
  bannerUrl: string;
  name: string;
  city: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ id, bannerUrl, name, city }) => {
  return (
    <TouchableOpacity>
      <Card>
        <PictureCard
          source={{ uri: `http://10.0.2.2:3333/files/${bannerUrl}` }}
        />
        <TitleCard>{name}</TitleCard>
        <LocationCard>{city}</LocationCard>
      </Card>
    </TouchableOpacity>
  );
};

export default StoreCard;
