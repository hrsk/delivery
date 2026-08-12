import { DeliveryOption } from '@/api/types';
import { SendingMethods } from '@/screens';
import { PaymentMethods } from '@/screens/sending-methods/PaymentMethods';
import { Receiver } from '@/screens/sending-methods/Receiver';
import { ReceiverAddress } from '@/screens/sending-methods/ReceiverAddress';
import { Sender } from '@/screens/sending-methods/Sender';
import { SenderAddress } from '@/screens/sending-methods/SenderAddress';
import { Success } from '@/screens/sending-methods/Success';
import { VerifyAndConfirm } from '@/screens/sending-methods/VerifyAndConfirm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type SendingStackParamList = {
  SendingMethods: {
    sendingMethods: DeliveryOption[] | undefined;
  };
  Receiver: undefined;
  Sender: undefined;
  ReceiverAddress: undefined;
  SenderAddress: undefined;
  PaymentMethods: undefined;
  VerifyAndConfirm: undefined;
  Success: undefined;
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
    Receiver: {
      screen: Receiver,
      options: { headerShown: false },
    },
    Sender: {
      screen: Sender,
      options: { headerShown: false },
    },
    ReceiverAddress: {
      screen: ReceiverAddress,
      options: { headerShown: false },
    },
    SenderAddress: {
      screen: SenderAddress,
      options: { headerShown: false },
    },
    PaymentMethods: {
      screen: PaymentMethods,
      options: { headerShown: false },
    },
    VerifyAndConfirm: {
      screen: VerifyAndConfirm,
      options: { headerShown: false },
    },
    Success: {
      screen: Success,
      options: { headerShown: false },
    },
  },
});
