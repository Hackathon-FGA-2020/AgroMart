import styled from 'styled-components/native';
import { metrics, fonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 2%;
  align-items: center;
`;

export const CardsContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${metrics.PADDING_SCREEN * 18.4}px;
`;

export const CardCity = styled.TouchableOpacity`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  margin: ${metrics.PADDING_SCREEN * 0.6}px;
  justify-content: center;
`;

export const CityText = styled.Text`
  position: absolute;
  align-self: center;
  font-family: MontserratAlternates-Regular;
  color: #fff;
  font-size: ${fonts.SMALL}px;
`;

export const CardMask = styled.View`
  position: absolute;
  justify-content: center;
  width: ${metrics.SCREEN_WIDTH * 0.41}px;
  height: ${metrics.SCREEN_WIDTH * 0.41}px;
  z-index: 1;
  background: rgba(1, 1, 1, 0.2);
`;

export const CityImage = styled.Image`
  width: ${metrics.SCREEN_WIDTH * 0.41}px;
  height: ${metrics.SCREEN_WIDTH * 0.41}px;
`;
