import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonText: {
    textDecorationLine: 'underline',
    color: colors.surface,
    ...typography.link,
    // fontSize: 16,
    // lineHeight: lineHeightToPx(16, 150),
    // fontFamily: Nunito.REGULAR,
  },
});
