import { Nunito } from '@/constants/fonts';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonText: {
    textDecorationLine: 'underline',
    color: '#969696',
    fontSize: 16,
    lineHeight: lineHeightToPx(16, 150),
    fontFamily: Nunito.REGULAR,
  },
});
