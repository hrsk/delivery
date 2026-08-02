import { Calculation } from '@/screens';
import { CountryPicker } from '@/screens/country-picker/CountryPicker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const CalculationStack = createNativeStackNavigator({
  initialRouteName: 'Calculation',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Calculation: {
      screen: Calculation,
      options: {
        title: 'Calculate shipping',
      },
    },
    CountryPicker: {
      screen: CountryPicker,
      options: {
        title: 'Where to deliver?',
      },
    },
  },
});
