import { DeliveryOption } from '@/api/types';
import { SendingMethods } from '@/screens';
import { Recipient } from '@/screens/sending-methods/Recipient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type SendingStackParamList = {
  SendingMethods: {
    sendingMethods: DeliveryOption[] | undefined;
  };
  Recipient: undefined;
};

export const SendingStack = createNativeStackNavigator<SendingStackParamList>({
  initialRouteName: 'SendingMethods',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SendingMethods: {
      screen: SendingMethods,
      options: { headerShown: false },
    },
    Recipient: {
      screen: Recipient,
      options: { headerShown: false },
    },
  },
});
