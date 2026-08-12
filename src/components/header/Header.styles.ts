import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.background,
  },

  leftSide: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    alignItems: 'flex-start',
  },

  title: {
    ...typography.titleMd,
    color: colors.foreground,
  },
});
