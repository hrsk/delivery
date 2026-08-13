import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    gap: 8,
    padding: 16,
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    boxShadow: '0 -1px 47px 0 rgba(0, 0, 0, 0.06)',
  },
  price: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  description: {
    backgroundColor: colors.secondary,
    height: 52,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
