import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CountryPicker.styles';

import { getDeliveryPoints } from '@/api/api';
import { Point } from '@/api/types';
import { Header } from '@/components';
import { DeliveryPoint } from '@/screens/country-picker/DeliveryPoint';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export const CountryPicker = () => {
  const navigate = useNavigation();

  const [deliveryPoints, setDeliveryPoints] = useState<Point[]>([]);

  useEffect(() => {
    getDeliveryPoints().then(res => setDeliveryPoints(res.data.points));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title="Where to deliver?"
        leftAction={
          <Pressable onPress={() => navigate.goBack()}>
            <MaterialDesignIcons name="close" size={24} color={'#111827'} />
          </Pressable>
        }
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={deliveryPoints}
          renderItem={({ item }) => <DeliveryPoint point={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
