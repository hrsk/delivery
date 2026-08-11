import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: 116,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.borderHard,
    padding: 16,
  },
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    flex: 1,
  },
  type: {
    ...typography.caption,
    color: colors.surface,
  },
  days: {
    ...typography.caption,
    color: colors.surface,
  },
  price: {
    ...typography.bodyLg,
    color: colors.foreground,
  },
});
