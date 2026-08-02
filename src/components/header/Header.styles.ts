import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  side: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  center: {
    flex: 1,
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111827',
  },
});
