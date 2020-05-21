import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, fonts, theme } from '../../styles';
import { PLANTIO, PROFISSAO } from '../../assets/images';

export const Container = styled.View`
  flex: 1;
`;
export const ContainerD = styled.View`
  flex: 1;
  padding: ${metrics.PADDING_SCREEN * 1}px;
`;

export const CustomImage = styled(FastImage)`
  height: 30%;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: ${fonts.BIG}px;
`;

export const Subtitle = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: ${fonts.MEDIUM}px;
  color: #464646;
`;

export const Divider = styled.View`
  padding-top: 20px;
  border-bottom-color: #454545;
  border-bottom-width: 1px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const IconsCircle = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.SECONDARYCOLOR};
  margin-left: 10px;
`;

export const IconsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BodyTitle = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: ${fonts.EXTRA_MEDIUM}px;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-family: MontserratAlternates-Regular;
  margin-left: 10px;
`;

export const SingleProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const ProductText = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: ${fonts.MEDIUM}px;
  margin-left: 10px;
`;

export const DescriptionView = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const HourText = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: ${fonts.MEDIUM}px;
  margin-left: 10px;
`;

export const HourView = styled.View`
  margin-bottom: 10px;
`;
