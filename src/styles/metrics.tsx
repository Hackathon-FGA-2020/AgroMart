import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,

  PADDING_SCREEN: 20,

  icon_size: 28,
  button_opacity: 0.7,
};
