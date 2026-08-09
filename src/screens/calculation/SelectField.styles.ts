import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    ...typography.caption,
  },
  pressable: {
    gap: 8,

    flexDirection: 'row',
    alignItems: 'center',

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#B7B7B7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    // width: 280,
    height: 52,
  },
  fieldText: {
    flex: 1,
    ...typography.medium,
  },
});
