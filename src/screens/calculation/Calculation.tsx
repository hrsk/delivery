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
import { Tabs, useCalculationStore } from '@/store/useCalculation';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetBackgroundProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
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
import { colors } from '@/theme/colors';
import { palette } from '@/theme/palette';
import { useSteps } from '@/store/useSteps';
import { useOrderForm } from '@/store/useOrderForm';

type FormData = CalculateDeliveryPackageDto;

export const Calculation = () => {
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { from, to, pickFrom, pickTo, setTab, tab, setMode } =
    useCalculationStore();

  const { forwardStep } = useSteps();
  const { setPackageId, setSenderPointId, setReceiverPointId } = useOrderForm();

  const [deliveryPoints, setDeliveryPoints] = useState<DeliveryPointType[]>([]);
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

  const handlePresentBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  useEffect(() => {
    getDeliveryPoints().then(res => setDeliveryPoints(res.data.points));
    getPackagesTypes().then(res => setPackagesTypes(res.data.packages));
  }, []);

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(tab === 'approximate' ? 0 : 192, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  }, [tab, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const onSubmit = (data: FormData) => {
    if (from && to) {
      calculateDelivery({
        package: data,
        senderPoint: { latitude: from?.latitude, longitude: from?.longitude },
        receiverPoint: { latitude: to?.latitude, longitude: to?.longitude },
      }).then(res => {
        if (res.data.success) {
          navigation.navigate('SendingStack', {
            screen: 'SendingMethods',
            params: {
              sendingMethods: res.data.options,
            },
          });
          forwardStep('Step 1');
          setSenderPointId(from.id);
          setReceiverPointId(to.id);
          if (packageItem) {
            setPackageId(packageItem?.id);
          }
        }
      });
    }
    setTab(Tabs.approximate);
    reset({ length: 0, width: 0, height: 0, weight: 0 });
  };

  const bottomSheetBackground = useCallback(
    ({ style, ...props }: BottomSheetBackgroundProps) => (
      <View {...props} style={[style, styles.bottomSheetBackground]} />
    ),
    [],
  );
  const bottomSheetBackDrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Рассчитать доставку" />

        <SelectField
          label="Город отправки"
          leftIcon={
            <MaterialDesignIcons
              name="circle-double"
              size={16}
              color={palette.green500}
            />
          }
          rightIcon={
            <MaterialDesignIcons
              name="chevron-down"
              size={20}
              color={colors.input}
            />
          }
          value={from?.name ?? 'Выберите страну'}
          onPress={() => {
            pickFrom();
            navigation.navigate('CalculationStack', {
              screen: 'CountryPicker',
              params: {
                deliveryPoints,
              },
            });
          }}
        >
          <CitySuggestions
            mode={'from'}
            setMode={() => setMode('from')}
            points={deliveryPoints}
          />
        </SelectField>

        <SelectField
          label="Город назначения"
          value={to?.name ?? 'Выберите страну'}
          onPress={() => {
            pickTo();
            navigation.navigate('CalculationStack', {
              screen: 'CountryPicker',
              params: {
                deliveryPoints,
              },
            });
          }}
          leftIcon={
            <MaterialDesignIcons
              name="circle-double"
              size={16}
              color={colors.foreground}
            />
          }
          rightIcon={
            <MaterialDesignIcons
              name="chevron-down"
              size={20}
              color={colors.input}
            />
          }
        >
          <CitySuggestions
            mode={'to'}
            setMode={() => setMode('to')}
            points={deliveryPoints}
          />
        </SelectField>

        <SelectField
          label="Размер посылки"
          value={packageItem?.name ? packageItem.name : 'Не выбран'}
          onPress={handlePresentBottomSheet}
          rightIcon={
            <MaterialDesignIcons
              name="chevron-down"
              size={20}
              color={colors.input}
            />
          }
        />

        <Button
          onPress={handleSubmit(onSubmit)}
          label="Рассчитать"
          icon={{
            component: MaterialDesignIcons,
            name: 'arrow-right',
            size: 16,
            color: colors.primaryForeground,
          }}
          style={styles.submitButton}
          labelStyle={styles.buttonText}
        />

        <BottomSheetModal
          index={0}
          enableDynamicSizing={false}
          handleIndicatorStyle={{ backgroundColor: colors.background }}
          ref={bottomSheetModalRef}
          snapPoints={['50%']}
          backgroundComponent={bottomSheetBackground}
          backdropComponent={bottomSheetBackDrop}
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
              onPress={() => setTab(Tabs.approximate)}
              label="Примерные"
            />

            <Button
              style={tab === 'exact' ? styles.activeButton : styles.button}
              labelStyle={styles.bottomSheetButtonText}
              onPress={() => setTab(Tabs.exact)}
              label="Точные"
            />
          </View>
          {tab === 'exact' && <Exact control={control} />}
          {tab === 'approximate' && (
            <Approximate
              packageItem={packageItem}
              packageTypes={packageTypes}
              setPackageItem={setPackageItem}
              onClose={handleCloseBottomSheet}
            />
          )}
        </BottomSheetModal>
      </View>
    </SafeAreaView>
  );
};
