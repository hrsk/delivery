import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 36,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: colors.background,
    borderColor: colors.borderHard,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    height: 534,
    borderRadius: 24,
  },
  bottomSheetButtons: {
    flexDirection: 'row',
    backgroundColor: colors.muted,
    marginHorizontal: 24,
    borderRadius: 999,
    justifyContent: 'space-between',
    padding: 4,
    marginBottom: 12,
  },
  buttonSheetAnimation: {
    position: 'absolute',
    left: 4,
    top: 4,
    width: 160,
    height: 42,
    borderRadius: 999,
    backgroundColor: colors.background,
    boxShadow:
      '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  activeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    backgroundColor: colors.background,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 160,
    height: 42,
  },
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 160,
    height: 42,
  },
  bottomSheetButtonText: {
    ...typography.bold,
    color: colors.foreground,
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
  },
  bottomSheetBackground: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
