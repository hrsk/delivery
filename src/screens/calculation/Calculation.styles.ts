import { Nunito } from '@/constants/fonts';
import { lineHeightToPx } from '@/screens/calculation/SelectField.styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 36,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#B7B7B7',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    height: 534,
    borderRadius: 24,
  },
  bottomSheetButtons: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
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
    backgroundColor: '#FBFBFB',
    boxShadow:
      '0 1px 2px -1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  },
  activeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    backgroundColor: '#FBFBFB',
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
    fontSize: 18,
    fontFamily: Nunito.BOLD,
    lineHeight: lineHeightToPx(18, 144),
    color: '#0B0B0B',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Nunito.BOLD,
    lineHeight: lineHeightToPx(18, 150),
    color: '#FBFBFB',
  },
  submitButton: {
    backgroundColor: '#0B0B0B',
    borderRadius: 9999,
    marginVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
