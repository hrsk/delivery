import { DeliveryOption } from '@/api/types';
import { Footer } from '@/components';
import { SendingMethods } from '@/screens';
import { PaymentMethods } from '@/screens/sending-methods/PaymentMethods';
import { Receiver } from '@/screens/sending-methods/Receiver';
import { ReceiverAddress } from '@/screens/sending-methods/ReceiverAddress';
import { Sender } from '@/screens/sending-methods/Sender';
import { SenderAddress } from '@/screens/sending-methods/SenderAddress';
import { Success } from '@/screens/sending-methods/Success';
import { VerifyAndConfirm } from '@/screens/sending-methods/VerifyAndConfirm';
import { useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { View } from 'react-native';

export type SendingStackParamList = {
  SendingMethods: {
    sendingMethods?: DeliveryOption[];
  };
  Receiver: undefined;
  Sender: undefined;
  ReceiverAddress: undefined;
  SenderAddress: undefined;
  PaymentMethods: undefined;
  VerifyAndConfirm: undefined;
  Success: undefined;
};

type FooterConfig = Partial<
  Record<
    keyof SendingStackParamList,
    {
      description: string;
    }
  >
>;

const footerConfig: FooterConfig = {
  Receiver: {
    description: 'Данные получателя',
  },
  Sender: {
    description: 'Данные отправителя',
  },
  ReceiverAddress: {
    description: 'Адрес получателя',
  },
  SenderAddress: {
    description: 'Адрес отправителя',
  },
  PaymentMethods: {
    description: 'Кто оплачивает доставку?',
  },
};

export const SendingStack = createNativeStackNavigator<SendingStackParamList>({
  initialRouteName: 'SendingMethods',
  screenOptions: {
    headerShown: false,
  },
  layout: ({ children }) => <SendingStackLayout>{children}</SendingStackLayout>,
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

export const SendingStackLayout = ({ children }: { children: ReactNode }) => {
  const routeName = useNavigationState(
    state => state.routes[state.index]?.name,
  );

  const config =
    routeName && routeName in footerConfig
      ? footerConfig[routeName as keyof typeof footerConfig]
      : undefined;

  return (
    <View style={{ flex: 1 }}>
      {children}
      {config && <Footer description={config.description} />}
    </View>
  );
};
