import { Calculation, History, Profile } from '@/screens';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';

type MaterialDesignIconName = React.ComponentProps<
  typeof MaterialDesignIcons
>['name'];

export const MainTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    tabBarLabelPosition: 'below-icon',
    animation: 'fade',
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: MaterialDesignIconName | null = null;

      switch (route.name) {
        case 'Calculation':
          iconName = 'calculator';
          break;
        case 'Profile':
          iconName = focused ? 'account-circle' : 'account-circle-outline';
          break;
        case 'History':
          iconName = 'history';
          break;
        default:
          throw new Error('This icon does not exist!');
      }

      return <MaterialDesignIcons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
  }),
  screens: {
    Calculation: createBottomTabScreen({
      screen: Calculation,
    }),

    History: createBottomTabScreen({
      screen: History,
    }),
    Profile: createBottomTabScreen({
      screen: Profile,
    }),
  },
});
