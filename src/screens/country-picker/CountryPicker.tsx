import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@/components';
import { CalculationStackParamList } from '@/navigation/CalculationStack';
import { styles } from '@/screens/country-picker/CountryPicker.styles';
import { DeliveryPoint } from '@/screens/country-picker/DeliveryPoint';
import { useCalculationStore } from '@/store/useCalculation';
import { colors } from '@/theme/colors';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<CalculationStackParamList, 'CountryPicker'>;

export const CountryPicker = ({ route }: Props) => {
  const { deliveryPoints } = route.params;

  const navigation = useNavigation();
  const { mode } = useCalculationStore();

  const { setDeliveryPoint } = useCalculationStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title={mode === 'from' ? 'Откуда?' : 'Куда?'}
        leftAction={
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialDesignIcons
              name="close"
              size={24}
              color={colors.foreground}
            />
          </Pressable>
        }
      />

      <View>
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
          contentContainerStyle={styles.listItem}
        />
      </View>
    </SafeAreaView>
  );
};
