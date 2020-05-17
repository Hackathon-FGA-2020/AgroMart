import { Platform, PixelRatio } from 'react-native';

import metrics from './metrics';

const normalize = (size) => {
  const scale = metrics.SCREEN_WIDTH / 320;
  const newSize = scale * size;
  return Math.round(
    Platform.select({
      ios: PixelRatio.roundToNearestPixel(newSize) - 2,
      android: PixelRatio.roundToNearestPixel(newSize) - 2,
      default: size,
    })
  );
};

export default {
  SMALL: normalize(14),
  EXTRA_SMALL: normalize(12),
  VERY_EXTRA_SMALL: normalize(10),
  MEDIUM: normalize(16),
  EXTRA_MEDIUM: normalize(18),
  BIG: normalize(20),
  EXTRA_BIG: normalize(24),
};
