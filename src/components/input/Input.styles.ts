import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 4,
  },
  input: {
    width: 328,
    borderColor: '#B7B7B7',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    borderWidth: 1,
    height: 40,
    borderRadius: 9999,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  label: {
    ...typography.regular,
    // fontSize: 14,
    // fontFamily: Nunito.REGULAR,
    // lineHeight: lineHeightToPx(14, 157),
    color: colors.foreground,
  },
});
