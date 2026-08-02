import { Button } from '@/components';
import { style } from '@/screens/login/Login.styles';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

export const Login = () => {
  const navigate = useNavigation();

  return (
    <View style={style.container}>
      <Text>Login Page</Text>
      <Button
        onPress={() => {
          navigate.navigate('MainTabs', {
            screen: 'Profile',
          });
        }}
        label="Go to profile"
      />
    </View>
  );
};
