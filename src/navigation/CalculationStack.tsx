import { DeliveryOption, DeliveryPointType } from '@/api/types';
import { Calculation, SendingMethods } from '@/screens';
import { CountryPicker } from '@/screens/country-picker/CountryPicker';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type CalculationStackParamList = {
  Calculation: undefined;

  CountryPicker: {
    deliveryPoints: DeliveryPointType[] | undefined;
  };
  Sending: {
    sendingMethods: DeliveryOption[] | undefined;
  };
};

export const CalculationStack =
  createNativeStackNavigator<CalculationStackParamList>({
    initialRouteName: 'Calculation',
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Calculation: {
        screen: Calculation,
        options: { headerShown: false },
      },
      CountryPicker: {
        screen: CountryPicker,
        options: { headerShown: false },
      },
      Sending: {
        screen: SendingMethods,
        options: { headerShown: false },
      },
    },
  });
