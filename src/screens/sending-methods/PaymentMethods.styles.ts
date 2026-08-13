import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
    gap: 16,
  },
  receiverAddressForm: {
    gap: 16,
    paddingHorizontal: 16,
  },
  fields: {
    gap: 16,
  },
  buttonText: {
    ...typography.medium,
    color: colors.primaryForeground,
  },
  submitButton: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: colors.foreground,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
