import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { metrics, theme } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
  padding: ${metrics.PADDING_SCREEN}px;
`;

export const CustomImage = styled(FastImage)`
  height: 30%;
  width: 100%;
`;

export const Header = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #a4a4a4;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: 23px;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentText = styled.Text`
  font-family: MontserratAlternates-Thin;
  font-size: 17px;
  text-align: justify;
  margin-top: 5px;
`;

export const IconView = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  background-color: ${theme.PRIMARYCOLOR};
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const Body = styled.ScrollView``;

export const SubTitle = styled.Text`
  font-family: MontserratAlternates-Regular;
  font-size: 21px;
  margin: 10px 0 5px;
`;
