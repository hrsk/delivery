import { Nunito } from '@/constants/fonts';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  side: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    alignItems: 'flex-start',
  },

  title: {
    fontFamily: Nunito.BOLD,
    fontSize: 24,
    lineHeight: lineHeightToPx(24, 133),
    color: '#0B0B0B',
  },
});
