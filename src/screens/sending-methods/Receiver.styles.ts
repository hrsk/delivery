import { colors } from '@/theme/colors';
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
  receiverForm: {
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
    // marginHorizontal: 24,
    backgroundColor: colors.foreground,
    borderRadius: 9999,
    // marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
