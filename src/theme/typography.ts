import { Nunito } from '@/theme/fonts';
import { StyleSheet } from 'react-native';

const lineHeightToPx = (fontSize: number, lineHeight: number): number =>
  Math.round((fontSize * lineHeight) / 100);

export const typography = StyleSheet.create({
  titleMd: {
    fontFamily: Nunito.BOLD,
    fontSize: 24,
    lineHeight: lineHeightToPx(24, 133),
  },
  bodyLg: {
    fontFamily: Nunito.MEDIUM,
    fontSize: 24,
    lineHeight: lineHeightToPx(24, 133),
  },
  regular: {
    fontFamily: Nunito.REGULAR,
    fontSize: 16,
    lineHeight: lineHeightToPx(16, 150),
  },
  medium: {
    fontFamily: Nunito.MEDIUM,
    fontSize: 14,
    lineHeight: lineHeightToPx(14, 150),
  },
  bold: {
    fontFamily: Nunito.BOLD,
    fontSize: 18,
    lineHeight: lineHeightToPx(14, 144),
  },
  link: {
    fontFamily: Nunito.REGULAR,
    fontSize: 16,
    lineHeight: lineHeightToPx(16, 150),
  },
  caption: {
    fontFamily: Nunito.REGULAR,
    fontSize: 14,
    lineHeight: lineHeightToPx(14, 157),
  },
});
