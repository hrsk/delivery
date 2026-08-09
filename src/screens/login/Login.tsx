import { Button } from '@/components';
import { styles } from '@/screens/login/Login.styles';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

export const Login = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        onPress={() => {
          navigate.navigate('MainTabs', {
            screen: 'Calculation',
          });
        }}
        label="Go to calculation"
        labelStyle={styles.label}
      />
    </View>
  );
};
