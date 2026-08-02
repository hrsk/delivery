import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { style } from './Profile.styles';

import { Button } from '@/components';

export const Profile = () => {
  const navigate = useNavigation();
  return (
    <View style={style.container}>
      <Text>Profile</Text>

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
