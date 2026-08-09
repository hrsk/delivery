import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  delete: {
    backgroundColor: 'crimson',
  },
  outlined: {
    backgroundColor: colors.primaryForeground,
    borderColor: colors.input,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: colors.ringError,
    opacity: 0.3,
  },
});
