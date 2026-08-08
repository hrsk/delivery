import { Nunito } from '@/constants/fonts';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    borderRadius: 16,
    padding: 16,
    height: 90,
    borderColor: '#0B0B0B',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  deliveryType: {
    fontFamily: Nunito.BOLD,
    fontSize: 24,
    lineHeight: lineHeightToPx(24, 133),
  },
  deliverySize: {
    fontFamily: Nunito.MEDIUM,
    fontSize: 14,
    lineHeight: lineHeightToPx(14, 157),
  },
  deliveryDescription: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tabHeader: {
    fontSize: 24,
    lineHeight: lineHeightToPx(24, 133),
    fontFamily: Nunito.BOLD,
    paddingHorizontal: 24,
  },
  checkbox: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
