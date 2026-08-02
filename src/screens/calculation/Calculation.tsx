import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from './Calculation.styles';

import { Button } from '@/components';

export const Calculation = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Calculation delivery</Text>

      <View />
      <Button
        onPress={() => {
          navigate.navigate('Login');
        }}
        label="Go to login"
      />
      <Button
        onPress={() => {
          navigate.navigate('CalculationStack', { screen: 'CountryPicker' });
        }}
        label="Pick country"
      />
    </View>
  );
};
