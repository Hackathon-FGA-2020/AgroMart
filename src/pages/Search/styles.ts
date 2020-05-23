import styled from 'styled-components/native';
import { metrics, fonts } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Input = styled.TextInput`
  padding: 0 15px;
  height: 45px;
  border-radius: 10px;
  border: 2px #888888;
  margin: 30px 20px 15px;
  font-size: 18px;
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
  background: rgba(0, 0, 0, 0.35);
`;

export const CityImage = styled.Image`
  width: ${metrics.SCREEN_WIDTH * 0.41}px;
  height: ${metrics.SCREEN_WIDTH * 0.41}px;
`;
