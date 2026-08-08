import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import {
  calculateDelivery,
  getDeliveryPoints,
  getPackagesTypes,
} from '@/api/api';
import { Button, Header } from '@/components';
import { Approximate } from '@/screens/calculation/Approximate';
import { styles } from '@/screens/calculation/Calculation.styles';
import { CitySuggestions } from '@/screens/calculation/CitySuggestions';
import { Exact } from '@/screens/calculation/Exact';
import { SelectField } from '@/screens/calculation/SelectField';
import { useCalculationStore } from '@/store/useCalculation';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import {
  CalculateDeliveryPackageDto,
  DeliveryPackage,
  DeliveryPointType,
} from '@/api/types';

type FormData = CalculateDeliveryPackageDto;

export const Calculation = () => {
  const { from, to, pickFrom, pickTo, setTab, tab } = useCalculationStore();

  const navigation = useNavigation();

  const [citySuggestions, setCitySuggestions] = useState<DeliveryPointType[]>(
    [],
  );
  const [packageTypes, setPackagesTypes] = useState<DeliveryPackage[]>([]);
  const [packageItem, setPackageItem] = useState<DeliveryPackage>();

  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
    },
  });

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    getDeliveryPoints().then(res => setCitySuggestions(res.data.points));
    getPackagesTypes().then(res => setPackagesTypes(res.data.packages));
  }, []);

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(tab === 'approximate' ? 0 : 160, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  }, [tab, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onSubmit = (data: FormData) => {
    console.log(data);

    if (from && to) {
      calculateDelivery({
        package: data,
        senderPoint: { latitude: from?.latitude, longitude: from?.longitude },
        receiverPoint: { latitude: to?.latitude, longitude: to?.longitude },
      }).then(res => console.log(res.success));
    }
    setTab('approximate');
    reset({ length: 0, width: 0, height: 0, weight: 0 });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Рассчитать доставку" />
        <View style={{ gap: 4 }}>
          <SelectField
            label="Откуда"
            value={from?.name ?? 'Выберите страну'}
            onPress={() => {
              pickFrom();
              navigation.navigate('CalculationStack', {
                screen: 'CountryPicker',
              });
            }}
          />
          <CitySuggestions mode={'from'} points={citySuggestions} />
        </View>

        <View style={{ gap: 4 }}>
          <SelectField
            label="Куда"
            value={to?.name ?? 'Выберите страну'}
            onPress={() => {
              pickTo();
              navigation.navigate('CalculationStack', {
                screen: 'CountryPicker',
              });
            }}
          />
          <CitySuggestions mode={'to'} points={citySuggestions} />
        </View>

        <SelectField
          label="Размер посылки"
          value={packageItem?.name ? packageItem.name : 'Не выбран'}
          onPress={handlePresentModalPress}
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          label="Рассчитать"
          icon={{
            component: MaterialDesignIcons,
            name: 'arrow-right',
            size: 16,
            color: '#FBFBFB',
          }}
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />

        <BottomSheetModal
          index={0}
          enableDynamicSizing={false}
          handleIndicatorStyle={{ backgroundColor: '#FFF' }}
          ref={bottomSheetModalRef}
          snapPoints={['50%']}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              opacity={0.5}
            />
          )}
        >
          <View style={styles.bottomSheetButtons}>
            <Animated.View
              style={[styles.buttonSheetAnimation, animatedStyle]}
            />
            <Button
              style={
                tab === 'approximate' ? styles.activeButton : styles.button
              }
              labelStyle={styles.bottomSheetButtonText}
              onPress={() => setTab('approximate')}
              label="Примерные"
            />

            <Button
              style={tab === 'exact' ? styles.activeButton : styles.button}
              labelStyle={styles.bottomSheetButtonText}
              onPress={() => setTab('exact')}
              label="Точные"
            />
          </View>
          {tab === 'exact' && <Exact control={control} />}
          {tab === 'approximate' && (
            <Approximate
              packageTypes={packageTypes}
              setPackageItem={setPackageItem}
            />
          )}
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};
