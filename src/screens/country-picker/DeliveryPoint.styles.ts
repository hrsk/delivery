import { Nunito } from '@/constants/fonts';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Nunito.REGULAR,
    paddingVertical: 16,
    color: '#0B0B0B',
    fontSize: 16,
    lineHeight: lineHeightToPx(16, 150),
  },
});
