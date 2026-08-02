import { MainTabs } from '@/navigation/MainTabs';
import { Login } from '@/screens/login/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: Login,
    MainTabs: MainTabs,
  },
});

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
