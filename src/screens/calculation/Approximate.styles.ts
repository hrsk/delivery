import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 12 },
  button: {
    marginTop: 8,
    borderRadius: 16,
    padding: 16,
    height: 90,
    borderColor: colors.foreground,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 16,
  },
  deliveryType: {
    ...typography.titleMd,
  },
  deliverySize: {
    ...typography.caption,
  },
  deliveryDescription: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tabHeader: {
    ...typography.titleMd,
    paddingHorizontal: 24,
  },
  checkbox: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  bottomSheetFlatList: {
    paddingHorizontal: 16,
    flex: 1,
  },
});
