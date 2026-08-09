import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from './History.styles';

import { Button } from '@/components';

export const History = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text>History</Text>

      <View />
      <Button
        onPress={() => {
          navigate.navigate('MainTabs', { screen: 'Calculation' });
        }}
        label="Go to calculation"
        labelStyle={styles.label}
      />
    </View>
  );
};
