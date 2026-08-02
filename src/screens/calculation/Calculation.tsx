import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { style } from './Calculation.styles';

import { Button } from '@/components';

export const Calculation = () => {
  const navigate = useNavigation();
  return (
    <View style={style.container}>
      <Text>Calculation delivery</Text>

      <View />
      <Button
        onPress={() => {
          navigate.navigate('Login');
        }}
        label="Go to login"
      />
    </View>
  );
};
