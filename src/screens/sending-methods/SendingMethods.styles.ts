import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingHorizontal: 16,
    // paddingTop: 36,
    backgroundColor: colors.background,
    gap: 8,
  },
  container: {
    paddingHorizontal: 16,
    gap: 8,
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 24,
  },
  listItem: {
    gap: 8,
  },
});
