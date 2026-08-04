import { StyleSheet } from 'react-native';
export const lineHeightToPx = (fontSize: number, lineHeight: number): number =>
  Math.round((fontSize * lineHeight) / 100);

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 14,
    lineHeight: lineHeightToPx(14, 157),
  },
  pressable: {
    // flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

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
});
