import { colors } from '@/theme/colors';
import { palette } from '@/theme/palette';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // paddingHorizontal: 24,
    // paddingTop: 36,
    backgroundColor: colors.background,
    gap: 16,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.green500,
  },
  buttonText: {
    ...typography.medium,
    color: colors.primaryForeground,
  },
  submitButton: {
    backgroundColor: colors.foreground,
    borderRadius: 9999,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
  },
});
