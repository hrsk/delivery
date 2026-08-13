import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  box: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 99,
    textAlign: 'center',
    lineHeight: 20,
  },
  checked: {
    backgroundColor: colors.foreground,
    color: colors.background,
  },
  label: {
    ...typography.bodySm,
    color: colors.foreground,
  },
});
