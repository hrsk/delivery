import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { style } from './History.styles';

import { Button } from '@/components';

export const History = () => {
  const navigate = useNavigation();
  return (
    <View style={style.container}>
      <Text>History</Text>

      <View />
      <Button
        onPress={() => {
          navigate.navigate('MainTabs', { screen: 'Calculation' });
        }}
        label="Go to calculation"
      />
    </View>
  );
};
