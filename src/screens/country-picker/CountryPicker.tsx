import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getDeliveryPoints } from '@/api/api';
import { DeliveryPointType } from '@/api/types';
import { Header } from '@/components';
import { DeliveryPoint } from '@/screens/country-picker/DeliveryPoint';
import { useCalculationStore } from '@/store/useCalculation';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

export const CountryPicker = () => {
  const navigation = useNavigation();
  const { mode } = useCalculationStore();

  const [deliveryPoints, setDeliveryPoints] = useState<DeliveryPointType[]>([]);
  const { setDeliveryPoint } = useCalculationStore();

  useEffect(() => {
    getDeliveryPoints().then(res => setDeliveryPoints(res.data.points));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Header
        title={mode === 'from' ? 'Откуда?' : 'Куда?'}
        leftAction={
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialDesignIcons name="close" size={24} color={'#111827'} />
          </Pressable>
        }
      />

      <View style={{ flex: 1 }}>
        <FlatList
          data={deliveryPoints}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setDeliveryPoint(item);
                navigation.goBack();
              }}
            >
              <DeliveryPoint point={item} />
            </Pressable>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
