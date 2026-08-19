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
    // marginHorizontal: 24,
    backgroundColor: colors.foreground,
    borderRadius: 9999,
    // marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  popover: {
    width: 240,
    height: 96,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
    boxShadow: ' 0 2px 6px 0 rgba(0, 0, 0, 0.15)',
  },
  popoverBackground: { opacity: 0 },
  atDoor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  popoverContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popoverDescription: {
    ...typography.regularSm,
    color: colors.surface,
    letterSpacing: 0.01,
  },
  popoverTitle: {
    ...typography.semiBoldSm,
    color: colors.foreground,
  },
});
