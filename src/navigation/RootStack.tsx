import {
  CalculationStack,
  CalculationStackParamList,
} from '@/navigation/CalculationStack';
import { MainTabs, MainTabsParamList } from '@/navigation/MainTabs';
import { SendingStack, SendingStackParamList } from '@/navigation/SendingStack';
import { Login } from '@/screens/login/Login';
import { NavigatorScreenParams } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  CalculationStack: NavigatorScreenParams<CalculationStackParamList>;

  Login: { redirectTo: 'Calculation' };
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  SendingStack: NavigatorScreenParams<SendingStackParamList>;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: Login,
    MainTabs: MainTabs,
    CalculationStack: CalculationStack,
    SendingStack: SendingStack,
  },
});

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
