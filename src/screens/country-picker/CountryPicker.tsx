import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CountryPicker.styles';

import { Header } from '@/components';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export const CountryPicker = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
      <Header
        title="Where to deliver?"
        leftAction={
          <Pressable onPress={() => navigate.goBack()}>
            <MaterialDesignIcons name="close" size={24} color={'#111827'} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <View />
      </View>
    </SafeAreaView>
  );
};
